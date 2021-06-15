import React, { useContext, useState, useEffect } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles(() => ({
  productRecommendText: {
    fontSize: 'small',
    fontStyle: 'italic',
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}));

const ProductRecommend = (props) => {
  const classes = useStyles();

  const { reviewResults } = useContext(ReviewsContext);
  const [recommendBody, setRecommendBody] = useState(
    {
      recIcon: '',
      recText: ''
    }
  );

  const getRecommend = () => {
    if (props.recommend === true) {
      setRecommendBody({
        recIcon: <CheckIcon />,
        recText: 'I recommend this Product!'
      });
    }
  };

  useEffect(() => {
    getRecommend();
  }, [reviewResults]);

  return (
    <div className={classes.productRecommendText}>
      {recommendBody.recIcon}
      {recommendBody.recText}
    </div>
  );
};

export default ProductRecommend;
