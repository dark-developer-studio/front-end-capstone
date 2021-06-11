import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Typography, Card, CardContent
} from '@material-ui/core';
import Axios from 'axios';
import { AppContext } from '../../helpers/context';
import CategoryPriceName from './CategoryPriceName.jsx';
import useStyles from './MaterialUi.jsx';
import StyleThumbs from './StyleThumbs.jsx';
import Selectors from './Selectors.jsx';
import ProductDescription from './ProductDescription.jsx';
import ImageGallery from './ImageGallery.jsx';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState({
    product_id: '',
    results: []
  });
  const [thumbnails, setThumbnails] = useState([]);

  const classes = useStyles();

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

        <ImageGallery />

      </Grid>

      <Grid className={classes.grid} item xs={5} container direction="column">
        <Card>
          <CardContent>

            <Typography variant="body2" color="textSecondary" component="p" align="left">
              *Stars*
              <u>View All Reviews</u>
            </Typography>

            <CategoryPriceName />

            <Typography variant="body2" color="textSecondary" component="p" align="left">
              <b>Style &gt; </b>
              *Select Style*
            </Typography>
            <StyleThumbs
              productDetails={productStyles.results}
              thumbnails={thumbnails}
              setThumbnails={setThumbnails}
            />

            <Selectors
              productDetails={productStyles.results}
              thumbnails={thumbnails}
            />

          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.grid} item xs={12} container>
        <ProductDescription />
      </Grid>
    </Grid>
  );
};

export default ProductDisplay;
