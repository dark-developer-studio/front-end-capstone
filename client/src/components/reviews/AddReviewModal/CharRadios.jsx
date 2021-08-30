import React, { useContext } from 'react';

// helper function
import { getAllCharVals, buildCharRadios } from './modalHelperFunctions.jsx';

import { AppContext, ReviewsContext } from '../../../helpers/context';

export default function CharRadios() {
  const { product } = useContext(AppContext);
  const { setCharacteristics, characteristics, revsMetaData } = useContext(ReviewsContext);
  const charArr = getAllCharVals(revsMetaData);
  return (
    <div>
      {buildCharRadios(charArr, setCharacteristics, characteristics)}
    </div>
  );
}
