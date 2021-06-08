import React from 'react';

import { Container, Typography, TextField } from '@material-ui/core';

export default function QuesionSearchBar() {
  return (
    <Container className="searchbarContainer" style={{ padding: 3 }}>
      <Typography variant="h5" className="text">Questions &amp; Answers</Typography>
      <TextField placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." variant="outlined" style={{ width: '100%' }} />
    </Container>
  );
}
