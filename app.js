const { readNotesFromFile, addNoteToFile } = require('./note');

const notes = readNotesFromFile();
console.log('Notes:', notes);

const newNote = 'This is a new note.';
addNoteToFile(newNote);
