import React, { useContext, useState, useEffect } from 'react';
import { Card, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    // border: "2px solid black",
    padding: '10px',
    margin: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  }
}));

const ImageGallery = (props) => {
  const { reviewResults } = useContext(ReviewsContext);
  const [photosArr, setPhotosArr] = useState([]);

  const createImageGallery = () => {
    setPhotosArr(props.revPhotos);
  };
  useEffect(() => {
    createImageGallery();
  }, [reviewResults]);

  const classes = useStyles();
  if (photosArr.length > 0) {
    return (
      <Card className={classes.parentContainer}>
        <GridList className={classes.gridList} cols={2.5}>
          {photosArr.map((photo) => (
            <img key={photo.id} src={photo.url} alt="Broken-thumbnail" width="auto" height="100" />
          ))}
        </GridList>
      </Card>
    );
  }
  return (
    <div />
  );
};

export default ImageGallery;
