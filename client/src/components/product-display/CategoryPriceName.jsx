import React, { useState, useEffect, useContext } from 'react';
import { Typography, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { AppContext } from '../../helpers/context';
import useStyles from './MaterialUi.jsx';

const CategoryPriceName = ({ stylePrice }) => {
  const { product } = useContext(AppContext);
  const [dataIn, setDataIn] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    if (product.id !== -1) {
      setDataIn(true);
    }
  }, [product]);

  return (
    <div>
      {dataIn ? (
        <>
          <Typography variant="h6" color="textSecondary" component="p" align="left">
            {product.category}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="p" align="left">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="left">
            {stylePrice.salePrice ? (
              <>
                <span className={classes.orignalPrice}>
                  $
                  {stylePrice.orignalPrice}
                </span>
                <br />
                <span className={classes.discountPrice}>
                  $
                  {stylePrice.salePrice}
                </span>
              </>
            ) : (
              <span>
                $
                {stylePrice.orignalPrice}
              </span>
            )}
          </Typography>
        </>
      ) : (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

CategoryPriceName.propTypes = {
  stylePrice: PropTypes.shape({
    salePrice: PropTypes.string,
    orignalPrice: PropTypes.string
  })
};
CategoryPriceName.defaultProps = {
  stylePrice: {}
};

export default CategoryPriceName;
