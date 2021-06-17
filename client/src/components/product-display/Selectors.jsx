import React, { useState, useEffect, useContext, createRef } from 'react';
import {
  Grid, Button, Popover, Typography
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';
import SizeDD from './DropDowns/SizeDD.jsx';
import QuantityDD from './DropDowns/QuantityDD.jsx';

const Selectors = (props) => {
  const classes = useStyles();
  const { skusState, photos } = useContext(SkusContext);
  const [selectSizeValue, setSelectSizeValue] = useState('');
  const [selectQuantityValue, setSelectQuantityValue] = useState('');
  const [sizeForQuantity, setSizeForQuantity] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState(0);
  const [quantitiySelected, setQuantitiySelected] = useState('');
  const [skusId, setSkusId] = useState(0);
  const [quantityArr, setQuantityArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const popoverOpen = Boolean(anchorEl);
  const inputEl = createRef();

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleSizeChange = (event) => {
    setSelectSizeValue(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectQuantityValue(event.target.value);
  };

  // Quantity popover
  const handlePopover = () => {
    setAnchorEl(inputEl.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Rendering quantity DD
  const getStyleId = (size) => {
    skusState.forEach((stlyeObj) => {
      if (stlyeObj.size === size) {
        setSkusId(parseInt(stlyeObj.id, 10));
      }
    });
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
    getStyleId(sizeForQuantity);
  }, [sizeForQuantity]);

  // console.log(skusId);
  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={6}>

        <SizeDD
          handleSizeChange={handleSizeChange}
          setSizeForQuantity={setSizeForQuantity}
          selectSizeValue={selectSizeValue}
          open={open}
          handleClickAway={handleClickAway}
          setSkusId={setSkusId}
        />

      </Grid>
      <Grid item xs={6}>

        <QuantityDD
          ref={inputEl}
          selectQuantityValue={selectQuantityValue}
          handleQuantityChange={handleQuantityChange}
          selectSizeValue={selectSizeValue}
          quantityArr={quantityArr}
          setQuantitiySelected={setQuantitiySelected}
        />

      </Grid>
      <Grid item xs={9}>

        <Button
          className={classes.button}
          variant="outlined"
          onClick={(event) => {
            if (quantityArr.length === 0) {
              handlePopover(event);
            }
            if (quantityArr.length > 0 && quantitiySelected !== '') {
              props.addToBag(skusId);
            }
          }}
        >
          Add To Bag
        </Button>
        <Popover
          open={popoverOpen}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography>
            Please chose an amount.
          </Typography>
        </Popover>

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
