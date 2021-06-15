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

  const classes = useStyles();

  // Used for getting all style skus' for dynamic rendering of sizes and quantities
  const getSkus = (styleId) => {
    if (productStyles.results.length > 0) {
      const sizeAndQuantity = [];
      productStyles.results.forEach((style) => {
        if (styleId === style.style_id) {
          const styleSkus = style.skus;
          Object.values(styleSkus).forEach((skusObj) => {
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
          style.photos.forEach((photos) => {
            allStylePhotos.push(photos.url);
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
          setProductStyles(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const { product } = useContext(AppContext);

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

  console.log(productStyles.results)

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
                *Stars*
                <u>View All Reviews</u>
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
