import React, { useContext, useState, useEffect } from 'react';
import { Grid, Button, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles( (theme) => ({
  reviewText: {
    //border: "2px solid black",
    padding: "10px",
    margin: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)"
  },
}))

const ReviewBody = () => {
  const { reviews } = useContext(ReviewsContext);
  const [revBody, setRevBody] = useState('');

  const getRevBody = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
        setRevBody(reviews.results[0].body);
      }
    }
  }

  useEffect( () => {
    getRevBody();
  }, [reviews]);

  const classes = useStyles();

  return (
    <Card className={classes.reviewText}>
      <span>Response:</span>
      <div>
        {revBody}
      </div>
    </Card>
  );
}

export default ReviewBody;