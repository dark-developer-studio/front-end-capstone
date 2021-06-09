import React from 'react';
import {Grid, Button, Paper, Card} from '@material-ui/core';
import useStyles from './Styles.jsx';
import Rating from '@material-ui/lab/Rating';


const ReviewTile = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.reviewTile}>
      <div>
        {/* Review Tile */}
      </div>

      <Grid item className={classes.revTileTopRow}>

          <Grid item className={classes.revTileTopRowStars}>
            <Rating
              name="reviewStarRating"
              size="small"
              defaultValue={3.5}
              precision={0.25}
              />
          </Grid>

          <Grid item className={classes.revTileTopRowUser}>
            User1234
          </Grid>

          <Grid item className={classes.revTileTopRowTimestamp}>
            May 5, 2021
          </Grid>

      {/* End of review tile top row */}
      </Grid>

      <div className={classes.reviewSummary}>
        This was a great product!
      </div>
      <div className={classes.productRecommendText}>
        I recommend this Product!
      </div>

      <Card className={classes.reviewText}>
        Response:
        <div>
          What a great Product!
        </div>
      </Card>

      <div className="bottomRowReviewTile" style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div className="helpful" style={{display: "flex", flexDirection: "row"}}>
          Helpful?
          <div href="#" style={{cursor: "pointer"}}>Yes</div>
          <div className="count">(20)</div>
        </div>

        <div href="#" style={{cursor: "pointer"}}>Report</div>
      </div>

    {/* End of Review Tile */}
    </Grid>
  );
}

export default ReviewTile;