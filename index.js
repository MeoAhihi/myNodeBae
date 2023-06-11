const { prototype } = require("events");
const express = require("express");
const app = express();
const PORT = 3000;
const SIZE = 3

const bingoGenerator = require("./bingo");

const tableGenerator = require("./table");

app.listen(PORT, () => console.log("Server is on http://localhost:3000"));

app.get("/", (req, res) => {
  var bingo = bingoGenerator(SIZE);
  var table = tableGenerator.generateTable(bingo);
  res.send(table);
});
