import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Avatar } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import CarouselThumbs from './CarouselThumbs.jsx';
import ImageModal from '../global/ImageDialog.jsx';

const ImageGallery = (props) => {
  const classes = useStyles();
  const images = props.photosArr;
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
    <Grid item container xs={12} md={10} lg={10} style={{ position: 'relative', overflow: 'hidden' }}>
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
            // border: '2px solid black',
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

const Item = (props) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
    >
      <ImageModal
        key={props.img.photoNum}
        url={props.currentImg.url}
        imageHeight={550}
        zoomDisabled={false}
      />
    </Paper>
  );
};

export default ImageGallery;
