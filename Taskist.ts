import  {MongoClient} from 'mongodb';

const port = 3000
const url = 'mongodb://localhost:27017'
const dbname = 'Taskist'
const client = new MongoClient(url)

client.connect()

var dblist = client.db().admin().listDatabases()
console.log(dblist.databases);