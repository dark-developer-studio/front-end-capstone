import React, { useContext, useState, useEffect } from 'react';
import {Grid, Paper, Card} from '@material-ui/core';
import useStyles from '../Styles.jsx';
import { ReviewsContext } from '../../../helpers/context';

//import components
import Summary from './Summary.jsx';
import ProductRecommend from './ProductRecommend.jsx';
import TopContainer from './TopContainer.jsx';
import ReviewBody from './ReviewBody.jsx';

const ReviewTile = () => {
  const { reviews } = useContext(ReviewsContext);
  const classes = useStyles();

  return (
    <Grid item className={classes.reviewTile}>
      <TopContainer />
      <Summary />
      <ProductRecommend />
      <ReviewBody />

      <div className="bottomRowReviewTile" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div className="helpful" style={{display: "flex", flexDirection: "row"}}>
          Helpful?
          <div href="#" style={{cursor: "pointer"}}>Yes</div>
          <div className="count">(20)</div>
        </div>
        <div href="#" style={{cursor: "pointer"}}>Report</div>
      </div>
    </Grid>
  );
}

export default ReviewTile;