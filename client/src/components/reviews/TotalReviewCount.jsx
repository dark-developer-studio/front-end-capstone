// import React from 'react';
import React, { useContext, useState, useEffect } from 'react';
import { ReviewsContext } from '../../helpers/context';

//import helper functions
import { getTotalReviews } from './helperFunctions.jsx';

const TotalReviewCount = () => {
  const { reviews } = useContext(ReviewsContext);
  const [totalRevsCount, setTotalRevsCount] = useState(0);

useEffect(() => {
 let total = getTotalReviews(reviews);
  setTotalRevsCount(total)
}, [reviews]);

  return (
    <div>
      {totalRevsCount}
    </div>
  );
}

export default TotalReviewCount;