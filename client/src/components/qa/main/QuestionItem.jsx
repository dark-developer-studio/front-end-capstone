import React from 'react';

import {
  Container, Grid, Typography
} from '@material-ui/core';

import AnswerList from './AnswerList.jsx';
import AnswerModal from '../modals/AnswerModal.jsx';

export default function QuestionItem() {
  return (
    <Container className="questionContainer" style={{ padding: 0 }}>

      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography className="text">Q: This is a question?</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Typography variant="body2" className="helpful">Helpful</Typography>
            <AnswerModal />
          </Grid>
        </Grid>
      </Grid>

      <AnswerList />

    </Container>
  );
}
