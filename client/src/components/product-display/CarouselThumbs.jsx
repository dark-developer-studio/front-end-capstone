import React, { useContext } from 'react';
import {
  Grid
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import { SkusContext } from './ProductDisplay.jsx';

const CarouselThumbs = (props) => {
  const classes = useStyles();
  const { photos } = useContext(SkusContext);
  return (
    <Grid item container direction="column" xs={12} spacing={1}>
      {photos.map((img) => (
        <Grid key={img} item xs={12}>
          <img
            src={img}
            alt="Product Style"
            className={classes.sideImg}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarouselThumbs;
