import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Button, Paper } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const ImageGallery = (props) => {
  const classes = useStyles();
  const images = props.photosArr;

  return (
    <Carousel
      className={classes.carousel}
      animation="slide"
      navButtonsAlwaysVisible={true}
      value="true"
      indicators={false}
    >
      {
        images.map((img, i) => <Item key={i} src={img} />)
      }
    </Carousel>
  );
};

const Item = (props) => {
  const classes = useStyles();
  return (
    <Paper>
      <img
        src={props.src}
        alt="Product Style"
        className={classes.img}
      />
    </Paper>
  );
};

export default ImageGallery;
