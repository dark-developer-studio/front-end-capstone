import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, TextField } from '@material-ui/core';
import useStyles from '../muiStyles';

export default function QuestionSearchBar({ setSearchValue }) {
  const classes = useStyles();

  return (
    <Container style={{ padding: 3 }}>
      <Typography variant="h5">Questions &amp; Answers</Typography>
      <TextField
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        variant="outlined"
        aria-labelledby="Search Questions"
        className={classes.offWhite}
        fullWidth
      />
    </Container>
  );
}

QuestionSearchBar.propTypes = {
  setSearchValue: PropTypes.func
};

QuestionSearchBar.defaultProps = {
  setSearchValue: () => { }
};
