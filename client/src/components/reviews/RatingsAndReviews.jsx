import React from 'react';

//Material UI imports
import {Grid, Button, Paper} from '@material-ui/core';
import useStyles from './Styles.jsx';

//Component imports
import ReviewTile from './ReviewTile.jsx';
import TotalReviewCount from './TotalReviewCount.jsx';
import ReviewPercentageAndStars from './ReviewPercentageAndStars.jsx';
import StarBarChart from './StarBarChart.jsx';
import ProductReviewChart from './ProductReviewChart.jsx';
//import '../../../dist/styles.css';

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

  // return (
  //   <div className="parentContainer" style={{border: "2px solid black"}}>
  //     <div className="top-container" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //       <div>Ratings and Reviews</div>
  //       <div className="totalReviews">150 Reviews</div>
  //       <div>
  //         <span>Sort by: </span>
  //         <select>
  //           <option>Select a Category</option>
  //         </select>
  //       </div>
  //     </div>

  //     <div className="midContainer" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //       <div className="leftPanel" style={{display: "flex", flexDirection: "column"}}>
  //         <div>

  //         <div className="avgStarContainer" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //           <div>3.5</div>
  //           <div>* * * * *</div>
  //         </div>
  //       </div>
  //         <div className="recommendPercentage">100% Recommended</div>

  //         <div className="barDiagram">
  //           <div className="fiveStars" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //             <div>
  //               5 Stars
  //             </div>
  //             <div>
  //               -------
  //             </div>
  //           </div>
  //           <div className="fourStars" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //           <div>
  //               4 Stars
  //             </div>
  //             <div>
  //               -------
  //             </div>
  //           </div>
  //           <div className="threeStars" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //           <div>
  //               3 Stars
  //             </div>
  //             <div>
  //               -------
  //             </div>
  //           </div>
  //           <div className="twoStars" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //           <div>
  //               2 Stars
  //             </div>
  //             <div>
  //               -------
  //             </div>
  //           </div>
  //           <div className="oneStars" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //           <div>
  //               1 Stars
  //             </div>
  //             <div>
  //               -------
  //             </div>
  //           </div>
  //         </div>
  //         <div>Product Review diagram</div>

  //       {/* End of Left Panel */}
  //       </div>

  //       <div className="rightPanel" style={{display: "flex", flexDirection: "column"}}>
  //         <div className="reviewTile" style={{border: "2px solid black", display: "flex", flexDirection: "column"}}>
  //           <div className="topRow" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
  //             <div className="stars">
  //               *****
  //             </div>
  //             <div className="userAndTimeStamp" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
  //               <div className="userName">
  //                 User1234
  //               </div>
  //               <div className="timeStamp">
  //                 May 5, 2021
  //               </div>
  //             </div>
  //           {/* End of Review Tile */}
  //           </div>

  //           <div className="reviewSummary">
  //             This was a great product!
  //           </div>
  //           <div className="productRecommend">
  //             I recommend this Product!
  //           </div>
  //           <div className="reviewText" style={{border: "2px solid black", backgroundColor: "grey"}}>
  //             <p>Response:</p>
  //               <div>
  //                 Blah Blah Blah
  //               </div>
  //           </div>
  //           <div className="bottomRowReviewTile" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
  //             <div className="helpful" style={{display: "flex", flexDirection: "row"}}>
  //               Helpful?
  //               <div href="#" style={{cursor: "pointer"}}>Yes</div>
  //               <div className="count">(20)</div>
  //             </div>

  //             <div href="#" style={{cursor: "pointer"}}>Report</div>
  //           </div>

  //         {/* End of Review Tile */}
  //         </div>

  //         <div id="buttonContainer" style={{display: "flex", flexDirection: "row"}}>
  //           <Button color="primary" style={{border: "2px solid red"}}>More Reviews</Button>
  //           <Button color="primary" style={{border: "2px solid blue"}}>Add Review</Button>
  //         </div>

  //       {/* End of Right Panel */}
  //       </div>

  //     {/* End of midContainer */}
  //     </div>

  //   {/* End of Parent Container */}
  //   </div>
  // );
};
export default RatingsAndReviews;
