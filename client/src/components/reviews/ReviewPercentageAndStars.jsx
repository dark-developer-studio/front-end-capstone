import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  parentContainer: {
    // border: "3px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avgRating: {
    // border: "3px solid green",
    fontSize: "xxx-large",
    padding: "10px"
  },
  reviewStarRating: {
    // border: "3px solid green",
    padding: "10px"
  }
}));


const ReviewPercentageAndStars = () => {
  const classes = useStyles();
  return (
    <div className={classes.parentContainer}>
      <div className={classes.avgRating}>3.5</div>
      <Rating name="reviewStarRating" className={classes.reviewStarRating} size="large" defaultValue={2.4} precision={0.2}/>
    </div>
  );
}

export default ReviewPercentageAndStars;