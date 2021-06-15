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

import AnswerDialogBody from './AnswerDialogBody.jsx';
import { createAnswer } from '../helpers/qaRequests';

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

export default function AnswerDialog({ question }) {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateBody = () => body.indexOf(/[^a-zA-Z0-9!?.,():;"\-/ ]/) < 0 && body.length > 3 && body.length < 1000;

  const validateName = () => nickname.indexOf(/[^a-zA-Z0-9!?\-.]/) < 0 && nickname.length > 3 && nickname.length < 60;

  const validateEmail = () => true;

  const validateAnswer = () => {
    if (validateBody() && validateName() && validateEmail()) {
      const answer = {
        question_id: question.question_id,
        body,
        name: nickname,
        email,
        photos
      };
      createAnswer(answer);
    } else {
      //
    }
  };

  return (
    <>
      <Button onClick={handleOpen}>
        Add Answer
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitleBar id="customized-dialog-title" onClose={handleClose}>
          Submit your Answer
        </DialogTitleBar>

        <AnswerDialogBody
          question={question}
          photos={photos}
          setPhotos={setPhotos}
          setBody={setBody}
          setNickname={setNickname}
          setEmail={setEmail}
        />

        <DialogActions>
          <Button autoFocus onClick={validateAnswer} color="primary">
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AnswerDialog.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
    asker_name: PropTypes.string
  }),
  classes: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    root: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    closeButton: PropTypes.object
  })
};

AnswerDialog.defaultProps = {
  question: {},
  classes: { root: {}, closeButton: {} }
};
