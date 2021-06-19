import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';
import QuestionItem from './QuestionItem.jsx';
import useStyles from '../muiStyles';

export default function QuestionList({
  searchValue, displayCount, questions
}) {
  const [displayQuestions, setDisplayQuestions] = useState([]);

  const classes = useStyles();

  const updateQuestions = () => {
    if (searchValue.length < 3) {
      // If no search term get the questions to display
      const displayArr = [];
      for (let i = 0; i < displayCount && i < questions.length; i += 1) {
        displayArr.push(questions[i]);
      }
      setDisplayQuestions(displayArr);
    } else {
      // If there is a search term get questions that match the search term
      const displayArr = [];
      for (let questionIndex = 0; questionIndex < questions.length; questionIndex += 1) {
        // For each question check if the search term is in the question or first few answers
        const questionBody = questions[questionIndex].question_body.toLowerCase();

        if (questionBody.indexOf(searchValue.toLowerCase()) > -1) {
          // If the question has the search term
          displayArr.push(questions[questionIndex]);
        } else {
          // If the question doesn't have search term check its answers
          const answerKeys = Object.keys(questions[questionIndex].answers);
          for (let answerIndex = 0; answerIndex < answerKeys.length; answerIndex += 1) {
            const answer = questions[questionIndex]
              .answers[answerKeys[answerIndex]]
              .body
              .toLowerCase();

            if (answer.indexOf(searchValue.toLowerCase()) > -1) {
              // If we have found search term in an answer add the question to
              // the display array and exit the for loop
              displayArr.push(questions[questionIndex]);
              break;
            }
          }
        }
      }
      setDisplayQuestions(displayArr);
    }
  };

  useEffect(() => {
    updateQuestions();
  }, [displayCount, searchValue]);

  return (
    <Container
      className={classes.questionListContainer}
    >
      {
        // eslint-disable-next-line arrow-body-style
        displayQuestions.map((question) => {
          return (<QuestionItem key={question.question_id} question={question} />);
        })
      }
    </Container>
  );
}

QuestionList.propTypes = {
  searchValue: PropTypes.string,
  displayCount: PropTypes.number,
  questions: PropTypes.arrayOf(PropTypes.object)
};

QuestionList.defaultProps = {
  searchValue: '',
  displayCount: 2,
  questions: []
};
