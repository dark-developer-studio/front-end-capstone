import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from '../Styles.jsx';
import { ReviewsContext } from '../../../helpers/context';

// import components
import Summary from './Summary.jsx';
import ProductRecommend from './ProductRecommend.jsx';
import TopContainer from './TopContainer.jsx';
import ReviewBody from './ReviewBody.jsx';
import ImageGallery from './ImageGallery.jsx';

const ReviewTile = () => {
  const { reviewResults, reviewTileList } = useContext(ReviewsContext);
  const [tileCount, setTileCount] = useState(0);
  const classes = useStyles();
  // const [helpfulnessCount, setHelpfulnessCount] = useState(0);

  // const getTwoReviewTiles = () => {
  //   let innerCount = 0;
  //   while (innerCount < 2) {
  //     if (reviewResults.length > 0 && tileCount < reviewResults.length) {
  //       reviewTileList.unshift(reviewResults[tileCount]);
  //       let num = tileCount;
  //       num += 1;
  //       setTileCount(num);
  //     }
  //     innerCount += 1;
  //   }
  // };

  // useEffect(() => {
  //   if (reviewResults.length > 0) {
  //     getTwoReviewTiles();
  //   }
  // }, [reviewTileList]);

  return (
    <Grid item className={classes.reviewTile}>
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
            <div className="helpful" style={{ display: 'flex', flexDirection: 'row' }}>
              <span>Helpful?&nbsp;&nbsp;</span>
              <div href="#" style={{ cursor: 'pointer' }}>Yes&nbsp;</div>
              <div>
                (
                {revItem.helpfulness}
                )
              </div>
            </div>
            <div href="#" style={{ cursor: 'pointer' }}>Report</div>
          </div>
        </div>
      ))}
    </Grid>
  );
  //   <Grid item className={classes.reviewTile}>
  //     { reviewResults.map((revItem) => (
  //       <div key={revItem.review_id} className={classes.reviewTile}>
  //         <TopContainer
  //           rating={revItem.rating}
  //           revName={revItem.reviewer_name}
  //           revDate={revItem.date}
  //         />
  //         <Summary summary={revItem.summary} />
  //         <ProductRecommend recommend={revItem.recommend} />
  //         <ReviewBody revBody={revItem.body} />
  //         <ImageGallery revPhotos={revItem.photos} />

  //         <div className="bottomRowReviewTile" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
  //           <div className="helpful" style={{ display: 'flex', flexDirection: 'row' }}>
  //             <span>Helpful?&nbsp;&nbsp;</span>
  //             <div href="#" style={{ cursor: 'pointer' }}>Yes&nbsp;</div>
  //             <div>
  //               (
  //               {revItem.helpfulness}
  //               )
  //             </div>
  //           </div>
  //           <div href="#" style={{ cursor: 'pointer' }}>Report</div>
  //         </div>
  //       </div>
  //     ))}
  //   </Grid>
  // );
};

export default ReviewTile;
