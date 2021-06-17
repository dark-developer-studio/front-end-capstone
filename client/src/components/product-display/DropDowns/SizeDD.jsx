import React, { useState, useEffect, useContext } from 'react';
import {
  Select, MenuItem, FormControl, FormHelperText, InputLabel, ClickAwayListener
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';
import { SkusContext } from '../ProductDisplay.jsx';

const SizeDD = (props) => {
  const classes = useStyles();
  const { skusState, photos } = useContext(SkusContext);
  const [valsArr, setValsArr] = useState([]);

  const noDuplicateVals = () => {
    const vals = [];
    skusState.forEach((size) => {
      if (!vals.includes(size.size)) {
        vals.push(size.size);
      }
    });
    setValsArr(vals);
  };

  useEffect(() => {
    noDuplicateVals();
  }, [skusState]);

  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <div>
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
            <MenuItem value="" key="empty">
              <em>Select Size</em>
            </MenuItem>
            {props.open ? (null) : (
              valsArr.map((size) => (
                <MenuItem value={size} key={size}>
                  {size}
                </MenuItem>
              ))
            )}
          </Select>
          <FormHelperText>Select Size</FormHelperText>
        </FormControl>
      </div>
    </ClickAwayListener>
  );
};

export default SizeDD;
