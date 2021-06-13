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
  const [helpfulnessCount, setHelpfulnessCount] = useState(0)

  useEffect( () => {

    if (reviews){
      if (reviews.results) {
        if (reviews.results.length > 0) {
          setHelpfulnessCount(reviews.results[0].helpfulness)
        }
      }
    }
  }, [reviews])
  console.log('helpfulness from api', reviews)

  return (
    <Grid item className={classes.reviewTile}>
      <TopContainer />
      <Summary />
      <ProductRecommend />
      <ReviewBody />

      <div className="bottomRowReviewTile" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div className="helpful" style={{display: "flex", flexDirection: "row"}}>
          <span>Helpful?&nbsp;&nbsp;</span>
          <div href="#" style={{cursor: "pointer"}}>Yes</div>
          <div className="count">({helpfulnessCount})</div>
        </div>
        <div href="#" style={{cursor: "pointer"}}>Report</div>
      </div>
    </Grid>
  );
}

export default ReviewTile;