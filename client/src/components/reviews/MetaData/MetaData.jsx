import React, { useContext } from 'react';

import { ReviewsContext } from '../../../helpers/context';

// Import components
import ReviewPercentageAndStars from './ReviewPercentageAndStars.jsx';
import StarBarChart from './StarBarChart.jsx';
import ProductReviewChart from './ProductReviewChart.jsx';
import RecommendPercentage from './RecommendPercentage.jsx';

const MetaData = () => {
  const { revsMetaData } = useContext(ReviewsContext);

  return (
    <ReviewsContext.Provider value={{ revsMetaData }}>
      <div>
        <ReviewPercentageAndStars />
        <RecommendPercentage />
        <StarBarChart />
        <ProductReviewChart />
      </div>
    </ReviewsContext.Provider>
  );
};

export default MetaData;
