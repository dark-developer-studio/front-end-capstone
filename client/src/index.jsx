import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Banner from './components/Banner.jsx';
import ProductDisplay from './components/product-display/ProductDisplay.jsx';
import QuestionsAndAnswers from './components/qa/QuestionsAndAnswers.jsx';
import RelatedProducts from './components/related-products/RelatedProducts.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';

const App = () => {
  function getSomething() { }

  return (
    <div>
      <Banner />
      <ProductDisplay />
      <RelatedProducts />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));