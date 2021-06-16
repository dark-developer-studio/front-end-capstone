import React, { useState, useContext } from 'react';
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
import { uploadPhoto } from '../../../helpers/globalRequest';
import ImageModal from '../../global/ImageDialog.jsx';

export default function AnswerDialogBody({
  question, photos, setPhotos, setBody, setNickname, setEmail, validation
}) {
  const { product } = useContext(AppContext);

  const [networkError, setNetworkError] = useState(null);

  const addPhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const newPhotos = [...photos];
    uploadPhoto(file)
      .then((imageData) => {
        newPhotos.push(imageData.url);
        setPhotos(newPhotos);
      })
      .catch((err) => {
        setNetworkError(err);
      });
  };

  return (
    <DialogContent dividers>
      <Typography className="subtitle">{`${product.name}: ${question.question_body}`}</Typography>
      <form className="formContainer">
        <TextField
          multiline
          rows={6}
          variant="outlined"
          label="Answer"
          helperText={validation.body}
          error={validation.bodyError}
          fullWidth
          onChange={(e) => setBody(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Nickname"
          placeholder="Example: jack543!"
          helperText={validation.nickname}
          error={validation.nicknameError}
          fullWidth
          onChange={(e) => setNickname(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Example: jack@email.com"
          helperText={validation.email}
          error={validation.emailError}
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
            onChange={addPhoto}
            hidden
          />
        </Button>
      </form>
      <Typography color="error" variant="body1">{networkError !== null ? `Error: ${networkError.message}` : ''}</Typography>
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

AnswerDialogBody.defaultProps = {
  question: {},
  photos: [],
  setPhotos: () => {},
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
