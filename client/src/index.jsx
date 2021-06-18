import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

import Banner from './components/Banner.jsx';
import ProductDisplay from './components/product-display/ProductDisplay.jsx';
import QuestionsAndAnswers from './components/qa/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
// import RelatedProducts from './components/related-products/RelatedProducts.jsx';

import { getProduct, getAllRevsMetaData } from './helpers/globalRequest';
import { AppContext } from './helpers/context';

function App() {
  const [product, setProduct] = useState({
    id: -1,
    campus: '',
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    features: []
  });

  const [revsMetaData, setRevsMetaData] = useState({});

  useEffect(() => {
    getProduct()
      .then((productData) => {
        setProduct(productData);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (product.id > -1) {
      getAllRevsMetaData(product.id)
        .then((reviewData) => {
          setRevsMetaData(reviewData);
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  return (
    <AppContext.Provider value={{ product, revsMetaData }}>
      <Container maxWidth="lg">
        <Banner />
        <ProductDisplay />
        <Container maxWidth="md">
          {/* <RelatedProducts /> */}
          <QuestionsAndAnswers />
          <RatingsAndReviews />
        </Container>
      </Container>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
