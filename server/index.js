const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
// const helper = require('../helpers/github');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/qa', routes.qa.router);
app.use('/api/reviews', routes.reviews.router);
app.use('/api/display', routes.productDetails.router);
app.use('/api/related', routes.relatedProducts.router);

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
