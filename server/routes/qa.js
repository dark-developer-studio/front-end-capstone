const express = require('express');
const axios = require('axios');
const { GITHUB_API_KEY } = require('../../config');

const router = express.Router();

// Get request for a question with a default page of 1
router.get('/questions', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions', {
    headers: {
      Authorization: GITHUB_API_KEY
    },
    params: {
      product_id: req.query.product_id,
      page: req.query.page || 1
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

// Post request for a new question
router.post('/questions', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions', {
    headers: {
      Authorization: GITHUB_API_KEY
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Update the helpfulness of a question
router.put('/questions/helpful', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${req.query.question_id}/helpful`, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Report a question
router.put('/questions/report', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${req.query.question_id}/report`, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Get answers to a question
router.get('/answers', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${req.query.question_id}/answers`, {
    headers: {
      Authorization: GITHUB_API_KEY
    },
    params: {
      page: req.query.page || 1
    }
  })
    .then((response) => response.data)
    .then((answers) => {
      res.send(answers);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Post a new answer to a question
router.post('/answers', (req, res) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${req.query.question_id}/answers`, {
    headers: {
      Authorization: GITHUB_API_KEY
    },
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Update the helpfulness of an answer
router.put('/answers/helpful', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${req.query.answer_id}/helpful`, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

// Report an answer
router.put('/answers/report', (req, res) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${req.query.answer_id}/report`, {
    headers: {
      Authorization: GITHUB_API_KEY
    }
  })
    .then((response) => {
      res.send();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(400).send();
    });
});

module.exports.router = router;
