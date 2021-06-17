import React, { useContext, useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Input } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

// Used for star rating
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { AppContext, ReviewsContext } from '../../../helpers/context';

import RecommendRadios from './RecommendRadios.jsx';
import CharRadios from './CharRadios.jsx';

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

const useStyles = makeStyles((theme) => ({
  reviewStarRating: {
    // border: "3px solid green",
    padding: '10px'
  },
  parentDialogBox: {
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;

  return (
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
  const { product } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(1);
  const [summary, setSummary] = useState('new');
  const [body, setBody] = useState('new');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('new');
  const [email, setEmail] = useState('new@gmail.com');
  const [photos, setPhotos] = useState(['url']);
  const [characteristics, setCharacteristics] = useState({ '60627': 3 });
  // const [characteristics, setCharacteristics] = useState({});

  console.log('this is rating ', rating);
  console.log('this is recommend ', recommend);
  console.log('this is body', body);
  console.log('this is summary', summary);
  console.log('this is email', email);
  console.log('this is name', name);
  console.log('prod id', product.id);

  const postReview = (rev) => {
    axios.post('/api/reviews/revs', {
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
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
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
    postReview(revObj);
    handleClose();
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        className={classes.parentDialogBox}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
      >
        <DialogTitle onClose={handleClose}>Write Your Review</DialogTitle>
        <DialogContent dividers>
          <Typography>
            About the &nbsp;
            {product.name}
          </Typography>

          <form className="formContainer">

            <Typography gutterBottom>
              Rate this product:
            </Typography>
            <Rating
              name="reviewStarRating"
              className={classes.reviewStarRating}
              readOnly={false}
              size="large"
              defaultValue={0}
              onChange={(event) => setRating(Number(event.target.value))}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />

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
              variant="outlined"
              placeholder="Example: Best purchase ever!"
              className="reviewSummary"
              onChange={(event) => setSummary(event.target.value)}
            />

            <Typography className="inputText">Add a review:</Typography>
            <TextField
              multiline
              rows={6}
              variant="outlined"
              placeholder="Why did you like the product or not?"
              className="reviewBody"
              onChange={(event) => setBody(event.target.value)}
            />

            <Typography className="inputText">Upload your photos:</Typography>
            <Input type="file" className="upload" />

            <Typography className="inputText">What is your nickname:</Typography>
            <TextField
              variant="outlined"
              label="Nickname"
              placeholder="Example: jackson11!"
              className="nickname"
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
              onChange={(event) => setEmail(event.target.value)}
            />
            <Typography className="inputText">For authentication reasons, you will not be emailed</Typography>
          </form>

        </DialogContent>

        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary"> */}
          <Button autoFocus onClick={handleSubmit} color="primary">
            Submit Review
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
