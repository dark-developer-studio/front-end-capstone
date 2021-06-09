import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Container from '@material-ui/core/Container';

import Banner from './components/Banner.jsx';
import ProductDisplay from './components/product-display/ProductDisplay.jsx';
import QuestionsAndAnswers from './components/qa/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
// import RelatedProducts from './components/related-products/RelatedProducts.jsx';

//import { getProduct } from './helpers/globalRequest';
import { AppContext } from './helpers/context';

import axios from 'axios';
function App() {
  const [product, setProduct] = useState({});

  function getProduct(id = 18078) {
    axios.get(`/product/${id}`)
    .then(productData => productData)
    .then(setProduct)
    .catch((err) => console.log(err));
  }


  useEffect(() => {
    getProduct()
  }, []);


  // useEffect(() => {
  //   getProduct()
  //     .then((productData) => {
  //       setProduct(productData);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <AppContext.Provider value={{ product }}>
      <Container maxWidth="lg">
        <Banner />
        {/* <ProductDisplay /> */}
        <Container maxWidth="md">
          {/* <RelatedProducts /> */}
          {/* <QuestionsAndAnswers /> */}
          <RatingsAndReviews product={product}/>
        </Container>
      </Container>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
