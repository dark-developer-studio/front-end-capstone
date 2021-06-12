const Axios = require('axios');
const express = require('express');

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

const router = express.Router();

router.get('/products', (req, res) => {
  Axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products', {
      headers: {
        Authorization: GITHUB_API_KEY
      }
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/products/:id', (req, res) => {
  Axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${req.params.id}`, {
      headers: {
        Authorization: GITHUB_API_KEY
      }
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/products/:id/styles', (req, res) => {
  Axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${req.params.id}/styles`, {
      headers: {
        Authorization: GITHUB_API_KEY
      }
    })
    .then((response) => response.data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports.router = router;
