import React, { useState, useEffect } from 'react';
import {
  GridList, GridListTile, Avatar, CircularProgress
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const StyleThumbs = (props) => {
  const classes = useStyles();
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbsCollected, setThumbsCollected] = useState(false);

  const getThumbs = () => {
    if (props.productStyles.length > 0) {
      const thumbs = [];
      props.productStyles.forEach((style) => {
        if (style.photos[0] !== undefined) {
          thumbs.push(style.photos[0].thumbnail_url);
        }
      });
      setThumbnails(thumbs);
      setThumbsCollected(true);
    }
  };

  useEffect(() => {
    getThumbs();
  }, [props.productStyles]);

  return (
    <div>
      {thumbnails.length === 0 ? (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        <GridList cellHeight={60} className={classes.gridList} cols={4}>
          {thumbnails.map((tile, index) => (
            <GridListTile key={index} cols={tile.cols || 1}>
              <Avatar
                className={classes.avatarLarge}
                alt="Styles"
                src={tile}
                onClick={() => {
                  alert(`This is style ${index}`);
                }}
                hover="pointer"
              />
            </GridListTile>
          ))}
        </GridList>
      )}
    </div>
  );
};

export default StyleThumbs;
