import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  DialogContent
} from '@material-ui/core';

import { AppContext } from '../../../helpers/context';

export default function QuestionDialogBody({
  setBody, setNickname, setEmail, validation
}) {
  const { product } = useContext(AppContext);

  return (
    <DialogContent dividers>
      <Typography className="subtitle">{`About the ${product.name}`}</Typography>
      <form className="formContainer">
        <TextField
          multiline
          rows={6}
          label="Question"
          variant="outlined"
          helperText={validation.body}
          error={validation.bodyError}
          className="question"
          onChange={(e) => setBody(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Nickname"
          placeholder="Example: jackson11!"
          helperText={validation.nickname}
          error={validation.nicknameError}
          className="nickname"
          onChange={(e) => setNickname(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Example: jackson@email.com"
          helperText={validation.email}
          error={validation.emailError}
          type="email"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </DialogContent>
  );
}

QuestionDialogBody.propTypes = {
  setBody: PropTypes.func,
  setNickname: PropTypes.func,
  setEmail: PropTypes.func,
  validation: PropTypes.shape({
    body: PropTypes.string,
    bodyError: PropTypes.bool,
    nickname: PropTypes.string,
    nicknameError: PropTypes.bool,
    email: PropTypes.string,
    emailError: PropTypes.bool
  })
};

QuestionDialogBody.defaultProps = {
  setBody: () => {},
  setNickname: () => {},
  setEmail: () => {},
  validation: {
    body: '',
    bodyError: false,
    nickname: 'For privacy reasons, do not use your full name or email address',
    nicknameError: false,
    email: 'For authentication reasons, you will not be emailed',
    emailError: false
  }
};
