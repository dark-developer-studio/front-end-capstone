import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { AppContext } from '../../helpers/context';

const CategoryPriceName = (props) => {
  const { product } = useContext(AppContext);

  return (
    <>
      <Typography variant="h6" color="textSecondary" component="p" align="left">
        {product.category}
      </Typography>
      <Typography variant="h4" color="textSecondary" component="p" align="left">
        {product.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p" align="left">
        {product.default_price}
      </Typography>
    </>
  )
};

export default CategoryPriceName;
