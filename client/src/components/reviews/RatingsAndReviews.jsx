import React from 'react';
import axios from 'axios';

//Material UI imports
import {Grid, Button, Paper} from '@material-ui/core';
import useStyles from './Styles.jsx';

//Component imports
import ReviewTile from './ReviewTile.jsx';
import TotalReviewCount from './TotalReviewCount.jsx';
import ReviewPercentageAndStars from './ReviewPercentageAndStars.jsx';
import StarBarChart from './StarBarChart.jsx';
import ProductReviewChart from './ProductReviewChart.jsx';
//import '../../../dist/styles.css'; USE FOR FUTURE CSS STYLING

// axios
//   .get('/api/reviews/revs', {
//     params: {
//       product_id: 18080,
//       count: 1
//       // page : req.params.page
//     }
//   })
//   .then( (response) => response.data)
//   .then( (data) => {
//     res.send(data);
//   })
//   .catch( (err) => {
//     console.log(err);
//     res.send(err);
//   })

const RatingsAndReviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.parentGrid}>

      <Grid container direction="row" container alignItems="center" justify="space-around" className={classes.topGrid}>

        <Grid item className={classes.componentTitle}>
          Rating and Reviews
        </Grid>
        <Grid item className={classes.totalRev}>
          Total Reviews:
          <TotalReviewCount />
          </Grid>
        <Grid item className={classes.sortby}>
          <span>Sort by: </span>
          <select>
            <option value="">choose a category</option>
          </select>
        </Grid>
      {/* End of topGrid */}
      </Grid>

      <Grid container direction="row" justify="space-evenly" className={classes.midGrid}>
        <Grid item className={classes.leftPanel}>
          Left Panel
          <ReviewPercentageAndStars />

          <div className={classes.recommendPercentage}>100% Recommended</div>

          <StarBarChart />
          <ProductReviewChart />

        {/* End of left panel   */}
        </Grid>

        <Grid item className={classes.rightPanel}>
          <Grid item>Right Panel</Grid>

          <ReviewTile />

          <div className={classes.buttonContainer}>
            <Button color="primary" className={classes.moreRevBtn}>More Reviews</Button >
            <Button color="primary" className={classes.addRevBtn}>Add Review</Button>
          </div>

        {/* End of right panel   */}
        </Grid>

      {/* End of midGrid   */}
      </Grid>

    </div>
  );
};
export default RatingsAndReviews;
