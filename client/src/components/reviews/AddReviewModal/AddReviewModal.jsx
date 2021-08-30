import React, { useContext, useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container, Button, TextField, Dialog, Typography, IconButton, FormLabel, FormControl
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';

// Icons used for star rating
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { AppContext, ReviewsContext } from '../../../helpers/context';

import RecommendRadios from './RecommendRadios.jsx';
import CharRadios from './CharRadios.jsx';
import ImageModal from '../../global/ImageDialog.jsx';
import { uploadPhoto } from '../../../helpers/globalRequest';

const styles = (theme) => ({
  parentContainer: {
    Maxwidth: '100vw'
  },
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

const useStyles = makeStyles(() => ({
  reviewStarRating: {

    padding: '10px'
  },
  parentDialogBox: {
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const {
    children,
    classes,
    onClose,
    ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function ReviewDialog() {
  const { revsMetaData } = useContext(ReviewsContext);
  const { product } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [recommend, setRecommend] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [validation, setValidation] = useState({
    rating: false,
    summary: '',
    summaryError: false,
    body: '',
    bodyError: false,
    name: 'For privacy reasons, do not use your full name or email address',
    nameError: false,
    email: 'For authentication reasons, you will not be emailed',
    emailError: false
  });
  const [networkError, setNetworkError] = useState(null);

  const postReview = (rev) => axios.post('/api/reviews/revs', {
    rating: rev.rating,
    summary: rev.summary,
    body: rev.body,
    recommend: rev.recommend,
    name: rev.name,
    email: rev.email,
    photos: rev.photos,
    characteristics: rev.characteristics,
    product_id: rev.product_id
  }).then((response) => response.data);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validateBody = () => {
    const validator = {};
    if (body.match(/[^a-zA-Z0-9!?.,():;"\n\-/ ]/) !== null) {
      validator.body = 'Invalid charaters used. Special characters available: (!?.,():;"-/)';
      validator.bodyError = true;
    } else if (body.length < 50) {
      validator.body = 'Needs to be at least 50 characters long';
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

  const validateSummary = () => {
    const validator = {};
    if (summary.match(/[^a-zA-Z0-9!?.,():;"\-/ ]/) !== null) {
      validator.summary = 'Invalid charaters used. Special characters available: (!?.,():;"-/)';
      validator.summaryError = true;
    } else if (summary.length < 3) {
      validator.summary = 'Needs to be at least 3 characters long';
      validator.summaryError = true;
    } else if (summary.length > 60) {
      validator.summary = `Must be less than 60 characters long. Length: ${summary.length}`;
      validator.summaryError = true;
    } else {
      validator.summary = '';
      validator.summaryError = false;
    }
    return validator;
  };

  const validateName = () => {
    const validator = {};
    if (name.match(/[^a-zA-Z0-9!?\-.]/) !== null) {
      validator.name = 'Invalid charaters used. Special characters available: (!?-.)';
      validator.nameError = true;
    } else if (name.length < 3) {
      validator.name = 'Needs to be at least 3 characters long';
      validator.nameError = true;
    } else if (name.length > 60) {
      validator.nickname = `Must be less than 60 characters long. Length: ${name.length}`;
      validator.nameError = true;
    } else {
      validator.name = 'For privacy reasons, do not use your full name or email address';
      validator.nameError = false;
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

  const validateRating = () => {
    const validator = {};
    if (rating < 1 || rating > 5) {
      validator.rating = true;
    } else {
      validator.rating = false;
    }
    return validator;
  };

  const validateReview = () => {
    const bodyValidator = validateBody();
    const nameValidator = validateName();
    const emailValidator = validateEmail();
    const summaryValidator = validateSummary();
    const ratingValidator = validateRating();
    const newValidator = {
      ...ratingValidator,
      ...summaryValidator,
      ...bodyValidator,
      ...nameValidator,
      ...emailValidator
    };

    if (
      !newValidator.bodyError
      && !newValidator.nameError
      && !newValidator.emailError
      && !newValidator.summaryError
      && !newValidator.ratingError
    ) {
      const revObj = {
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos,
        characteristics,
        product_id: product.id
      };
      postReview(revObj)
        .then(() => handleClose())
        .then(console.log('rev submit works'))
        .catch();
    } else {
      setValidation(newValidator);
    }
  };

  const addPhoto = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
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
  const classes = useStyles();

  return (
    <ReviewsContext.Provider value={{ revsMetaData, setRecommend, setCharacteristics, characteristics }}>
      <div className={classes.parentContainer}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add Review
        </Button>
        <Dialog
          className={classes.parentDialogBox}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth="xl"
        >
          <DialogTitle onClose={handleClose}>Write Your Review</DialogTitle>
          <DialogContent dividers>
            <Typography>
              About the &nbsp;
              {product.name}
            </Typography>

            <form className="formContainer">

              <FormControl component="fieldset" error={validation.rating}>
                <FormLabel component="legend">Rate this product:</FormLabel>
                <Rating
                  name="reviewStarRating"
                  className={classes.reviewStarRating}
                  readOnly={false}
                  size="large"
                  defaultValue={0}
                  onChange={(event) => setRating(Number(event.target.value))}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </FormControl>

              <Typography gutterBottom>
                Do you recommend this product?
              </Typography>
              <RecommendRadios setRecommend={setRecommend} />

              <Typography gutterBottom>
                Rate Characteristics
              </Typography>
              <CharRadios />

              <Typography className="inputText">Add a summary:</Typography>
              <TextField
                multiline
                rows={2}
                variant="outlined"
                placeholder="Example: Best purchase ever!"
                className="reviewSummary"
                helperText={validation.summary}
                error={validation.summaryError}
                onChange={(event) => setSummary(event.target.value)}
              />

              <Typography className="inputBody" style={{ whiteSpace: 'pre-line' }}>Add a review:</Typography>
              <TextField
                multiline
                rows={6}
                variant="outlined"
                placeholder="Why did you like the product or not?"
                className="reviewBody"
                helperText={validation.body}
                error={validation.bodyError}
                onChange={(event) => setBody(event.target.value)}
              />

              <Typography className="inputText">Upload your photos:</Typography>

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
              <Typography color="error" variant="body1">
                {networkError !== null ? `Error: ${networkError.message}` : ''}
              </Typography>

              <Typography className="inputText">What is your nickname:</Typography>
              <TextField
                variant="outlined"
                label="Nickname"
                placeholder="Example: jackson11!"
                className="nickname"
                error={validation.nameError}
                onChange={(event) => setName(event.target.value)}
              />
              <Typography className="inputText">For privacy reasons, do not use your full name or email address</Typography>

              <Typography className="inputText">Your email:</Typography>
              <TextField
                variant="outlined"
                label="Email"
                placeholder="Example: jackson11@email.com"
                type="email"
                className="email"
                helperText={validation.email}
                error={validation.emailError}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Typography className="inputText">For authentication reasons, you will not be emailed</Typography>
            </form>

          </DialogContent>

          <DialogActions>
            <Button
              autoFocus
              onClick={validateReview}
              color="primary"
            >
              Submit Review
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    </ReviewsContext.Provider>
  );
}
