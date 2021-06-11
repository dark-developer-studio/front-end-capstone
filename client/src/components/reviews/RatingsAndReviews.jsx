import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

//Material UI imports
import { Grid, Button, Paper } from '@material-ui/core';
import useStyles from './Styles.jsx';
//Component imports
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import TotalReviewCount from './TotalReviewCount.jsx';
import ReviewDialog from './AddReviewModal/AddReviewModal.jsx'
import MetaData from './MetaData/MetaData.jsx';
//Context import
import { AppContext, ReviewsContext } from '../../helpers/context';
//import helper functions
import { getTotalReviews } from './helperFunctions.jsx';

const { GITHUB_API_KEY } = require('../../../../config.js');

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext);
  const [reviews, setReviews] = useState ([]);

  //getModalStyle is not a pure function, roll the style only on the first render
  const [open, setOpen] = useState(false);

   const getAllReviews = (productID) => {
    axios
      .get(`/api/reviews/revs`, {
        headers: {
          Authorization: GITHUB_API_KEY
        },
        params: {
          product_id: productID
          //count:
          // page:
        }
      })
      .then((response) => {
        setReviews(response.data);
      })
      .catch( (err) => {
        console.log(err);
        res.send(err);
      })
  };

//   console.log('this is reviews in ranr',reviews);
//   console.log('this is results in ranr', reviews.results);
//   if(reviews.results) {
//   if (reviews.results.length !== 0) {
//   console.log('this is results[0] in ranr', reviews.results[0]);
//   }
// }

  useEffect(() => {
    getAllReviews(product.id);
  }, [product]);

  const classes = useStyles();

  return (
    <AppContext.Provider value={{ product }}>
    <ReviewsContext.Provider value={ { reviews } }>
      <div className={classes.parentGrid}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
          className={classes.topGrid}>

          <Grid item className={classes.componentTitle}>
            Rating and Reviews
          </Grid>

          <Grid item className={classes.totalRev}>
            <span>Total Reviews:</span>
            <div>
              <TotalReviewCount />
            </div>
          </Grid>

          <Grid item className={classes.sortby}>
            <span>Sort by: </span>
            <select>
              <option value="">choose a category</option>
              <option value="">Helpful</option>
              <option value="">Newest</option>
              <option value="">Relevant</option>
            </select>
          </Grid>

          {/* End of topGrid */}
        </Grid>

        <Grid container direction="row" justify="space-evenly" className={classes.midGrid}>
          <Grid item className={classes.leftPanel}>
            <MetaData />
          </Grid>

          <Grid item className={classes.rightPanel}>
            <ReviewTile />

            <div className={classes.buttonContainer}>
              <ReviewDialog />
              <Button variant="outlined" color="secondary" className={classes.moreRevBtn}>More Reviews</Button >
            </div>

            {/* End of right panel   */}
          </Grid>

          {/* End of midGrid   */}
        </Grid>
      </div>
    </ReviewsContext.Provider>
    </AppContext.Provider>
  );
};
export default RatingsAndReviews;
