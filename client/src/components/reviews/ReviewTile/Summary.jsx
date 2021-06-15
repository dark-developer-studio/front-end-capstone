import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  reviewSummary: {
    fontSize: 'large',
    fontWeight: 'bold',
    margin: '5px'
  }
}));

const Summary = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.reviewSummary}>
      {props.summary}
    </div>
  );
};

export default Summary;
