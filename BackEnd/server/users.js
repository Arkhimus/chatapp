const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')
const http = require('http').Server(app);
const PORT = 5000;

app.use(bodyParser());
app.use(cors());

const success = { message: "Success" };
const error = { err: "Error" };

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ChatAdmin:1234_Qwer@cluster0-bvuhd.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const collections = collectionName => client.db("chatApp").collection(collectionName);

app.post('/api/new', (req, res) => {

  client.connect(err => {
    let valid = true;
    collections("users").find({}).toArray((userErr, userData) => {
      userData.forEach(user => {
        if (user.email == req.body.user.email) {
          console.log('email is already in use');
          valid = false;
          console.log(valid)
        } else if (user.username == req.body.user.username) {
          console.log('username is already in use');
          valid = false;
          console.log(valid)
        }
      });
      if (valid == true) {
        collections("users").insertOne({
          username: req.body.user.username,
          email: req.body.user.email,
          password: req.body.user.password,
        });
        res.json(success);
      } else {
        res.json(error);
      }
    });
  });
});

app.post('/api/auth', (req, res) => {

  let counter = 0;

  client.connect(err => {
    collections("users").find({}).toArray((userErr, userData) => {
      userData.forEach(user => {
        if (user.name == req.body.name && user.password == req.body.password) {

          console.log(user.name);
          // console.log(req.body.name);
          console.log('success');
          counter = 1;
        };
      });
      if (counter == 1) {
        res.json(success)
      } else {
        res.json(error)
      }
    });
  });
});

http.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
});
