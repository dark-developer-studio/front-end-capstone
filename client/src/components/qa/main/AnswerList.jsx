import React from 'react';

import {
  Grid, Typography, Button
} from '@material-ui/core';

import AnswerItem from './AnswerItem.jsx';

export default function AnswerList() {
  return (
    <Grid container justify="flex-start">
      <Grid item style={{ margin: '0px 5px 0px 0px' }}>
        <Typography className="answerList">A:</Typography>
      </Grid>
      <Grid item xs={11}>
        <AnswerItem />
        <Button color="primary" type="button" className="moreAnswers">LOAD MORE ANSWERS</Button>
      </Grid>
    </Grid>
  );
}
