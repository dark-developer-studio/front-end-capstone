import React, { useState, useEffect } from 'react';
import {
  GridList, GridListTile, Avatar, CircularProgress, Badge
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';
import AvatarThumbnail from './AvatarThumbnail.jsx';

const StyleThumbs = (props) => {
  const classes = useStyles();
  const [thumbsCollected, setThumbsCollected] = useState(false);
  const [selected, setSelected] = useState(0);

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
        <GridList cellHeight={50} cols={4} className={classes.gridList}>
          {props.thumbnails.map((tile, index) => (
            <GridListTile key={index} cols={tile.cols || 1}>
              <AvatarThumbnail
                tile={tile}
                index={index}
                setSelected={setSelected}
                selected={selected}
              />
            </GridListTile>
          ))}
        </GridList>
      )}
    </div>
  );
};

export default StyleThumbs;
