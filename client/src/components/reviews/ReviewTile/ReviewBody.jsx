import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  reviewText: {
    // border: "2px solid black",
    padding: '10px',
    margin: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)'
  }
}));

const ReviewBody = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.reviewText}>
      <span>Response:</span>
      <div>
        {props.revBody}
      </div>
    </Card>
  );
};

export default ReviewBody;
