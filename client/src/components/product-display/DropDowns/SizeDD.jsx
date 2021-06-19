import React, {
  useState, useEffect, useContext, forwardRef
} from 'react';
import PropTypes from 'prop-types';
import {
  Select, MenuItem, FormControl, FormHelperText, InputLabel, ClickAwayListener
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';
import { SkusContext } from '../ProductDisplay.jsx';

const SizeDD = forwardRef(({
  handleClickAway,
  selectSizeValue,
  handleSizeChange,
  setSelectQuantityValue,
  setSizeForQuantity,
  open
}, ref) => {
  const classes = useStyles();
  const { skusState } = useContext(SkusContext);
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
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <FormControl className={classes.formControl} ref={ref}>
          <InputLabel id="Select-Size-DD">Size</InputLabel>
          <Select
            labelId="Select-Size-DD"
            id="SelectSize"
            value={selectSizeValue}
            onChange={(event) => {
              handleSizeChange(event);
              setSelectQuantityValue('');
            }
            }
            onClick={(event) => {
              event.preventDefault();
              setSizeForQuantity(event.target.value);
            }}
          >
            <MenuItem value="" key="empty" disabled>
              <em>Select Size</em>
            </MenuItem>
            {open ? (null) : (
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
});

SizeDD.propTypes = {
  handleClickAway: PropTypes.func,
  handleSizeChange: PropTypes.func,
  setSelectQuantityValue: PropTypes.func,
  setSizeForQuantity: PropTypes.func,
  open: PropTypes.bool
};
SizeDD.defaultProps = {
  handleClickAway: () => {},
  handleSizeChange: () => {},
  setSelectQuantityValue: () => {},
  setSizeForQuantity: () => {},
  open: false
};

export default SizeDD;
