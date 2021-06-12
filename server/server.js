const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const routes = require('./routes');
const { GITHUB_API_KEY } = require('../config');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/qa', routes.qa.router);
app.use('/api/reviews', routes.reviews.router);
app.use('/api/display', routes.productDetails.router);
// app.use('/api/related', routes.relatedProducts.router);

app.get('/product/:id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${req.params.id}`, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = app;
