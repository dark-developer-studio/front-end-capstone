import React from 'react';
import {
  Select, MenuItem, FormControl, InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SortSelector = ({ setSortValue }) => {
  const classes = useStyles();

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">
        Sort Category by:
      </InputLabel>
      <Select
        className={classes.selectBox}
        labelId="sortSelect"
        id="sortSelect"
        onChange={(event) => setSortValue(event.target.value)}
      >
        <MenuItem value="" disabled>
          <em>Select a Category</em>
        </MenuItem>
        <MenuItem value="helpful">Helpful</MenuItem>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="relevant">Relevant</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelector;
