import React, { useState, useEffect, useContext } from 'react';
import {
  Typography, Card, CardContent, CircularProgress
} from '@material-ui/core';
import useStyles from './MaterialUi.jsx';
import { AppContext } from '../../helpers/context';

const ProductDescription = () => {
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
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" align="left">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div className={classes.loadingSpinner}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
