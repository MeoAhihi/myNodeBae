/**
 * Tasks:
 * Create CRUD operations for an API of Bookstore
 */

const express = require("express");
const app = express();
const port = 3000;

const mongodb = require('mongodb');
const client = mongodb.MongoClient;


app.listen(port, () => {
  console.log("API server is on http://localhost:" + port);
});

app.get('/bookstore/1.0.1/title', (req, res) => {
    res.json
})