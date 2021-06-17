import Axios from 'axios';

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const { GITHUB_API_KEY } = process.env;

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
});
