import axios from 'axios';

export function getProduct(id = 18078) {
  return axios.get(`/product/${id}`).then((response) => response.data);
}

export function anotherRequest() {}
