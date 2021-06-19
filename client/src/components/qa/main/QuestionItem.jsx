import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Grid, Typography, Button
} from '@material-ui/core';

import AnswerList from './AnswerList.jsx';
import AnswerDialog from '../modals/AnswerDialog.jsx';
import { markQuestionHelpful } from '../helpers/qaRequests';

export default function QuestionItem({ question }) {
  // State for if the helpful button should be disabled
  const [disableHelpful, setDisableHelpful] = useState(false);
  // State for helpfulness counter
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

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
            <Button
              type="button"
              disabled={disableHelpful}
              onClick={() => {
                markQuestionHelpful(question.question_id);
                setHelpfulness(helpfulness + 1);
                setDisableHelpful(true);
              }}
            >
              Yes
            </Button>
            <Typography variant="body2" style={{ borderRight: '1px solid #555' }}>
              {`(${helpfulness})`}
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
