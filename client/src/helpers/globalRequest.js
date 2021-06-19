import axios from 'axios';

export function getProduct(id = 18078) {
  return axios.get(`/product/${id}`).then((response) => response.data);
}

// Validates if a file extension matches common image formats
function validateFile(filename) {
  const allowedExtension = ['jpeg', 'jpg', 'png', 'gif'];
  const fileExtension = filename.split('.').pop().toLowerCase();
  let isValidFile = false;

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < allowedExtension.length; index++) {
    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      break;
    }
  }

  let message = '';
  if (!isValidFile) {
    message = `Allowed Extensions are : *.${allowedExtension.join(', *.')}`;
  }

  return { isValidFile, message };
}

/**
 * Uploads a form data file to imgbb
 * @param  {Object} file object containing file information
 * @return {Promise} Promise that will resolve to an object
 * containing remote image info
 */
export function uploadPhoto(file) {
  const result = validateFile(file.name);

  if (result.isValidFile) {
    const formData = new FormData();
    formData.append('image', file);

    return axios.post('https://api.imgbb.com/1/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        key: '811b6930fa34cc442fd5f319e9d975f6'
      }
    }).then((response) => response.data.data);
  }
  return Promise.reject(new Error(result.message));
}

/**
 * @param  {number} productID
 * @return {Promise} Promise that will resolve to an object
 * containing review meta data
 */
export function getAllRevsMetaData(productID) {
  return axios
    .get('/api/reviews/meta', {
      params: {
        product_id: productID
      }
    })
    .then((response) => response.data);
}
