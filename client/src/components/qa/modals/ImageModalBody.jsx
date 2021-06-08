import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

function getModalStyle() {
  const top = 5;
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
    padding: theme.spacing(2, 4, 3),
    width: 600
  }
}));

export default function AnswerModalBody() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Container style={modalStyle} className={classes.paper}>
      <img src="https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg" alt="thumbnail" height="600" style={{ height: 'auto', maxWidth: '100%', maxHeight: Math.floor(window.innerHeight * 0.80) }} />
    </Container>
  );
}
