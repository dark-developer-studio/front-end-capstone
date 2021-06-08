import React from 'react';
import { GridList, GridListTile, Avatar } from '@material-ui/core';
import useStyles from './MaterialUi.jsx';

const StyleThumbs = (props) => {
  const classes = useStyles();
  return (
    <GridList cellHeight={60} className={classes.gridList} cols={4}>
      {props.products.map((tile, index) => (
        <GridListTile key={index} cols={tile.cols || 1}>
          <Avatar
            className={classes.avatarLarge}
            alt="Style"
            src="https://via.placeholder.com/50"
            onClick={() => {
              alert(`This is style ${index}`)
            }}
            hover="pointer"
            />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default StyleThumbs;
