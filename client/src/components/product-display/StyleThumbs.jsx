import React, { useState, useEffect } from 'react';
import {
  GridList, GridListTile, Avatar, CircularProgress
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const StyleThumbs = (props) => {
  const classes = useStyles();
  // const [thumbnails, setThumbnails] = useState([]);
  const [thumbsCollected, setThumbsCollected] = useState(false);

  const getThumbs = () => {
    if (props.productDetails.length > 0) {
      const thumbs = [];
      props.productDetails.forEach((style) => {
        if (style.photos[0] !== undefined) {
          thumbs.push({
            styleId: style.style_id,
            thumbNail: style.photos[0].thumbnail_url,
            name: style.name
          });
        }
      });
      props.setThumbnails(thumbs);
      setThumbsCollected(true);
    }
  };

  useEffect(() => {
    getThumbs();
  }, [props.productDetails]);

  return (
    <div>
      {props.thumbnails.length === 0 ? (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        <GridList cellHeight={60} className={classes.gridList} cols={4}>
          {props.thumbnails.map((tile, index) => (
            <GridListTile key={index} cols={tile.cols || 1}>
              <Avatar
                className={classes.avatarLarge}
                alt="Styles"
                src={tile.thumbNail}
                onClick={() => {
                  props.getStylePhotosAndPrice(tile.styleId);
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
