import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Material UI imports
import { Grid, Button } from '@material-ui/core';
import useStyles from './Styles.jsx';
// Component imports
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import TotalReviewCount from './TotalReviewCount.jsx';
import ReviewDialog from './AddReviewModal/AddReviewModal.jsx';
import MetaData from './MetaData/MetaData.jsx';
// Context import
import { AppContext, ReviewsContext } from '../../helpers/context';

const { GITHUB_API_KEY } = require('../../../../config');

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [reviewResults, setReviewResults] = useState([]);

  // getModalStyle is not a pure function, roll the style only on the first render
  // const [open, setOpen] = useState(false);

  const getAllReviews = (productID) => {
    axios
      .get('/api/reviews/revs', {
        headers: {
          Authorization: GITHUB_API_KEY
        },
        params: {
          product_id: productID,
          page: pageState,
          count: 5
        }
      })
      .then((response) => {
        setReviews(response.data);
        if (response.data) {
          if (response.data.results) {
            if (response.data.results.length === 0 && pageState > 1) {
              setPageState(null);
            } else if (response.data.results.length > 0) {
              const newReviewsResults = [...reviewResults, ...response.data.results];
              setReviewResults(newReviewsResults);
              let num = pageState;
              num += 1;
              setPageState(num);
            }
          }
        }
      });
  };

  const showMoreReviews = () => {
  // Function to be added
  };

  // -------------CONSOLE LOGS
  //   console.log('this is reviews in ranr',reviews);
  //   console.log('this is results in ranr', reviews.results);
  //   if(reviews.results) {
  //   if (reviews.results.length !== 0) {
  //   console.log('this is results[0] in ranr', reviews.results[0]);
  //   }
  // }

  useEffect(() => {
    if (product.id > 0) {
      getAllReviews(product.id);
    }
  }, [product]);

  useEffect(() => {
    if (pageState !== null) {
      getAllReviews(product.id);
    }
  }, [pageState]);

  const classes = useStyles();

  return (
    <AppContext.Provider value={{ product }}>
      <ReviewsContext.Provider value={{ reviews, reviewResults }}>
        <Grid
          container
          xs={12}
          className={classes.parentGrid}
        >
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            className={classes.topGrid}
          >

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
            <Grid item xs={6} className={classes.leftPanel}>
              <MetaData />
            </Grid>

            <Grid item xs={6} className={classes.rightPanel}>
              <ReviewTile />

              <div className={classes.buttonContainer}>
                <ReviewDialog />
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.moreRevBtn}
                  onClick={{ showMoreReviews }}
                >
                  More Reviews
                </Button>
              </div>

              {/* End of right panel   */}
            </Grid>

            {/* End of midGrid   */}
          </Grid>
        </Grid>
      </ReviewsContext.Provider>
    </AppContext.Provider>
  );
};

export default RatingsAndReviews;
