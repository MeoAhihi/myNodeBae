const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
async function main() {
  const filter = {};
  const client = await MongoClient.connect(
    'mongodb://127.0.0.1:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const coll = client.db('Taskist').collection('task');
  const cursor = coll.find(filter);
  const result = await cursor.toArray();
  await client.close();
  console.log(result);
}

main()