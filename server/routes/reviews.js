const express = require('express');
const router = express.Router();

const axios = require('axios');

const { GITHUB_API_KEY } = require('../../config.js');

router.get('/revs', (req, res) => {
  axios
  .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews', {
    headers: {
      Authorization: GITHUB_API_KEY
      //---------EXTRA HEADERS INCASE NEEDED
      // Accept: 'application/json',
      // 'User-Agent': 'request',
    },
    params: {
      product_id: req.query.product_id,
      count: req.query.count,
      page : req.query.page,
      sort: req.query.sort
    }
  })
  .then( (response) => response.data)
  .then( (data) => {
    res.send(data);
  })
  .catch( (err) => {
    console.log(err);
    res.send(err);
  })
});

router.get('/meta', (req, res) => {
  axios
  .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta', {
    headers: {
      Authorization: GITHUB_API_KEY
      //---------EXTRA HEADERS INCASE NEEDED
      // Accept: 'application/json',
      // 'User-Agent': 'request',
    },
    params: {
      product_id: req.query.product_id,
    }
  })
  .then( (response) => response.data)
  .then( (data) => {
    res.send(data);
  })
  .catch( (err) => {
    console.log(err);
    res.send(err);
  })
});

module.exports.router = router;