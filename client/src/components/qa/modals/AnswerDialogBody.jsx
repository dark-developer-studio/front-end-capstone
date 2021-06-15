import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  DialogContent
} from '@material-ui/core';

import { AppContext } from '../../../helpers/context';
import ImageModal from '../../global/ImageDialog.jsx';

export default function AnswerDialogBody({
  question, photos, setPhotos, setBody, setNickname, setEmail
}) {
  const { product } = useContext(AppContext);

  return (
    <DialogContent dividers>
      <Typography className="subtitle">{`${product.name}: ${question.question_body}`}</Typography>
      <form className="formContainer">
        <TextField
          multiline
          rows={6}
          variant="outlined"
          label="Answer"
          fullWidth
          onChange={(e) => setBody(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Nickname"
          placeholder="Example: jack543!"
          helperText="For privacy reasons, do not use your full name or email address"
          fullWidth
          onChange={(e) => setNickname(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Example: jack@email.com"
          helperText="For authentication reasons, you will not be emailed"
          type="email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />

        <Container>
          {photos.map((url) => <ImageModal key={url} url={url} />)}
        </Container>

        <Button
          variant="contained"
          component="label"
        >
          Upload Photo
          <input
            type="file"
            hidden
          />
        </Button>
      </form>
    </DialogContent>
  );
}

AnswerDialogBody.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_helpfulness: PropTypes.number,
    asker_name: PropTypes.string
  }),
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string
  })),
  setPhotos: PropTypes.func,
  setBody: PropTypes.func,
  setNickname: PropTypes.func,
  setEmail: PropTypes.func
};

AnswerDialogBody.defaultProps = {
  question: {},
  photos: [],
  setPhotos: () => {},
  setBody: () => {},
  setNickname: () => {},
  setEmail: () => {}
};
