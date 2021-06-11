import React, { useContext, useState, useEffect } from 'react';
import { Grid, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  recommendPercentage: {
    margin: "10px"
  },
}));

const recommendPercentage = () => {
  const { revsMetaData } = useContext(ReviewsContext);
  const [recommendTotals, setRecommendPercent] = useState(
    {
      totalFalse: 0,
      totalTrue: 0
    }
  );

  const getRecommendPercent = () => {
    if (revsMetaData) {
      if (revsMetaData.product_id) {
        setRecommendPercent(
          {
            totalFalse: revsMetaData.recommended.false,
            totalTrue: revsMetaData.recommended.true,
          }
        );
      }
    }
  }

  const calcRecommendPercent = function(totFalse, totTrue) {
    if (totTrue !== NaN && totFalse !== NaN && totTrue !== undefined && totFalse !== undefined) {
      let total = Number(totTrue) + Number(totFalse);
      let truePercent = totTrue / total * 100;
      return Math.round(truePercent);
    } else {
      return 0;
    }
  }

 useEffect( () => {
  getRecommendPercent();
  calcRecommendPercent();
  }, [revsMetaData]);

  const classes = useStyles();

  return (
    <div className={classes.recommendPercentage}>
      <span>{calcRecommendPercent(recommendTotals.totalFalse, recommendTotals.totalTrue)}</span>
      <span>% Recommended</span>
    </div>
  );
}

export default recommendPercentage;