import React, { useContext } from 'react';
import {
  Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../MaterialUi.jsx';
import { SkusContext } from '../ProductDisplay.jsx';

const CarouselThumbs = ({ setCurrentImg }) => {
  const classes = useStyles();
  const { photos } = useContext(SkusContext);

  return (
    <Grid item container direction="column" xs={12} spacing={1}>
      {photos.map((img, i) => (
        <Grid
          key={img.photoNum}
          item
          xs={12}
          onClick={() => {
            setCurrentImg(i);
          }}
        >
          <img
            src={img.url}
            alt="Product Style"
            className={classes.sideImg}
          />
        </Grid>
      ))}
    </Grid>
  );
};

CarouselThumbs.propTypes = {
  setCurrentImg: PropTypes.func
};
CarouselThumbs.defaultProps = {
  setCurrentImg: () => { }
};

export default CarouselThumbs;
