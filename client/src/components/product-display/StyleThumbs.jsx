import React, { useState, useEffect } from 'react';
import { GridList, GridListTile, Avatar } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const StyleThumbs = (props) => {
  const classes = useStyles();
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbsCollected, setThumbsCollected] = useState(false);

  const getThumbs = () => {
    const thumbs = [];
    props.productStyles.forEach((style) => {
      if (style.photos[0] !== undefined) {
        thumbs.push(style.photos[0].thumbnail_url);
      }
    });
    setThumbnails(thumbs);
    setThumbsCollected(true);
  };

  useEffect(() => {
    getThumbs();
  }, []);
  let thumbs;
  // console.log('thumbnails');
  // console.log(thumbnails);
  if (thumbsCollected) {
    thumbs = (
      <GridList cellHeight={60} className={classes.gridList} cols={4}>
        {thumbnails.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <Avatar
              className={classes.avatarLarge}
              alt="Styles"
              src="https://via.placeholder.com/50"
              onClick={() => {
                alert(`This is style ${index}`);
              }}
              hover="pointer"
            />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    thumbs = (
      <div>Thumbnails not found</div>
    );
  }
  return (
    thumbs
    // <GridList cellHeight={60} className={classes.gridList} cols={4}>
    //   {props.productStyles.map((tile, index) => (
    //     <GridListTile key={index} cols={tile.cols || 1}>
    //       <Avatar
    //         className={classes.avatarLarge}
    //         alt="Styles"
    //         src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    //         onClick={() => {
    //           alert(`This is style ${index}`)
    //         }}
    //         hover="pointer"
    //       />
    //     </GridListTile>
    //   ))}
    // </GridList>
  );
};

export default StyleThumbs;
