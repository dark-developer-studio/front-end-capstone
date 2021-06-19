/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useContext } from 'react';
import {
  Grid, Typography, Card, CardContent
} from '@material-ui/core';
import Axios from 'axios';
import { AppContext } from '../../helpers/context';
import CategoryPriceName from './CategoryPriceName.jsx';
import useStyles from './MaterialUi.jsx';
import StyleThumbs from './StyleThumbs.jsx';
import Selectors from './Selectors.jsx';
import ProductDescription from './ProductDescription.jsx';
import ImageGallery from './ImageGallery.jsx';
import StarRating from '../reviews/MetaData/StarRating.jsx';
import { calcAvgRating } from '../reviews/helperFunctions.jsx';

const ProductDisplay = () => {
  const [productStyles, setProductStyles] = useState({
    product_id: '',
    results: []
  });
  const [photosArr, setPhotos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [stylePrice, setStylePrice] = useState('');
  const [styleName, setStyleName] = useState('');
  const [skus, setSkus] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  const classes = useStyles();
  const { product, revsMetaData } = useContext(AppContext);

  // Used for Stars
  const getAvgRating = () => {
    if (Object.keys(revsMetaData).length !== 0) {
      if (Object.keys(revsMetaData.ratings).length !== 0) {
        const ratingsObject = revsMetaData.ratings;
        setAvgRating(calcAvgRating(ratingsObject));
      }
    }
  };

  // Used for getting all style skus' for dynamic rendering of sizes and quantities
  const getSkus = (styleId) => {
    if (productStyles.results.length > 0) {
      const sizeAndQuantity = [];
      let ids = [];
      productStyles.results.forEach((style) => {
        if (styleId === style.style_id) {
          const styleSkus = style.skus;
          if (ids.length === 0) {
            ids = Object.keys(styleSkus);
          }
          Object.values(styleSkus).forEach((skusObj, i) => {
            skusObj.id = ids[i];
            sizeAndQuantity.push(skusObj);
          });
        }
      });
      setSkus(sizeAndQuantity);
    }
  };

  // Used for getting the price and discount price as well
  // as the name of products to for dynamic rendering
  const getStyleDetails = (styleId) => {
    if (productStyles.results.length > 0) {
      const allStylePhotos = [];
      let price = '';
      let name = '';
      let discountPrice = '';
      productStyles.results.forEach((style) => {
        if (style.style_id === styleId) {
          if (price === '') {
            price = style.original_price;
          }
          if (discountPrice === '') {
            discountPrice = style.sale_price;
          }
          if (name === '') {
            name = style.name;
          }
          style.photos.forEach((photos, i) => {
            allStylePhotos.push({ photoNum: i, url: photos.url });
          });
        }
      });
      setStyleName(name);
      setStylePrice({ orignalPrice: price, salePrice: discountPrice });
      setPhotos(allStylePhotos);
    }
  };

  const getProductStyles = (productId) => {
    if (productId > 0) {
      Axios
        .get(`/api/display/products/${productId}/styles`)
        .then((response) => {
          console.log(response.data)
          setProductStyles(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addToBag = (productId) => {
    if (productId > 0) {
      Axios
        .post('/api/display/cart',
          {
            sku_id: productId
          })
        .then(() => {
          console.log('CREATED');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Gets data for individual products
  useEffect(() => {
    getProductStyles(product.id);
  }, [product]);

  // For Carousel to render photos on load
  useEffect(() => {
    if (productStyles.results.length > 0) {
      getStyleDetails(productStyles.results[0].style_id);
      getSkus(productStyles.results[0].style_id);
    }
  }, [productStyles]);

  // For stars
  useEffect(() => {
    getAvgRating();
  }, [revsMetaData]);

  return (
    <SkusContext.Provider value={{
      skusState: skus,
      photos: photosArr
    }}
    >
      <Grid className={classes.grid} item xs={12} container>

        <Grid className={classes.grid} item xs={6} container>

          <ImageGallery photosArr={photosArr} />

        </Grid>

        <Grid className={classes.grid} item xs={6} container direction="column">
          <Card>
            <CardContent>

              <Typography variant="body2" color="textSecondary" component="p" align="left">
                <StarRating avgRating={avgRating} />
                <a href="#starsAndPercent" className={classes.linkToReviews}>View All Reviews</a>
              </Typography>

              <CategoryPriceName stylePrice={stylePrice} />

              <Typography variant="body2" color="textSecondary" component="p" align="left">
                <b>Style &gt; </b>
                {styleName}
              </Typography>
              <StyleThumbs
                productDetails={productStyles.results}
                thumbnails={thumbnails}
                setThumbnails={setThumbnails}
                getStyleDetails={getStyleDetails}
                getSkus={getSkus}
              />

              <Selectors
                productDetails={productStyles.results}
                thumbnails={thumbnails}
                skus={skus}
                addToBag={addToBag}
              />

            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} container>
          <ProductDescription />
        </Grid>
      </Grid>
    </SkusContext.Provider>
  );
};

export const SkusContext = React.createContext();
export default ProductDisplay;
