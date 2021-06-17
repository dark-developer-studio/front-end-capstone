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
  dialog: {
    overflow: 'hidden'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export default function ImageDialog({ url, imageHeight }) {
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
        <img src={url} alt="thumbnail" width="auto" height={imageHeight} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        maxWidth="lg"
        aria-labelledby="image-dialog"
        aria-describedby="displays a dialog with the image at full resolution"
        className={classes.dialog}
      >
        <DialogTitle className={classes.root}>
          <IconButton aria-label="close" onClick={handleClose} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <div style={{ overflow: 'hidden' }}>
          <img
            src={url}
            alt="dialog"
            style={{
              padding: 5,
              height: 'auto',
              maxWidth: '99%'
            }}
          />
        </div>
      </Dialog>
    </>
  );
}

ImageDialog.propTypes = {
  url: PropTypes.string,
  imageHeight: PropTypes.number
};

ImageDialog.defaultProps = {
  url: '',
  imageHeight: 100
};
