import React, { useContext, useState, useEffect } from 'react';
import {Grid, Paper, Card} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  revName: {
    // border: "1px solid red",
    padding: " 5px"
    },
}));

const ReviewerName = () => {
  const classes = useStyles();

  const { reviews } = useContext(ReviewsContext);
  const [revNameBody, setRevNameBody] = useState('');

  const getRevName = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
        // if (reviews.results[0].reviewerName) {
          setRevNameBody(reviews.results[0].reviewer_name)
        // };
      }
    }

  }

  useEffect( () => {
    getRevName();
  }, [reviews]);


  return (
    <div className={classes.revName}>
      {revNameBody}
    </div>
  );
}

export default ReviewerName;