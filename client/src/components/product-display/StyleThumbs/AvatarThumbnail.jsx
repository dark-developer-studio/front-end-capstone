import React, { useContext } from 'react';
import { Avatar, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { SkusContext } from '../ProductDisplay.jsx';
import useStyles from '../MaterialUi.jsx';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#b3c0d7',
    color: '#b3c0d7',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))(Badge);

const AvatarThumbnail = ({
  index, setSelected, selected, tile
}) => {
  const classes = useStyles();
  const { findStyleDetails, findSkus } = useContext(SkusContext);

  const handleBadgeSelected = () => {
    setSelected(index);
  };

  return (
    <StyledBadge
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      variant="dot"
      invisible={selected !== index}
    >
      <Avatar
        index={index}
        className={classes.avatarLarge}
        alt="Styles"
        src={tile.thumbNail}
        onClick={() => {
          handleBadgeSelected(event);
          findStyleDetails(tile.styleId);
          findSkus(tile.styleId);
        }}
        hover="pointer"
      />
    </StyledBadge>
  );
};

export default AvatarThumbnail;
