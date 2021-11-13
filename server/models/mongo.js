const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.pibrg.mongodb.net/myFirstDatabase?`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const isConnected = client.connect();


module.exports = {
    client, isConnected
}