import React, {useState, useEffect, useContext} from 'react';
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
// import AddReviewDialog from './AddReviewModal.jsx'
import CustomizedDialogs from './AddReviewModal.jsx'

//Context import
import { AppContext } from '../../helpers/context';

//import '../../../dist/styles.css'; USE FOR FUTURE CSS STYLING

const RatingsAndReviews = ( { product } ) => {
  //onst { product } = useContext(AppContext);
  const [reviews, setReviews] = useState ([]);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);


  // const getAllReviews = () => {
  //   axios
  //   .get('/api/reviews/revs', {
  //     params: {
  //       product_id: 18080,
  //       //count:
  //       // page : req.params.page
  //     }
  //   })
  //   .then( (response) => response.data)
  //   .then( (data) => {
  //     response.send(data);
  //     console.log(response.data);
  //   })
  //   .catch( (err) => {
  //     console.log(err);
  //     res.send(err);
  //   })
  // };

  console.log(product);
  console.log(product.data);
  // let val = product.data
  // const arr = [val];


  const classes = useStyles();

  // useEffect(() => {
  //   getAllReviews();
  // }, []);

  return (
    <div className={classes.parentGrid}>

      {/* {Object.values(product).forEach( val => {
        <div>{val}</div>
      })} */}
      <div>{product.id}</div>
       <div>{product.campus}</div>
       <div>{product.name}</div>

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
            <option value="">Helpful</option>
            <option value="">Newest</option>
            <option value="">Relevant</option>
          </select>
        </Grid>
      {/* End of topGrid */}
      </Grid>

      <Grid container direction="row" justify="space-evenly" className={classes.midGrid}>
        <Grid item className={classes.leftPanel}>
          {/* Left Panel */}
          <ReviewPercentageAndStars />

          <div className={classes.recommendPercentage}>100% Recommended</div>

          <StarBarChart />
          <ProductReviewChart />

        {/* End of left panel   */}
        </Grid>

        <Grid item className={classes.rightPanel}>
          <Grid item>
            {/* Right Panel */}
          </Grid>

          <ReviewTile />

          <div className={classes.buttonContainer}>
            <CustomizedDialogs />
            <Button variant="outlined" color="secondary" className={classes.moreRevBtn}>More Reviews</Button >
            {/* <Button color="primary" className={classes.addRevBtn}>Add Review</Button> */}

          </div>

        {/* End of right panel   */}
        </Grid>

      {/* End of midGrid   */}
      </Grid>

    </div>
  );
};
export default RatingsAndReviews;
