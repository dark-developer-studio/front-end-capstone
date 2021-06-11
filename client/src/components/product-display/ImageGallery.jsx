import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Button } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const ImageGallery = (props) => {
  const classes = useStyles();
  const images = [
    {
      img: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
    },
    {
      img: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
    }
  ];

  return (
    <Carousel
      className={classes.carousel}
      animation="slide"
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
    <Card>
      <CardMedia
        className={classes.img}
        component="img"
        src={props.src.img}
      />
    </Card>
  );
};

export default ImageGallery;
