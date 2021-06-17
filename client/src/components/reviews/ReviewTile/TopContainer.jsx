import React from 'react';
import { Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

// helper functions
import { dateFormatter } from '../helperFunctions.jsx';

const useStyles = makeStyles(() => ({
  parentContainer: {
    // border: "2px solid rebeccaPurple",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  revStarsStyle: {
    // border: "1px solid red",
    padding: '5px'
  },
  revNameStyle: {
    // border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    padding: '5px'
  },
  revDateStyle: {
    // border: "1px solid red",
    padding: '5px'
  }
}));

const TopContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <Grid item className={classes.revStarsStyle}>
        <Rating
          name="reviewStarRating"
          size="small"
          readOnly={true}
          defaultValue={0}
          precision={0.25}
          value={props.rating}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Grid>

      <div className={classes.revNameStyle}>
        <span><b>Username:&nbsp;&nbsp;</b></span>
        {props.revName}
      </div>

      <div className={classes.revDateStyle}>
        {dateFormatter(props.revDate)}
      </div>
    </div>
  );
};

export default TopContainer;
