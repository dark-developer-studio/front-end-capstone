import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

const Helpfulness = ({ helpfulness, review_id}) => {
  const [helpfulnessCount, setHelpfulnessCount] = useState(helpfulness);
  const [disableHelp, setDisableHelp] = useState(false);

  const [revId, setRevId] = useState(review_id);

  const updateHelpfulness = (reviewId) => {
    axios.put('/api/reviews/revs/helpful', {},
      {
        params: {
          review_id: reviewId
        }
      }).then((response) => {
      setHelpfulnessCount(helpfulnessCount + 1);
      setDisableHelp(true);
      console.log('helpfulness post successful', response.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    setHelpfulnessCount(helpfulness);
  }, [helpfulness]);

  const handleUpdateHelp = (reviewId) => {
    let helpTotal = helpfulnessCount;
    helpTotal += 1;
    setHelpfulnessCount(helpTotal);
    updateHelpfulness(reviewId);
  };

  console.log('this is review id', review_id);
  return (
    <div
      className="bottomRowReviewTile"
      style={
        { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignConent: 'center' }
      }
    >
      <div
        className="helpful"
        style={
          { display: 'flex', flexDirection: 'row', alignItems: 'center' }
        }
      >
        <span>Helpful?&nbsp;&nbsp;</span>
        <div>
          <Button
            style={{ cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px' }}
            disabled={disableHelp}
            onClick={() => handleUpdateHelp(revId)}
          >
            <span>Yes&nbsp;</span>
          </Button>
        </div>
        <div>
          (
          {helpfulnessCount}
          )
        </div>
      </div>
    </div>
  );
};

export default Helpfulness;
