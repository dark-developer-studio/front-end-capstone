import React from 'react';
import { Typography } from '@material-ui/core';

const CategoryPriceName = (props) => (
  <>
    <Typography variant="h6" color="textSecondary" component="p" align="left">
      {props.product.category}
    </Typography>
    <Typography variant="h4" color="textSecondary" component="p" align="left">
      {props.product.name}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p" align="left">
      {props.product.default_price}
    </Typography>
  </>
);

export default CategoryPriceName;
