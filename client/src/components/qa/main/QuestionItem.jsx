import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Grid, Typography, Button
} from '@material-ui/core';

import AnswerList from './AnswerList.jsx';
import AnswerModal from '../modals/AnswerModal.jsx';
import { getAnswers } from '../helpers/qaRequests';

export default function QuestionItem({ question }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswers(question.question_id)
      .then((answersObj) => {
        setAnswers(answersObj.results);
      })
      .catch();
  }, []);

  return (
    <Container className="questionContainer" style={{ padding: 0 }}>

      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography className="text">
            {`Q: ${question.question_body}`}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Typography variant="body2" className="helpful">
              Helpful?
            </Typography>
            <Button type="button">Yes</Button>
            <Typography variant="body2" style={{ borderRight: '1px solid #555' }}>
              {`(${question.question_helpfulness})`}
            </Typography>
            <AnswerModal question={question} />
          </Grid>
        </Grid>
      </Grid>

      <AnswerList answers={answers} />

    </Container>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
    asker_name: PropTypes.string
  })
};

QuestionItem.defaultProps = {
  question: {}
};
