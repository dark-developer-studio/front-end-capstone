import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid } from '@material-ui/core';
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
    <Paper
      className={classes.imgBackground}
      elevation={0}
    >
      <Grid item container direction="column" xs={12} className={classes.imgGrid}>
        <img
          src={props.src}
          alt="Product Style"
          className={classes.mainImg}
        />
        <img
          src={props.src}
          alt="Product Side Img"
          className={classes.sideImg}
        />
        <img
          src={props.src}
          alt="Product Side Img"
          className={classes.sideImg2}
        />
      </Grid>
    </Paper>
  );
};

export default ImageGallery;
