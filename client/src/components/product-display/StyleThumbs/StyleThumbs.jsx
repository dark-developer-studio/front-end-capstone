import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GridList, GridListTile, CircularProgress
} from '@material-ui/core';
import useStyles from '../MaterialUi.jsx';
import AvatarThumbnail from './AvatarThumbnail.jsx';

const StyleThumbs = ({
  productDetails,
  setThumbnails,
  thumbnails
}) => {
  const classes = useStyles();
  const [thumbsCollected, setThumbsCollected] = useState(false);
  const [selected, setSelected] = useState(0);

  const getThumbs = () => {
    if (productDetails.length > 0) {
      const thumbs = [];
      productDetails.forEach((style) => {
        if (style.photos[0] !== undefined) {
          thumbs.push({
            styleId: style.style_id,
            thumbNail: style.photos[0].thumbnail_url,
            name: style.name
          });
        }
      });
      setThumbnails(thumbs);
      setThumbsCollected(true);
    }
  };

  useEffect(() => {
    getThumbs();
  }, [productDetails]);

  return (
    <div>
      {thumbnails.length === 0 ? (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      ) : (
        <GridList cellHeight={50} cols={4} className={classes.gridList}>
          {thumbnails.map((tile, index) => (
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

StyleThumbs.propTypes = {
  productDetails: PropTypes.arrayOf(PropTypes.object),
  setThumbnails: PropTypes.func,
  thumbnails: PropTypes.arrayOf(PropTypes.object)
};
StyleThumbs.defaultProps = {
  productDetails: {},
  setThumbnails: () => {},
  thumbnails: [{}]
};

export default StyleThumbs;
