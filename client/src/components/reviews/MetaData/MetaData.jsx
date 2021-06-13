import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext, ReviewsContext } from '../../../helpers/context';

//Import components
import ReviewPercentageAndStars from './ReviewPercentageAndStars.jsx';
import StarBarChart from './StarBarChart.jsx';
import ProductReviewChart from './ProductReviewChart.jsx';
import RecommendPercentage from './RecommendPercentage.jsx';

const { GITHUB_API_KEY } = require('../../../../../config.js');

const useStyles = makeStyles((theme) => ({

}));

const MetaData = () => {
  const { product } = useContext(AppContext);
  const [revsMetaData, setRevsMetaData] = useState({});

  const getAllRevsMetaData = (productID) => {
    axios
      .get(`/api/reviews/meta`, {
        headers: {
          Authorization: GITHUB_API_KEY
        },
        params: {
          product_id: productID
          //product_id: 18079
        }
      })
      .then((response) => {
        setRevsMetaData(response.data);
      })
      .catch( (err) => {
        console.log(err);
        res.send(err);
      })
  };

 useEffect(() => {
  getAllRevsMetaData(product.id);
  }, [product]);

  const classes = useStyles();

  return (
    <ReviewsContext.Provider value={ { revsMetaData } }>
      <div>
        <ReviewPercentageAndStars />
        <RecommendPercentage />
        <StarBarChart />
        <ProductReviewChart />
      </div>
    </ReviewsContext.Provider>
  );
}

export default MetaData;