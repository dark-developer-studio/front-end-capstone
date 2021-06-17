const supertest = require('supertest');
const axios = require('axios');
const app = require('../server');
const { url } = require('../routes/qa');

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

jest.mock('axios');
const request = supertest(app);

describe('Questions and Answers Routes', () => {
  describe('Questions', () => {
    test('get questions endpoint without page', (done) => {
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          product_id: 18078,
          results: [{}]
        }
      }));

      request.get('/api/qa/questions?product_id=18078')
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(
            expect.objectContaining({
              product_id: expect.any(Number),
              results: expect.any(Array)
            })
          );
          expect(response.body.results.length).toBeGreaterThan(0);
          expect(axios.get).toHaveBeenCalledWith(
            `${url}/qa/questions`,
            {
              headers: {
                Authorization: GITHUB_API_KEY
              },
              params: {
                product_id: '18078',
                page: 1,
                count: 5
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('get questions endpoint with page', (done) => {
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          product_id: 18078,
          results: [{}]
        }
      }));

      request.get('/api/qa/questions?product_id=18078&page=3')
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(
            expect.objectContaining({
              product_id: expect.any(Number),
              results: expect.any(Array)
            })
          );
          expect(response.body.results.length).toBeGreaterThan(0);
          expect(axios.get).toHaveBeenCalledWith(
            `${url}/qa/questions`,
            {
              headers: {
                Authorization: GITHUB_API_KEY
              },
              params: {
                product_id: '18078',
                page: '3',
                count: 5
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('create question endpoint', (done) => {
      axios.post.mockImplementationOnce(() => Promise.resolve({
        data: 'Created'
      }));

      request.post('/api/qa/questions')
        .send({
          body: 'This is a question?',
          name: 'John',
          email: 'John321@email.com',
          product_id: 18078
        })
        .then((response) => {
          expect(response.text).toEqual('Created');
          expect(axios.post).toHaveBeenCalledWith(
            `${url}/qa/questions`,
            {
              body: 'This is a question?',
              name: 'John',
              email: 'John321@email.com',
              product_id: 18078
            }, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('update question helpfulness endpoint', (done) => {
      axios.put.mockImplementationOnce(() => Promise.resolve({
        data: ''
      }));

      request.put('/api/qa/questions/helpful?question_id=18078')
        .then(() => {
          expect(axios.put).toHaveBeenCalledWith(
            `${url}/qa/questions/18078/helpful`, {}, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('update question report endpoint', (done) => {
      axios.put.mockImplementationOnce(() => Promise.resolve({
        data: ''
      }));

      request.put('/api/qa/questions/report?question_id=18078')
        .then(() => {
          expect(axios.put).toHaveBeenCalledWith(
            `${url}/qa/questions/18078/report`, {}, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  describe('Answers', () => {
    test('get answers endpoint without page', (done) => {
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          question: 18078,
          results: [{}]
        }
      }));

      request.get('/api/qa/answers?question_id=18078')
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(
            expect.objectContaining({
              question: expect.any(Number),
              results: expect.any(Array)
            })
          );
          expect(response.body.results.length).toBeGreaterThan(0);
          expect(axios.get).toHaveBeenCalledWith(
            `${url}/qa/questions/18078/answers`,
            {
              headers: {
                Authorization: GITHUB_API_KEY
              },
              params: {
                page: 1
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('get answers endpoint with page', (done) => {
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          question: 18078,
          results: [{}]
        }
      }));

      request.get('/api/qa/answers?question_id=18078&page=4')
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.body).toEqual(
            expect.objectContaining({
              question: expect.any(Number),
              results: expect.any(Array)
            })
          );
          expect(response.body.results.length).toBeGreaterThan(0);
          expect(axios.get).toHaveBeenCalledWith(
            `${url}/qa/questions/18078/answers`,
            {
              headers: {
                Authorization: GITHUB_API_KEY
              },
              params: {
                page: '4'
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('create answer endpoint', (done) => {
      axios.post.mockImplementationOnce(() => Promise.resolve({
        data: 'Created'
      }));

      request.post('/api/qa/answers?question_id=112486')
        .send({
          body: 'This is a question?',
          name: 'John',
          email: 'John321@email.com',
          photos: []
        })
        .then((response) => {
          expect(response.text).toEqual('Created');
          expect(axios.post).toHaveBeenCalledWith(
            `${url}/qa/questions/112486/answers`,
            {
              body: 'This is a question?',
              name: 'John',
              email: 'John321@email.com',
              photos: []
            }, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('update answer helpfulness endpoint', (done) => {
      axios.put.mockImplementationOnce(() => Promise.resolve({
        data: ''
      }));

      request.put('/api/qa/answers/helpful?answer_id=18078')
        .then(() => {
          expect(axios.put).toHaveBeenCalledWith(
            `${url}/qa/answers/18078/helpful`, {}, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    test('update answer report endpoint', (done) => {
      axios.put.mockImplementationOnce(() => Promise.resolve({
        data: ''
      }));

      request.put('/api/qa/answers/report?answer_id=18078')
        .then(() => {
          expect(axios.put).toHaveBeenCalledWith(
            `${url}/qa/answers/18078/report`, {}, {
              headers: {
                Authorization: GITHUB_API_KEY
              }
            }
          );
          done();
        })
        .catch((err) => {
          done(err);
        });
    });
  });
});
