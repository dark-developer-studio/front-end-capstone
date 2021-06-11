import React, { useState, useEffect } from 'react';
import {
  Grid, Button, IconButton, Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';

const Selectors = (props) => {
  const classes = useStyles();
  const [sizeAndQuantity, setSizeAndQuantity] = useState([]);
  const getSkus = () => {
    if (props.productDetails.length > 0) {
      props.productDetails.forEach((style) => {
        sizeAndQuantity.push({ [style.name]: style.skus });
      });
    }
  };

  useEffect(() => {
    getSkus();
  }, [props.productDetails]);

  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="Select-Size-DD">Size</InputLabel>
          <Select
            labelId="Select-Size-DD"
            id="SelectSize"
            value=""
          // onChange={}
          >
            <MenuItem value="">
              <em>Select Size</em>
            </MenuItem>
          </Select>
          <FormHelperText>Select Size</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="Select-Quantity-DD">Quantity</InputLabel>
          <Select
            labelId="Select-Quantity-DD"
            id="SelectQuantity"
            value=""
          // onChange={}
          >
            <MenuItem value="">
              <em>Select Quantity</em>
            </MenuItem>
          </Select>
          <FormHelperText>Select Quantity</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={9}>
        <Button className={classes.button} variant="outlined">
          Add To Bag
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button className={classes.button} variant="outlined">
          <FavoriteBorderIcon className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Selectors;
