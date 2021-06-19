import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Typography, Button
} from '@material-ui/core';

import AnswerItem from './AnswerItem.jsx';
import { getAnswers } from '../helpers/qaRequests';

export default function AnswerList({ question }) {
  const [answers, setAnswers] = useState([]);
  const [page, setPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(2);
  const [displayAnswers, setDisplayAnswers] = useState([]);

  const updateAnswers = () => {
    if (page !== null && answers.length < displayCount) {
      getAnswers(question.question_id, page)
        .then((answersObj) => {
          if (answersObj.results.length > 0) {
            const newAnswerArr = [...answers, ...answersObj.results];
            setAnswers(newAnswerArr);

            const displayArr = [];
            for (let i = 0; i < displayCount && i < newAnswerArr.length; i += 1) {
              displayArr.push(newAnswerArr[i]);
            }
            setDisplayAnswers(displayArr);

            setPage(page + 1);
          } else {
            setPage(null);
          }
        })
        .catch();
    } else if (page !== null) {
      const displayArr = [];
      for (let i = 0; i < displayCount && i < answers.length; i += 1) {
        displayArr.push(answers[i]);
      }
      setDisplayAnswers(displayArr);
    } else {
      const displayArr = [];
      for (let i = 0; i < answers.length; i += 1) {
        displayArr.push(answers[i]);
      }
      setDisplayAnswers(displayArr);
    }
  };

  useEffect(() => {
    updateAnswers();
  }, [displayCount]);

  return (
    <Grid container justify="flex-start">
      <Grid item style={{ margin: '0px 2px 0px 0px' }}>
        <Typography className="answerList" style={{ fontWeight: 500 }}>A:</Typography>
      </Grid>
      <Grid item xs={11}>
        {displayAnswers.map((answer) => <AnswerItem key={answer.answer_id} answer={answer} />)}
        {
          page !== null
            ? (
              <Button type="button" onClick={() => setDisplayCount(displayCount + 2)}>
                LOAD MORE ANSWERS
              </Button>
            )
            : null
        }
      </Grid>
    </Grid>
  );
}

AnswerList.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number
  })
};

AnswerList.defaultProps = {
  question: {}
};
