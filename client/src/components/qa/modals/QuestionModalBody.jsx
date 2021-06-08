import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

function getModalStyle() {
  const top = 25;
  // const left = 50;

  return {
    top: `${top}%`,
    margin: '0px 100px'
    // left: `${left}%`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function AnswerModalBody() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Container style={modalStyle} className={classes.paper}>
      <Typography className="title">Ask Your Question</Typography>
      <Typography className="subtitle">About the [Product Name]</Typography>
      <form className="formContainer">
        <Typography className="inputText">Question:</Typography>
        <TextField multiline rows={6} variant="outlined" className="question" />

        <Typography className="inputText">Nickname:</Typography>
        <TextField variant="outlined" placeholder="Example: jackson11!" className="nickname" />
        <Typography className="inputText" variant="body2">For privacy reasons, do not use your full name or email address</Typography>

        <Typography className="inputText">Email:</Typography>
        <TextField variant="outlined" placeholder="Example: jackson@email.com" type="email" className="email" />
        <Typography className="inputText" variant="body2">For authentication reasons, you will not be emailed</Typography>

        <Button type="button">Submit</Button>
      </form>
    </Container>
  );
}
