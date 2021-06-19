import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Typography, Button
} from '@material-ui/core';

import AnswerItem from './AnswerItem.jsx';
import { getAnswers } from '../helpers/qaRequests';

export default function AnswerList({ question }) {
  // Array of all the answers accessed from the server
  const [answers, setAnswers] = useState([]);
  // Page state used to grab information from the server
  const [page, setPage] = useState(1);
  // Stores information about answers to display and how many
  const [displayCount, setDisplayCount] = useState(2);
  const [displayAnswers, setDisplayAnswers] = useState([]);

  const updateAnswers = () => {
    if (page !== null && answers.length < displayCount) {
      // If we aren't done collecting answers from the server and
      // we have less answers then we should be displaying make a request
      // to the server for more answers
      getAnswers(question.question_id, page)
        .then((answersObj) => {
          if (answersObj.results.length > 0) {
            // Add new answers to the state
            const newAnswerArr = [...answers, ...answersObj.results];
            setAnswers(newAnswerArr);

            // Fill the display answers arr with the appropriate amount of questions
            const displayArr = [];
            for (let i = 0; i < displayCount && i < newAnswerArr.length; i += 1) {
              displayArr.push(newAnswerArr[i]);
            }
            setDisplayAnswers(displayArr);

            // Increment the page count
            setPage(page + 1);
          } else {
            // If no results set page to null as an
            // indicator we have fetch all the answers
            setPage(null);
          }
        })
        .catch();
    } else if (page !== null) {
      // If we have enough answers to display more
      // Fill the display answers arr with the appropriate amount of questions
      const displayArr = [];
      for (let i = 0; i < displayCount; i += 1) {
        displayArr.push(answers[i]);
      }
      setDisplayAnswers(displayArr);
    } else {
      // If we retrieved all the answers from the server
      // Fill the display answers arr with all the questions
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
