const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

console.log(yargs);
// Customize Yargs Version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  showInHelp: true,
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  showInHelp: true,
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List all notes",
  showInHelp: true,
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler() {
    console.log("Listing notes!");
  }
});

yargs.command({
  command: "read",
  describe: "Read a notes",
  showInHelp: true,
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler() {
    console.log("Reading notes!");
  }
});

yargs.parse();
