import axios from 'axios';
import {
  getQuestions,
  getAnswers,
  createQuestion,
  createAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer
} from '../helpers/qaRequests';

jest.mock('axios');

describe('Questions and Answers API Calls', () => {
  test('should get an questions object using getQuestions(id)', (done) => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        product_id: 18078,
        results: [{}]
      }
    }));

    getQuestions(18078)
      .then((responseObj) => {
        expect(responseObj.product_id).toBe(18078);
        expect(responseObj.results.length).toBeGreaterThan(0);
        expect(axios.get).toHaveBeenCalledWith(
          '/api/qa/questions',
          {
            params: {
              page: undefined,
              product_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should get an questions object using getQuestions(id, page)', (done) => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        product_id: 18078,
        results: [{}]
      }
    }));

    getQuestions(18078, 1)
      .then((responseObj) => {
        expect(responseObj.product_id).toBe(18078);
        expect(responseObj.results.length).toBeGreaterThan(0);
        expect(axios.get).toHaveBeenCalledWith(
          '/api/qa/questions',
          {
            params: {
              page: 1,
              product_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a create question request using createQuestion', (done) => {
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: 'Created'
    }));

    const question = {
      productId: 18078,
      body: 'This is a question?',
      name: 'John',
      email: 'john431@email.com'
    };

    createQuestion(question)
      .then((responseObj) => {
        expect(responseObj).toBe('Created');
        expect(axios.post).toHaveBeenCalledWith(
          '/api/qa/questions',
          {
            product_id: 18078,
            body: 'This is a question?',
            name: 'John',
            email: 'john431@email.com'
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a mark helpful request using markQuestionHelpful', (done) => {
    axios.put.mockImplementationOnce(() => Promise.resolve({ data: '' }));

    markQuestionHelpful(18078)
      .then(() => {
        expect(axios.put).toHaveBeenCalledWith(
          '/api/qa/questions/helpful', {},
          {
            params: {
              question_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a report request using reportQuestion', (done) => {
    axios.put.mockImplementationOnce(() => Promise.resolve({ data: '' }));

    reportQuestion(18078)
      .then(() => {
        expect(axios.put).toHaveBeenCalledWith(
          '/api/qa/questions/report', {},
          {
            params: {
              question_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should get an answers object using getAnswers(id)', (done) => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        question: 18078,
        results: [{}]
      }
    }));

    getAnswers(18078)
      .then((responseObj) => {
        expect(responseObj.question).toBe(18078);
        expect(responseObj.results.length).toBeGreaterThan(0);
        expect(axios.get).toHaveBeenCalledWith(
          '/api/qa/answers',
          {
            params: {
              page: undefined,
              question_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should get an answers object using getAnswers(id, page)', (done) => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        question: 18078,
        results: [{}]
      }
    }));

    getAnswers(18078, 1)
      .then((responseObj) => {
        expect(responseObj.question).toBe(18078);
        expect(responseObj.results.length).toBeGreaterThan(0);
        expect(axios.get).toHaveBeenCalledWith(
          '/api/qa/answers',
          {
            params: {
              page: 1,
              question_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a create answer request using createAnswer', (done) => {
    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: 'Created'
    }));

    const answer = {
      questionId: 112873,
      productId: 18078,
      body: 'This is an answer.',
      name: 'John',
      email: 'john431@email.com'
    };

    createAnswer(answer)
      .then((responseObj) => {
        expect(responseObj).toBe('Created');
        expect(axios.post).toHaveBeenCalledWith(
          '/api/qa/answers',
          {
            product_id: 18078,
            body: 'This is an answer.',
            name: 'John',
            email: 'john431@email.com'
          }, {
            params: {
              question_id: 112873
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a mark helpful request using markAnswerHelpful', (done) => {
    axios.put.mockImplementationOnce(() => Promise.resolve({ data: '' }));

    markAnswerHelpful(18078)
      .then(() => {
        expect(axios.put).toHaveBeenCalledWith(
          '/api/qa/answers/helpful', {},
          {
            params: {
              answer_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });

  test('should send a report request using reportAnswer', (done) => {
    axios.put.mockImplementationOnce(() => Promise.resolve({ data: '' }));

    reportAnswer(18078)
      .then(() => {
        expect(axios.put).toHaveBeenCalledWith(
          '/api/qa/answers/report', {},
          {
            params: {
              answer_id: 18078
            }
          }
        );
        done();
      })
      .catch((err) => done(err));
  });
});
