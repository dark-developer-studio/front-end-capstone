import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Button, Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';
import SizeDD from './SizeDD.jsx';

const Selectors = (props) => {
  const classes = useStyles();
  const { skusState } = useContext(SkusContext);
  const [selectSizeValue, setSelectSizeValue] = useState('');
  const [selectQuantityValue, setSelectQuantityValue] = useState('');
  const [sizeForQuantity, setSizeForQuantity] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [quantityArr, setQuantityArr] = useState([]);

  const handleSizeChange = (event) => {
    setSelectSizeValue(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectQuantityValue(event.target.value);
  };

  const quantityArrayMaker = (maxNum) => {
    let count = 0;
    let resultArr = [];
    while (count !== maxNum) {
      resultArr.push('ph');
      count += 1;
    }
    console.log(resultArr);
    setQuantityArr(resultArr);
  };

  const getQuantityForSize = (size) => {
    let resultNum;
    if (sizeForQuantity !== '') {
      skusState.forEach((styleSkus) => {
        if (size === styleSkus.size) {
          resultNum = styleSkus.quantity;
        }
      });
      setSizeQuantity(resultNum);
      quantityArrayMaker(resultNum);
    }
  };

  // console.log(sizeForQuantity);

  useEffect(() => {
    getQuantityForSize(sizeForQuantity);
  }, [sizeForQuantity]);
  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={6}>

        <SizeDD
          handleSizeChange={handleSizeChange}
          setSizeForQuantity={setSizeForQuantity}
          selectSizeValue={selectSizeValue}
        />

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
            {quantityArr.map((quantity, i) => (
              <MenuItem value={i} key={quantity.quantity}>
                {i + 1}
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
