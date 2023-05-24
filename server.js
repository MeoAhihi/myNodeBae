const express = require("express");
const app = express();
const port = 3000;
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "mydb";

app.get("/", (req, res) => {
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);

    const collection = db.collection("users");

    collection.find().toArray((err, users) => {
      if (err) throw err;

      res.json(users);
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
