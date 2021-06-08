import React from 'react';
import ReactDOM from 'react-dom';

import Container from '@material-ui/core/Container';

import Banner from './components/Banner.jsx';
import ProductDisplay from './components/product-display/ProductDisplay.jsx';
import QuestionsAndAnswers from './components/qa/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
// import RelatedProducts from './components/related-products/RelatedProducts.jsx';

function App() {
  return (
    <Container maxWidth="lg">
      <Banner />
      <ProductDisplay />
      <Container maxWidth="md">
        {/* <RelatedProducts /> */}
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </Container>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));