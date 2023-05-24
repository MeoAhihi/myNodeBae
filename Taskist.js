const client = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/Task'

client.connect(url, (err, db) => {
    if (err) throw err
})