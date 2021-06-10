import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Radio, TextField, Input } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import RecommendRadios from './RecommendRadios.jsx';
import CharRadios from './CharRadios.jsx';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  reviewStarRating: {
    //border: "3px solid green",
    padding: "10px"
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ReviewDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Write Your Review
        </DialogTitle>

        <DialogContent dividers>

          <Rating name="reviewStarRating" className={classes.reviewStarRating} size="large" defaultValue={0} />

          <Typography gutterBottom>
           Do you recommend this product?
          </Typography>
          <RecommendRadios />

          <Typography gutterBottom>
           Rate Characteristics
          </Typography>
          <CharRadios />

          <Typography className="inputText">Add a summary:</Typography>
        <TextField variant="outlined" placeholder="Example: Best purchase ever!" className="reviewSummary" />

        <Typography className="inputText">Add a review:</Typography>
        <TextField variant="outlined" placeholder="Why did you like the product or not?" className="reviewBody" />

        <Typography className="inputText">Upload your photos:</Typography>
        <Input type="file" className="upload" />

          <Typography className="inputText">What is your nickname:</Typography>
        <TextField variant="outlined" placeholder="Example: jackson11!" className="nickname" />

          <Typography className="inputText">Your email:</Typography>
        <TextField variant="outlined" placeholder="Example: jackson11@email.com" type="email" className="email" />

        </DialogContent>



        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

