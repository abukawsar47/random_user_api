const { MongoClient, ServerApiVersion } = require("mongodb");

function dbConnect() {
  const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.89qafbd.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  console.log(dbConnect);
}

module.exports = dbConnect;
