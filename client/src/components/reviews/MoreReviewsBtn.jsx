import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../helpers/context';

const useStyles = makeStyles(() => ({

}));

const MoreReviewsBtn = () => {
  const {
    reviewResults, tileCount, setTileCount,
    reviewTileList, setReviewTileList
  } = useContext(ReviewsContext);

  const getTwoReviewTiles = () => {
    let lastVal = false;
    const arr = [];
    console.log('tileCount in func', tileCount);
    if (reviewResults.length > 0 && reviewTileList.length < reviewResults.length) {
      const promise = new Promise((resolve) => {
        resolve(tileCount);
      });
      promise
        .then((res1) => {
          arr.unshift(reviewResults[res1]);
          if (tileCount !== reviewResults.length - 1) {
            setTileCount(res1 + 1);
            return res1 + 1;
          }
          lastVal = true;
        })
        .then((res2) => {
          if (lastVal === false) {
            arr.unshift(reviewResults[res2]);
            setTileCount(res2 + 1);
          }
          setReviewTileList([...arr, ...reviewTileList]);
        })
        .then(() => {
          if (lastVal === false) {
            setReviewTileList([...arr, ...reviewTileList]);
          }
        });
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.moreRevBtn}
        onClick={getTwoReviewTiles}
      >
        More Reviews
      </Button>
    </div>
  );
};

export default MoreReviewsBtn;
