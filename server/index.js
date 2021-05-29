const express = require('express');
const bodyParser = require('body-parser');
const helper = require('../helpers/github');
const reposModel = require('../database');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username;
  helper.getReposByUsername(username)
    .then(repos => {
      reposModel.save(repos);
      res.status(200).send();
    })
    .catch(err => console.log(err));
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  reposModel.getTop((err, repoInfo) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(200).send(repoInfo);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

