import React, { useContext, useState, useEffect } from 'react';
import { Grid, Paper, Card } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    //border: "2px solid rebeccaPurple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  revStarsStyle: {
    //border: "1px solid red",
    padding: " 5px"
  },
  revNameStyle: {
    //border: "1px solid red",
    padding: " 5px"
    },
  revDateStyle: {
    //border: "1px solid red",
    padding: " 5px"
  },
}));

const TopContainer = () => {
  const { reviews } = useContext(ReviewsContext);
  const [revName, setRevName] = useState('');
  const [revDate, setRevDate] = useState('');
  const [rating, setRating] = useState(0);

  const getRevName = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
          setRevName(reviews.results[0].reviewer_name)
      }
    }
  }
  const getRevDate = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
          setRevDate(reviews.results[0].date)
      }
    }
  }
  const getRating = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
          setRating(reviews.results[0].rating)
      }
    }
  }

  useEffect( () => {
    getRevName();
    getRevDate();
    getRating();
  }, [reviews]);

  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <Grid item className={classes.revStarsStyle}>
        <Rating
        name="reviewStarRating"
        size="small"
        readOnly={true}
        defaultValue={0}
        precision={0.25}
        value={rating}
        />
      </Grid>

      <div className={classes.revNameStyle}>
        {revName}
      </div>

      <div className={classes.revDateStyle}>
        {revDate}
      </div>
    </div>
  );
}

export default TopContainer;