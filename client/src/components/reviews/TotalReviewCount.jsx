// import React from 'react';
import React, { useContext, useState, useEffect } from 'react';
import { ReviewsContext } from '../../helpers/context';

// import helper functions
import { getTotalReviews } from './helperFunctions.jsx';

const TotalReviewCount = () => {
  const { reviewResults } = useContext(ReviewsContext);
  const [totalRevsCount, setTotalRevsCount] = useState(0);

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
