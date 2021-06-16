import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Grid, Typography, Button
} from '@material-ui/core';

import AnswerList from './AnswerList.jsx';
import AnswerDialog from '../modals/AnswerDialog.jsx';
import { markQuestionHelpful } from '../helpers/qaRequests';

export default function QuestionItem({ question }) {
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
            <Button type="button" onClick={() => markQuestionHelpful(question.question_id)}>Yes</Button>
            <Typography variant="body2" style={{ borderRight: '1px solid #555' }}>
              {`(${question.question_helpfulness})`}
            </Typography>
            <AnswerDialog question={question} />
          </Grid>
        </Grid>
      </Grid>

      {Object.keys(question.answers).length > 0 ? <AnswerList question={question} /> : null}

    </Container>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
    asker_name: PropTypes.string,
    answers: PropTypes.shape({})
  })
};

QuestionItem.defaultProps = {
  question: {}
};
