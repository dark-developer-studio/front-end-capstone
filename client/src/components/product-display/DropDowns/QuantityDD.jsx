import React, { forwardRef } from 'react';
import {
  Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../MaterialUi.jsx';

const QuantityDD = forwardRef(({
  setQuantitiySelected,
  selectQuantityValue,
  handleQuantityChange,
  selectSizeValue,
  quantityArr
}, ref) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} ref={ref}>
      <InputLabel id="Select-Quantity-DD">Quantity</InputLabel>
      <Select
        labelId="Select-Quantity-DD"
        id="SelectQuantity"
        value={selectQuantityValue}
        onChange={(event) => {
          handleQuantityChange(event);
        }}
        onClick={(event) => {
          setQuantitiySelected(event.target.quantity + 1);
        }}
        disabled={selectSizeValue === ''}
      >

        <MenuItem value={undefined} disabled>
          <em>Select Quantity</em>
        </MenuItem>

        {quantityArr.map((quantity, i) => (
          <MenuItem value={quantity} key={quantity}>
            {i + 1}
          </MenuItem>
        ))}

      </Select>
      <FormHelperText>Select Quantity</FormHelperText>
    </FormControl>
  );
});

QuantityDD.propTypes = {
  setQuantitiySelected: PropTypes.func,
  handleQuantityChange: PropTypes.func,
  selectSizeValue: PropTypes.string,
  quantityArr: PropTypes.arrayOf(PropTypes.number)
};
QuantityDD.defaultProps = {
  setQuantitiySelected: () => {},
  handleQuantityChange: () => {},
  selectSizeValue: '',
  quantityArr: [0]
};

export default QuantityDD;
