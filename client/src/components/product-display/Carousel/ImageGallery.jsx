import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import { Paper, Grid } from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';
import CarouselThumbs from './CarouselThumbs.jsx';
import ImageModal from '../../global/ImageDialog.jsx';

const ImageGallery = ({ photosArr }) => {
  const classes = useStyles();
  const images = photosArr;
  const [imgState, setImgState] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    setImgState(images);
  }, [images]);

  const nextFunc = () => {
    let count = currentImg;
    if (count < imgState.length - 1) {
      count += 1;
      setCurrentImg(count);
    } else if (count === imgState.length - 1) {
      setCurrentImg(0);
    }
    return currentImg;
  };

  const prevFunc = () => {
    let count = currentImg;
    if (count > 0) {
      count -= 1;
      setCurrentImg(count);
    } else if (count === 0) {
      setCurrentImg(imgState.length - 1);
    }
    return currentImg;
  };

  return (
    <Grid
      className={classes.carouselGrid}
      item
      container
      xs={12}
      sm={6}
      md={6}
      lg={6}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <Carousel
        className={classes.carousel}
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysVisible
        navButtonsWrapperProps={{
          style: {
            height: '30px',
            top: '93%',
            color: 'white',
            opacity: '1',
            '&:hover': {
              '& $button': {
                backgroundColor: 'black',
                filter: 'brightness(120%)',
                opacity: 'unset'
              }
            }
          }
        }}
        navButtonsProps={{
          style: {
            color: 'white',
            backgroundColor: 'black',
            filter: 'brightness(120%)',
            opacity: '0.4',
            borderRadius: '6px',
            height: '30px',
            '&:hover unset': {
              backgroundColor: 'black',
              opacity: '1.0 !important'
            }
          }
        }}
        indicators={false}
        next={nextFunc}
        prev={prevFunc}
      >
        {
          imgState.map((img) => (
            <Item
              key={img.photoNum}
              img={img}
              currentImg={imgState[currentImg]}
            />
          ))
        }
      </Carousel>
      <Grid item container xs={2} style={{ position: 'absolute', top: '10px' }}>
        <CarouselThumbs
          setCurrentImg={setCurrentImg}
          currentImg={currentImg}
        />
      </Grid>
    </Grid>
  );
};

const Item = ({ img, currentImg }) => (
  <Paper
    elevation={0}
  >
    <ImageModal
      key={img.photoNum}
      url={currentImg.url}
      imageHeight={550}
      zoomDisabled={false}
    />
  </Paper>
);

Item.propTypes = {
  img: PropTypes.shape({
    photoNum: PropTypes.number,
    url: PropTypes.string
  }),
  currentImg: PropTypes.shape({
    photoNum: PropTypes.number,
    url: PropTypes.string
  })
};
Item.defaultProps = {
  img: PropTypes.shape({
    photoNum: 0,
    url: ''
  }),
  currentImg: PropTypes.shape({
    photoNum: 0,
    url: ''
  })
};

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object)
};
ImageGallery.defaultProps = {
  photosArr: [{}]
};

export default ImageGallery;
