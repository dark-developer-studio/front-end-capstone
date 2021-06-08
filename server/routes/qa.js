const express = require('express');
const axios = require('axios');
const { GITHUB_API_KEY } = require('../../config');

const router = express.Router();

router.get('/questions', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions', {
    headers: {
      Authorization: GITHUB_API_KEY
    },
    params: {
      product_id: req.query.product_id
    }
  })
    .then((response) => response.data)
    .then((questions) => {
      res.send(questions);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

module.exports.router = router;
