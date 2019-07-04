const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  !duplicateNote
    ? notes.push({ title: title, body: body }) &&
      console.log(chalk.green(`Note: '${title}' added!`))
    : console.log(chalk.red("This note already exists"));

  saveNotes(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green(`Note: '${title}' successfully removed!`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red("No Note Found!"));
  }
};

const listNotes = title => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes"));

  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.bold.underline(`${title}`));
    console.log(`${note.body}`);
  } else {
    console.log(chalk.red("This note already exists"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
