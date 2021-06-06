import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} spacing={1} container>
        <Grid className={classes.grid} item xs={7} container>
          <Grid className={classes.grid3} item xs={12} container>
            Image Gallery
          </Grid>
        </Grid>
        <Grid className={classes.grid2} item xs={5} container direction="column">
          <Grid className={classes.grid3} item xs={12} container direction="column">
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
          </Grid>
        </Grid>
        <Grid className={classes.grid6} item xs={12} container>
          <Grid className={classes.grid5} item xs={12} container>
            Description
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDisplay;
