import Axios from 'axios';
import React, { useContext } from 'react';
import { AppContext } from '../../../helpers/context';

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

describe('Appcontext to return product details', () => {
  test('Product to have correct information', () => {
    const dummyComponenet = () => {
      const { product } = useContext(AppContext);
      expect(product.campus).stringMatching('hr-bld');
      expect(product.features.length).toBeGreaterThan(0);
      done();
    };
  });
});

describe('Product API Calls', () => {
  test('Gets data from api and returns a object with the data', () => {
    function getProductStyles(productId) {
      if (productId > 0) {
        Axios
          .get(`/api/display/products/${productId}/styles`)
          .then((response) => {
            expect(response).toEqual({ product_id: productId, results: Array(6) });
            done();
          })
          .catch((err) => {
            return err;
            done();
          });
      }
    }
  });

  test('Posts to /cart of the api', () => {
    const addToBag = (productId) => {
      if (productId > 0) {
        Axios
          .post('/api/display/cart',
            {
              sku_id: productId
            })
          .then(() => {
            expect(response).toEqual('CREATED');
            done();
          })
          .catch((err) => {
            return err;
            done();
          });
      }
    };
  });
});
