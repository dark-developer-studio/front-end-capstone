import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from '@material-ui/core';
import QuestionItem from './QuestionItem.jsx';
import QuestionDialog from '../modals/QuestionDialog.jsx';

import { AppContext } from '../../../helpers/context';
import { getQuestions } from '../helpers/qaRequests';

export default function QuestionList({ searchValue }) {
  const { product } = useContext(AppContext);

  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(2);
  const [displayQuestions, setDisplayQuestions] = useState([]);

  const updateQuestions = () => {
    if (page !== null && questions.length < displayCount) {
      getQuestions(product.id, page)
        .then((questionsObj) => {
          if (questionsObj.results.length > 0) {
            const newQuestionArr = [...questions, ...questionsObj.results];
            setQuestions(newQuestionArr);

            const displayArr = [];
            for (let i = 0; i < displayCount; i += 1) {
              displayArr.push(newQuestionArr[i]);
            }
            setDisplayQuestions(displayArr);

            setPage(page + 1);
          } else {
            setPage(null);
          }
        })
        .catch();
    } else if (page !== null) {
      const displayArr = [];
      for (let i = 0; i < displayCount; i += 1) {
        displayArr.push(questions[i]);
      }
      setDisplayQuestions(displayArr);
    } else {
      const displayArr = [];
      for (let i = 0; i < questions.length; i += 1) {
        displayArr.push(questions[i]);
      }
      setDisplayQuestions(displayArr);
    }
  };

  useEffect(() => {
    if (product.id > -1) {
      updateQuestions();
    }
  }, [product, displayCount]);

  return (
    <Container
      className="questionlist"
      style={{
        padding: 3,
        maxHeight: window.innerHeight - 175,
        overflow: 'auto'
      }}
    >
      {
        // eslint-disable-next-line arrow-body-style
        displayQuestions.map((question) => {
          return (<QuestionItem key={question.question_id} question={question} />);
        })
      }
      <Container style={{ padding: 0 }}>
        {
          page !== null
            ? (
              <Button
                type="button"
                variant="outlined"
                onClick={() => setDisplayCount(displayCount + 2)}
              >
                MORE ANSWERED QUESTIONS
              </Button>
            )
            : null
        }
        <QuestionDialog />
      </Container>
    </Container>
  );
}

QuestionList.propTypes = {
  searchValue: PropTypes.string
};

QuestionList.defaultProps = {
  searchValue: ''
};
