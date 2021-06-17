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
      {photos.map((img, i) => (
        <Grid key={img.photoNum} item xs={12}>
          <img
            src={img.url}
            alt="Product Style"
            className={classes.sideImg}
            onClick={(e) => {
              props.setCurrentImg(i)
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarouselThumbs;
