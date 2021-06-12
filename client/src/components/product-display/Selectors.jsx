import React, { useState } from 'react';
import {
  Grid, Button, IconButton, Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';

const Selectors = (props) => {
  const classes = useStyles();
  const [selectSizeValue, setSelectSizeValue] = useState('');
  const [selectQuantityValue, setSelectQuantityValue] = useState('');
  const [sizeForQuantity, setSizeForQuantity] = useState('');

  const handleSizeChange = (event) => {
    setSelectSizeValue(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectQuantityValue(event.target.value);
  };
  console.log(sizeForQuantity);
  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="Select-Size-DD">Size</InputLabel>
          <Select
            labelId="Select-Size-DD"
            id="SelectSize"
            value={selectSizeValue}
            onChange={(event) => {
              handleSizeChange(event);
            }}
            onClick={(event) => {
              event.preventDefault();
              setSizeForQuantity(event.target.value);
            }}
          >
            <MenuItem value="">
              <em>Select Size</em>
            </MenuItem>
            {props.skus.map((size, index) => (
              <MenuItem value={size.size} key={index}>
                {size.size}
              </MenuItem>
            ))}
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
            value={selectQuantityValue}
            onChange={(event) => {
              handleQuantityChange(event);
            }}
            disabled={selectSizeValue === ''}
          >
            <MenuItem value="">
              <em>Select Quantity</em>
            </MenuItem>
            {props.skus.map((quantity) => (
              <MenuItem value={quantity.quantity} key={quantity.quantity}>
                {quantity.quantity}
              </MenuItem>
            ))}
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
