import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Grid, Avatar } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import CarouselThumbs from './CarouselThumbs.jsx';

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
      </Grid>
      <Grid item container xs={1} style={{ position: 'absolute', bottom: '200px' }}>
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
      className={classes.imgBackground}
      elevation={0}
    >
      <img
        key={props.img.photoNum}
        src={props.currentImg.url}
        alt="Product Style"
        className={classes.mainImg}
      />
    </Paper>
  );
};

export default ImageGallery;
