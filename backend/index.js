const assert = require('assert');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const tasks = require('./routes/tasks');

const cors = require('cors');
const port = 5000;

const app = express();

app.use(
  cors({
      origin: 'http://localhost:3000',
      credentials: true
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', tasks);

app.listen(port, function () {
  console.log('Server Started on Port: ' + port);
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://SimasDei:gpAQc7u4Ux3nsjjB@baltic-react-mongodb-one-l0d3u.mongodb.net/baltic-react?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(db => {
    console.log(db);
    const collection = client.db("baltic-react").collection("devices");
    // perform actions on the collection objec
    client.close();
});