import Axios from 'axios';

const getProductStyles = (productId, callback) => {
  if (productId > 0) {
    Axios
      .get(`/api/display/products/${productId}/styles`)
      .then((response) => {
        callback(response.data);
        done();
      })
      .catch(() => {
        console.log('Id not found');
        done();
      });
  }
};

describe('Product API Calls', () => {
  test('Gets data from api and returns a object with the data', () => {
    expect(getProductStyles(18078, getProductStyles)).toEqual({});
  });
});
