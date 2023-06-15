const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

//connect
async function main() {
  client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  collection = client.db("bookstore").collection("messages");
}
main();
//query
async function showMessages() {
  await main();
  const cursor = collection.find({});
  const result = await cursor.toArray();
  console.log(result);
  await closeConnection();
}

//close connection
async function closeConnection() {
  await client.close();
}

//insert messages
async function AddMessage(msg, sender) {
  await main();
  await collection.insertOne({ _id: Date.now(), content: msg, sender: sender });
  console.log("add " + msg + " to database.");
  await closeConnection();
}

//remove messages
async function RemoveMessage(msgID) {
  await main();
  const deleteResult = await collection.deleteOne({ _id: msgID });
  console.log(deleteResult);
  await closeConnection();
}

module.exports = {
  showMessages: showMessages,
  AddMessage: AddMessage,
  RemoveMessage: RemoveMessage,
  closeConnection: closeConnection,
};
