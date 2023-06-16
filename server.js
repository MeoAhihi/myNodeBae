/**
 * Tasks:
 * Create CRUD operations for an API of Bookstore
 */

const express = require("express");
const app = express();
const port = 3000;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("API server is on http://localhost:" + port);
});

app.get("/bookstore/1.0.1/title", async (req, res) => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  projection = { _id: 0, title: 1 };
  const collection = client.db("bookstore").collection("messages");
  const cursor = collection.find(
    {},
    {
      projection,
    }
  );
  const result = await cursor.toArray();
  await client.close();
  res.json(result);
});

app.get("/bookstore/1.0.1/book/:id", async (req, res) => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  projection = { _id: 0, title: 1 };
  const collection = client.db("bookstore").collection("messages");
  const cursor = collection.find(
    {},
    {
      projection,
    }
  );
  const result = await cursor.toArray();
  await client.close();
  res.json(result);
});

app.put("/bookstore/1.0.1/book/:id", async (req, res) => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = client.db("bookstore").collection("messages");
  const result = await collection.updateOne(
    { _id: +req.params.id },
    {
      $set: {
        title: req.body.title,
      },
    }
  );
  await client.close();
  console.log(req.params);
  res.json(result);
});
