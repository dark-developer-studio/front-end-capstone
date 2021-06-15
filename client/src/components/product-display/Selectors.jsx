import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Button
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';
import SizeDD from './DropDowns/SizeDD.jsx';
import QuantityDD from './DropDowns/QuantityDD.jsx';

const Selectors = () => {
  const classes = useStyles();
  const { skusState } = useContext(SkusContext);
  const [selectSizeValue, setSelectSizeValue] = useState('');
  const [selectQuantityValue, setSelectQuantityValue] = useState('');
  const [sizeForQuantity, setSizeForQuantity] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [quantityArr, setQuantityArr] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSizeChange = (event) => {
    setSelectSizeValue(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectQuantityValue(event.target.value);
  };

  const quantityArrayMaker = (maxNum) => {
    let count = 0;
    const resultArr = [];
    while (count !== maxNum) {
      resultArr.push(count);
      count += 1;
    }
    setQuantityArr(resultArr);
  };

  const getQuantityForSize = (size) => {
    let resultNum;
    if (sizeForQuantity !== '') {
      if (sizeForQuantity === undefined) {
        return;
      }
      skusState.forEach((styleSkus) => {
        if (size === styleSkus.size) {
          resultNum = styleSkus.quantity;
        }
      });
      setSizeQuantity(resultNum);
      quantityArrayMaker(resultNum);
    }
  };

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
          open={open}
          handleClickAway={handleClickAway}
        />

      </Grid>
      <Grid item xs={6}>

        <QuantityDD
          selectQuantityValue={selectQuantityValue}
          handleQuantityChange={handleQuantityChange}
          selectSizeValue={selectSizeValue}
          quantityArr={quantityArr}
        />

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
