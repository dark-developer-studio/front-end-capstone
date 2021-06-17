/* eslint-disable no-console */
const express = require('express');
const axios = require('axios');

const router = express.Router();

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

router.get('/revs', (req, res) => {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews', {
      headers: {
        Authorization: GITHUB_API_KEY
        // ---------EXTRA HEADERS INCASE NEEDED
        // Accept: 'application/json',
        // 'User-Agent': 'request',
      },
      params: {
        product_id: req.query.product_id,
        count: req.query.count,
        page: req.query.page,
        sort: req.query.sort
      }
    })
    .then((response) => response.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.post('/revs', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews', {
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
    characteristics: req.body.characteristics
  }, {
    headers: {
      Authorization: GITHUB_API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      res.status(201);
      res.send(response.data);
      console.log('post success');
    })
    .catch((err) => {
      console.log('Post failed');
      console.log(err);
      //res.send();
    });
});

router.get('/meta', (req, res) => {
  axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta', {
      headers: {
        Authorization: GITHUB_API_KEY
        // ---------EXTRA HEADERS INCASE NEEDED
        // Accept: 'application/json',
        // 'User-Agent': 'request',
      },
      params: {
        product_id: req.query.product_id
      }
    })
    .then((response) => response.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.put('/helpful', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${req.query.review_id}/helpful`, {}, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then(() => {
      res.status(204);
      res.send();
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

router.put('/report', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${req.query.review_id}/report`, {}, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then(() => {
      res.status(204);
      res.send();
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

module.exports.router = router;
