import axios from 'axios';

export function getProduct(id = 18078) {
  return axios.get(`/product/${id}`);
}

export function anotherRequest() {}
