import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Typography, Card, CardContent, CardHeader, CardMedia
} from '@material-ui/core';
import Axios from 'axios';
import { AppContext } from '../../helpers/context';
import CategoryPriceName from './CategoryPriceName.jsx';
import useStyles from './MaterialUi.jsx';
import StyleThumbs from './StyleThumbs.jsx';
import Selectors from './Selectors.jsx';
import ProductDescription from './ProductDescription.jsx';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState({
    product_id: '',
    results: []
  });

  const classes = useStyles();

  const getProducts = () => {
    Axios
      .get('/api/display/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch();
  };

  const getProductStyles = (productId) => {
    if (productId > 0) {
      Axios
        .get(`/api/display/products/${productId}/styles`)
        .then((response) => {
          setProductStyles(response.data);
        })
        .catch();
    }
  };

  const { product } = useContext(AppContext);
  useEffect(() => {
    getProductStyles(product.id);
  }, [product]);

  console.log(productStyles.results);
  return (
    <Grid item xs={12} container>
      <Grid className={classes.grid} item xs={7} container>
        <Grid className={classes.grid3} item xs={12} container>
          Image Gallery
        </Grid>
      </Grid>

      <Grid item xs={5} container direction="column">
        <Card>
          <CardContent>

            <Typography variant="body2" color="textSecondary" component="p" align="left">
              *Stars*
              <u>View All Reviews</u>
            </Typography>

            <CategoryPriceName />

            <Typography variant="body2" color="textSecondary" component="p" align="left">
              <b>Style &gt; </b>
              Select Style
            </Typography>
            <StyleThumbs productStyles={productStyles.results} />

            <Selectors />

          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.grid6} item xs={12} container>
        <ProductDescription />
      </Grid>
    </Grid>
  );
};

export default ProductDisplay;
