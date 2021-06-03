
const express = require('express');
const bodyParser = require('body-parser');
const helper = require('../helpers/github');
const routes = require('./routes');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/qa', routes.qa.router);
app.use('/api/reviews', routes.reviews.router);
app.use('/api/display', routes.productDetails.router);
app.use('/api/related', routes.relatedProducts.router);

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});