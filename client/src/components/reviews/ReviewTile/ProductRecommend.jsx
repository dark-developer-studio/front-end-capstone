import React, { useContext, useState, useEffect } from 'react';
import { Grid, Paper, Card } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  productRecommendText: {
    fontSize: "small",
    fontStyle: "italic",
    margin: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
}));

const ProductRecommend = () => {
  const classes = useStyles();

  const { reviews } = useContext(ReviewsContext);
  const [recommendBody, setRecommendBody] = useState(
    {
      recIcon: '',
      recText: ''
    }
  );

  const getRecommend = () => {
    if (reviews.results) {
      if (reviews.results.length !== 0) {
        if (reviews.results[0].recommend === true) {
          setRecommendBody( {
            recIcon: <CheckIcon />,
            recText: 'I recommend this Product!'
          })
        };
      }
    }
  }

  useEffect( () => {
    getRecommend();
  }, [reviews]);

  return (
    <div className={classes.productRecommendText}>
      {recommendBody.recIcon}
      {recommendBody.recText}
    </div>
  );
}

export default ProductRecommend;