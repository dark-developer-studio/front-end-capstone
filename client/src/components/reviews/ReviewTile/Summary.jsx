import React, { useContext, useState, useEffect } from 'react';
import { Grid, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles( (theme) => ({
  reviewSummary: {
    fontSize: "large",
    fontWeight: "bold",
    margin: "5px"
  },
}))

const Summary = () => {
  const { reviews } = useContext(ReviewsContext);
  const [summary, setSummary] = useState(' ');

  const getSummary = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
        setSummary(reviews.results[0].summary);
      }
    }
  }

  useEffect( () => {
    getSummary();
  }, [reviews]);

  const classes = useStyles();

  return (
    <div className={classes.reviewSummary}>
      {summary}
    </div>
  );
}

export default Summary;