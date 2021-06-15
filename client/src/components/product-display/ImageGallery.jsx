import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Avatar } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import CarouselThumbs from './CarouselThumbs.jsx';

const ImageGallery = (props) => {
  const classes = useStyles();
  const images = props.photosArr;

  return (
    <Grid item container xs={12}>
      <Grid item container xs={12} style={{ position: 'relative' }}>
        <Carousel
          className={classes.carousel}
          animation="slide"
          navButtonsAlwaysVisible
          navButtonsWrapperProps={{
            style: {
              top: '265px'
            }
          }}
          navButtonsProps={{
            style: {
              backgroundColor: '#ADD8E6',
              borderRadius: '6px',
              border: '2px solid black',
              height: '10px',
              margin: '5px'
            }
          }}
          indicators={false}
        >
          {
            images.map((img, i) => <Item key={i} src={img} />)
          }
        </Carousel>
      </Grid>
      <Grid item container xs={1} style={{ position: 'absolute', bottom: '200px' }}>
        <CarouselThumbs />
      </Grid>
    </Grid>
  );
};

const Item = (props) => {
  const classes = useStyles();
  return (
    // <Grid item container xs={12} className={classes.imgGrid}>
    <Paper
      className={classes.imgBackground}
      elevation={0}
    >
      <img
        src={props.src}
        alt="Product Style"
        className={classes.mainImg}
      />
    </Paper>
    // </Grid>
  );
};

export default ImageGallery;
