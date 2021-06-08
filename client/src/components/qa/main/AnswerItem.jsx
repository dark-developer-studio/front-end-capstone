import React from 'react';

import {
  Container, Grid, Typography
} from '@material-ui/core';

import ImageModal from '../modals/ImageModal.jsx';

export default function AnswerItem() {
  return (
    <Container style={{ padding: 0 }}>
      <Typography className="text">
        Hi answer here, lorem ipsum not data with javascript this
        is a basic text with blank response plus two equals hi
      </Typography>
      <Grid container>
        <ImageModal />
      </Grid>
      <Grid container direction="row">
        <Typography className="user">by [User], [Month d, yyyy] | </Typography>
        <Typography className="helpful">Helpful</Typography>
        <Typography className="addAnswer">Report</Typography>
      </Grid>
    </Container>
  );
}
