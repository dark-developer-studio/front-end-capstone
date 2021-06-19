import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from '../Styles.jsx';
import { ReviewsContext } from '../../../helpers/context';

// import components
import Summary from './Summary.jsx';
import ProductRecommend from './ProductRecommend.jsx';
import TopContainer from './TopContainer.jsx';
import ReviewBody from './ReviewBody.jsx';
import ImageGallery from './ImageGallery.jsx';
import Helpfulness from './Helpfulness.jsx';

const ReviewTile = () => {
  const { reviewTileList } = useContext(ReviewsContext);
  const classes = useStyles();

  return (
    <Grid item className={classes.reviewTileList}>
      { reviewTileList.map((revItem) => (
        <div key={revItem.review_id} className={classes.reviewTile}>
          <TopContainer
            rating={revItem.rating}
            revName={revItem.reviewer_name}
            revDate={revItem.date}
          />
          <Summary summary={revItem.summary} />
          <ProductRecommend recommend={revItem.recommend} />
          <ReviewBody revBody={revItem.body} />
          <ImageGallery revPhotos={revItem.photos} />

          <div className="bottomRowReviewTile" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Helpfulness helpfulness={revItem.helpfulness} review_id={revItem.review_id} />
            <div href="#" style={{ cursor: 'pointer' }}>Report</div>
          </div>
        </div>
      ))}
    </Grid>
  );
};

export default ReviewTile;
