const fs = require("fs");

const readNotesFromFile = () => {
  try {
    const data = fs.readFileSync("notes.txt", "utf8");
    return data.split("\n");
  } catch (error) {
    console.log("Error reading file:", error.message);
    return [];
  }
};

const addNoteToFile = (note) => {
  try {
    fs.appendFileSync("notes.txt", note + "\n");
    console.log("Note added successfully!");
  } catch (error) {
    console.log("Error adding note:", error.message);
  }
};

module.exports = {
  readNotesFromFile,
  addNoteToFile,
};