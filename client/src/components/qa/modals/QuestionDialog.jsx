import React, { useState, useContext } from 'react';
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
import { createQuestion } from '../helpers/qaRequests';
import { AppContext } from '../../../helpers/context';
import useStyles from '../muiStyles';

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
  const { product } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState({
    body: '',
    bodyError: false,
    nickname: 'For privacy reasons, do not use your full name or email address',
    nicknameError: false,
    email: 'For authentication reasons, you will not be emailed',
    emailError: false
  });

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateBody = () => {
    const validator = {};
    if (body.match(/[^a-zA-Z0-9!?.,():;"\-/ ]/) !== null) {
      validator.body = 'Invalid charaters used. Special characters available: (!?.,():;"-/)';
      validator.bodyError = true;
    } else if (body.length < 3) {
      validator.body = 'Needs to be at least 3 characters long';
      validator.bodyError = true;
    } else if (body.length > 1000) {
      validator.body = `Must be less than 1000 characters long. Length: ${body.length}`;
      validator.bodyError = true;
    } else {
      validator.body = '';
      validator.bodyError = false;
    }
    return validator;
  };

  const validateName = () => {
    const validator = {};
    if (nickname.match(/[^a-zA-Z0-9!?\-.]/) !== null) {
      validator.nickname = 'Invalid charaters used. Special characters available: (!?-.)';
      validator.nicknameError = true;
    } else if (nickname.length < 3) {
      validator.nickname = 'Needs to be at least 3 characters long';
      validator.nicknameError = true;
    } else if (nickname.length > 60) {
      validator.nickname = `Must be less than 60 characters long. Length: ${nickname.length}`;
      validator.nicknameError = true;
    } else {
      validator.nickname = 'For privacy reasons, do not use your full name or email address';
      validator.nicknameError = false;
    }
    return validator;
  };

  const validateEmail = () => {
    const validator = {};
    // eslint-disable-next-line no-control-regex
    if (email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) === null) {
      validator.email = 'Invalid email address';
      validator.emailError = true;
    } else if (email.length < 3) {
      validator.email = 'Needs to be at least 3 characters long';
      validator.emailError = true;
    } else if (email.length > 60) {
      validator.email = `Must be less than 60 characters long. Length: ${email.length}`;
      validator.emailError = true;
    } else {
      validator.email = 'For authentication reasons, you will not be emailed';
      validator.emailError = false;
    }
    return validator;
  };

  const validateQuestion = () => {
    const bodyValidator = validateBody();
    const nameValidator = validateName();
    const emailValidator = validateEmail();
    const newValidator = { ...bodyValidator, ...nameValidator, ...emailValidator };

    if (!newValidator.bodyError && !newValidator.nicknameError && !newValidator.emailError) {
      const question = {
        product_id: product.id,
        body,
        name: nickname,
        email
      };
      createQuestion(question)
        .then(() => handleClose())
        .catch();
    } else {
      setValidation(newValidator);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className={classes.offWhite}
      >
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
          validation={validation}
        />

        <DialogActions>
          <Button autoFocus onClick={validateQuestion} color="primary">
            Submit Question
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
