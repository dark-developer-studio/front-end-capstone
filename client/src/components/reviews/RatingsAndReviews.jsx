import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Material UI imports
import { Grid, Card } from '@material-ui/core';
import useStyles from './Styles.jsx';
// Component imports
import ReviewTile from './ReviewTile/ReviewTile.jsx';
import TotalReviewCount from './TotalReviewCount.jsx';
import ReviewDialog from './AddReviewModal/AddReviewModal.jsx';
import MetaData from './MetaData/MetaData.jsx';
import MoreReviewsBtn from './MoreReviewsBtn.jsx';
import SortSelector from './SortSelector.jsx';

// Context import
import { AppContext, ReviewsContext } from '../../helpers/context';

const RatingsAndReviews = () => {
  const { product } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [reviewResults, setReviewResults] = useState([]);
  const [reviewTileList, setReviewTileList] = useState([]);
  const [tileCount, setTileCount] = useState(2);
  const [sortValue, setSortValue] = useState('');
  const [totalRevsCount, setTotalRevsCount] = useState(0);

  const loadReviewTileList = (reviewsArr) => {
    if (reviewTileList.length < 2) {
      for (let i = 0; i < 2; i += 1) {
        reviewTileList.push(reviewsArr[i]);
      }
    }
  };

  const getAllReviews = (productID) => {
    axios
      .get('/api/reviews/revs', {
        params: {
          product_id: productID,
          page: pageState,
          count: 100,
          sort: sortValue
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
              loadReviewTileList(response.data.results);
            }
          }
        }
      });
  };

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
      <ReviewsContext.Provider value={{
        reviews,
        reviewResults,
        reviewTileList,
        tileCount,
        setTileCount,
        setReviewTileList
      }}
      >
        <Card className={classes.parentCard}>
          <Grid
            container
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
                <span>Total Reviews:&nbsp;</span>
                <div>
                  <TotalReviewCount
                    totalRevsCount={totalRevsCount}
                    setTotalRevsCount={setTotalRevsCount}
                  />
                </div>
              </Grid>

              <SortSelector
                productID={product.id}
                sortValue={sortValue}
                setSortValue={setSortValue}
                getAllReviews={getAllReviews}
                setReviewResults={setReviewResults}
                setReviewTileList={setReviewTileList}
                setTotalRevsCount={setTotalRevsCount}
                setReviews={setReviews}
                setPageState={setPageState}
                reviewResults={reviewResults}
                setTileCount={setTileCount}
              />
              {/* End of topGrid */}
            </Grid>

            <Grid container direction="row" justify="space-evenly" className={classes.midGrid}>
              <Grid item md={6} sm={12} className={classes.leftPanel}>
                <MetaData />
              </Grid>

              <Grid item md={6} sm={12} className={classes.rightPanel}>
                <Grid item xs={12} className={classes.ReviewTileViewPort}>
                  <ReviewTile />
                </Grid>

                <div className={classes.buttonContainer}>
                  <ReviewDialog />
                  <MoreReviewsBtn />
                </div>

                {/* End of right panel   */}
              </Grid>

              {/* End of midGrid   */}
            </Grid>
          </Grid>
        </Card>
      </ReviewsContext.Provider>
    </AppContext.Provider>
  );
};

export default RatingsAndReviews;
