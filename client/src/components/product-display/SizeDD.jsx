import React, { useContext } from 'react';
import {
  Select, MenuItem, FormControl, FormHelperText, InputLabel
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';

const SizeDD = (props) => {
  const classes = useStyles();
  const { skusState } = useContext(SkusContext);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="Select-Size-DD">Size</InputLabel>
      <Select
        labelId="Select-Size-DD"
        id="SelectSize"
        value={props.selectSizeValue}
        onChange={(event) => {
          props.handleSizeChange(event);
        }}
        onClick={(event) => {
          event.preventDefault();
          props.setSizeForQuantity(event.target.value);
        }}
      >
        <MenuItem value="">
          <em>Select Size</em>
        </MenuItem>
        {skusState.map((size, index) => (
          <MenuItem value={size.size} key={index}>
            {size.size}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select Size</FormHelperText>
    </FormControl>
  );
};

export default SizeDD;
