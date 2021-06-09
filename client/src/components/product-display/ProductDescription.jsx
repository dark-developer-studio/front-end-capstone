import React, { useState, useContext } from 'react';
import {
  Typography, Card, CardContent, CardHeader, CardMedia
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import { AppContext } from '../../helpers/context';

const ProductDescription = (props) => {
  const { product } = useContext(AppContext);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="left">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDescription;
