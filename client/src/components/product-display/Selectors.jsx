import React from 'react';
import { Grid, Button, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './MaterialUi.jsx';

const Selectors = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} spacing={1} container>
      <Grid item xs={7}>
        <select className={classes.selectTag}>
          <option default>Select Size</option>
        </select>
      </Grid>
      <Grid item xs={5}>
        <select className={classes.selectTag}>
          <option default>1</option>
        </select>
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
