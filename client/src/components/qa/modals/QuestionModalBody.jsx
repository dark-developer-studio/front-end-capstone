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
        <TextField
          multiline
          rows={6}
          label="Question"
          variant="outlined"
          className="question"
        />

        <TextField
          variant="outlined"
          label="Nickname"
          placeholder="Example: jackson11!"
          helperText="For privacy reasons, do not use your full name or email address"
          className="nickname"
        />

        <TextField
          variant="outlined"
          label="Email"
          placeholder="Example: jackson@email.com"
          helperText="For authentication reasons, you will not be emailed"
          type="email"
          className="email"
        />

        <Button type="button">Submit</Button>
      </form>
    </Container>
  );
}
