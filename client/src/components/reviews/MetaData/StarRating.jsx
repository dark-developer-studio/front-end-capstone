import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { ReviewsContext } from '../../../helpers/context';

// helper functions
import { calcStarRating } from '../helperFunctions.jsx';

const useStyles = makeStyles(() => ({
  reviewStarRating: {
    padding: '10px'
  }
}));

const StarRating = (props) => {
  // const { revsMetaData } = useContext(ReviewsContext);
  const [revStarRating, setRevStarRating] = useState(0);

  useEffect(() => {
    setRevStarRating(calcStarRating(props.avgRating));
  }, [props.avgRating]);

  const classes = useStyles();

  return (
    <Rating
      name="reviewStarRating"
      className={classes.reviewStarRating}
      readOnly={true}
      size="large"
      defaultValue={0}
      precision={0.1}
      value={revStarRating}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
  );
};
export default StarRating;
