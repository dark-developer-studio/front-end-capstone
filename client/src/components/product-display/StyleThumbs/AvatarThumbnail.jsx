import React, { useContext } from 'react';
import { Avatar, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SkusContext } from '../ProductDisplay.jsx';
import useStyles from '../MaterialUi.jsx';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'rgb(68, 92, 130)',
    color: 'rgb(68, 92, 130)',
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
          handleBadgeSelected();
          findStyleDetails(tile.styleId);
          findSkus(tile.styleId);
        }}
        hover="pointer"
      />
    </StyledBadge>
  );
};

AvatarThumbnail.propTypes = {
  index: PropTypes.number,
  setSelected: PropTypes.func,
  selected: PropTypes.number,
  tile: PropTypes.shape({
    styleId: PropTypes.number,
    thumbNail: PropTypes.string
  })
};
AvatarThumbnail.defaultProps = {
  index: 0,
  setSelected: () => {},
  selected: 0,
  tile: {}
};

export default AvatarThumbnail;
