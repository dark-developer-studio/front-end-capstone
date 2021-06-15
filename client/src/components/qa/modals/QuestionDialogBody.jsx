import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  DialogContent
} from '@material-ui/core';

import { AppContext } from '../../../helpers/context';

export default function QuestionDialogBody({ setBody, setNickname, setEmail }) {
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
          className="question"
          onChange={(e) => setBody(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Nickname"
          placeholder="Example: jackson11!"
          helperText="For privacy reasons, do not use your full name or email address"
          className="nickname"
          onChange={(e) => setNickname(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Example: jackson@email.com"
          helperText="For authentication reasons, you will not be emailed"
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
  setEmail: PropTypes.func
};

QuestionDialogBody.defaultProps = {
  setBody: () => {},
  setNickname: () => {},
  setEmail: () => {}
};
