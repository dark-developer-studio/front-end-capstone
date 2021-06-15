import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog, DialogTitle, Button, IconButton
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(4)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export default function ImageDialog({ url }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleKey = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    } else if (e.keyCode === 13) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} onKeyDown={handleKey}>
        <img src={url} alt="thumbnail" width="auto" height="100" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="image-dialog"
        aria-describedby="displays a dialog with the image at full resolution"
      >
        <DialogTitle className={classes.root}>
          <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <img src={url} alt="dialog" style={{ height: 'auto', maxWidth: '100%', maxHeight: Math.floor(window.innerHeight * 0.80) }} />
      </Dialog>
    </>
  );
}

ImageDialog.propTypes = {
  url: PropTypes.string
};

ImageDialog.defaultProps = {
  url: ''
};
