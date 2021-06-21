// import React from 'react';
import React, { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../helpers/context';

// import helper functions
import { getTotalReviews } from './helperFunctions.jsx';

const TotalReviewCount = ({ totalRevsCount, setTotalRevsCount }) => {
  const { reviewResults } = useContext(ReviewsContext);

  useEffect(() => {
    const total = getTotalReviews(reviewResults);
    setTotalRevsCount(total);
  }, [reviewResults]);

  return (
    <div>
      {totalRevsCount}
    </div>
  );
};

export default TotalReviewCount;
