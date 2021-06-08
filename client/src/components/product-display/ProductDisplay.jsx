import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Card, CardContent, CardHeader, CardMedia
} from '@material-ui/core';
import Axios from 'axios';
import CategoryPriceName from './CategoryPriceName.jsx';
import useStyles from './MaterialUi.jsx';
import StyleThumbs from './StyleThumbs.jsx';
import Selectors from './Selectors.jsx';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);

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
    Axios
      .get(`/api/display/products/:${productId}/styles`)
      .then((response) => {
        setProductStyles(response.data);
      })
      .catch();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid item xs={12} spacing={1} container>
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
            {/* {products.map((product, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <CategoryPriceName product={product} key={index} />
              ))} */}
            <Typography variant="h6" color="textSecondary" component="p" align="left">
              *Category*
            </Typography>
            <Typography variant="h4" color="textSecondary" component="p" align="left">
              *Product Name*
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="left">
              *Price*
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="left">
              <b>Style &gt; </b>
              Select Style
            </Typography>
            <StyleThumbs products={products} />
            <Selectors />
          </CardContent>
        </Card>
        {/* <Grid className={classes.grid3} item xs={12} container direction="column">
            <Grid className={classes.grid4} item xs={12}>
              Stars + Review Link
            </Grid>
            <Grid className={classes.grid4} item xs={12}>
              Category, Product Name, Price
            </Grid>
            <Grid className={classes.grid4} item xs={12}>
              Style &gt; Selected Style
            </Grid>
            <Grid className={classes.grid4} item xs={12} container>
              <Grid className={classes.grid5} item xs={3}>
                Style 1
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 2
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 3
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 4
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 5
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 6
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 7
              </Grid>
              <Grid className={classes.grid5} item xs={3}>
                Style 8
              </Grid>
            </Grid>
            <Grid className={classes.grid4} item xs={12} container direction="column">
              <Grid className={classes.grid5} item xs={12} container>
                <Grid className={classes.grid6} item xs={7}>
                  Select Size DD
                </Grid>
                <Grid className={classes.grid6} item xs={5}>
                  Quantity DD
                </Grid>
                <Grid className={classes.grid6} item xs={8}>
                  Add To Cart
                </Grid>
                <Grid className={classes.grid6} item xs={4}>
                  Favorite
                </Grid>
              </Grid>
            </Grid>
          </Grid> */}
      </Grid>
      <Grid className={classes.grid6} item xs={12} container>
        <Grid className={classes.grid5} item xs={12} container>
          Description
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDisplay;
