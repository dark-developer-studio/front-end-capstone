import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  IconButton
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import QuestionDialogBody from './QuestionDialogBody.jsx';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitleBar = withStyles(styles)((props) => {
  const {
    children,
    classes,
    onClose,
    ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

export default function QuestionDialog() {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add a Question
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitleBar id="customized-dialog-title" onClose={handleClose}>
          Ask Your Question
        </DialogTitleBar>

        <QuestionDialogBody
          setBody={setBody}
          setNickname={setNickname}
          setEmail={setEmail}
        />

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

QuestionDialog.propTypes = {
  classes: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    root: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    closeButton: PropTypes.object
  })
};

QuestionDialog.defaultProps = {
  classes: { root: {}, closeButton: {} }
};
