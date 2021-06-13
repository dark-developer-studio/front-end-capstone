export function getTotalReviews(revData) {
  let count = 0;
  if (revData) {
    if (revData.results) {
      let reviewArr = revData.results;

      if (reviewArr.length !== 0 ) {
        reviewArr.forEach (item => {
          count++;
        })
        //Next increment page;
      }
      return count;
    }
  }
}

export function calcAvgRating(ratingObj) {
  let starRatingTotal = 0;
  let ratingEntriesTotal = 0;
  let starValue = 1;

  while (starValue < 6) {
    let stringStarValue = starValue.toString();
    if (ratingObj[stringStarValue]) {
      ratingEntriesTotal += Number(ratingObj[stringStarValue]);
      starRatingTotal += (Number(ratingObj[stringStarValue]) * starValue);
    }
    starValue += 1;
  }
  let avg = (starRatingTotal / ratingEntriesTotal);
  return avg;
}

export function calcStarRating(avgRate) {
  // console.log('avg rate before calc', (avgRate));
  let wholeNum = Math.floor(avgRate);
  let decimal = (avgRate - Math.floor(avgRate)).toFixed(3);

  if (decimal < .125) {
    decimal = .00;
  } else if (decimal >= .125 && decimal < .375) {
    //Because .25 on the Rating star icon does not look correct.
    decimal = .40
  } else if (decimal >= .375 && decimal < .625) {
    decimal = .50
  } else if (decimal >= .625 && decimal < .875) {
    //Because .75 on the Rating star icon does not look correct.
    decimal = .60
  } else {
    decimal = .00;
    wholeNum += 1;
  }
  // console.log('avg rate after calc', (wholeNum + decimal));
  return wholeNum + decimal;
}

export function getCharLowHighVals(char) {
  const marksArr = [
    {
      value: 1,
      label: '',
    },
    {
      value: 5,
      label: '',
    },
    {
      value: 2,
      label: '',
    },
    {
      value: 3,
      label: '',
    },
    {
      value: 4,
      label: '',
    },
  ]

  const charLowHighValsObj = {
    Size: {
      low: 'Too small',
      high: 'Too Big'
    },
    Width: {
      low: 'Too Narrow',
      high: 'Too Wide'
    },
    Comfort: {
      low: 'Uncomfortable',
      high: 'Perfect'
    },
    Quality: {
      low: 'Poor',
      high: 'Perfect'
    },
    Length: {
      low: 'Runs Short',
      high: 'Runs Long'
    },
    Fit: {
      low: 'Runs Tight',
      high: 'Runs Long'
    }
  }
  marksArr[0].label = charLowHighValsObj[char].low;
  marksArr[1].label = charLowHighValsObj[char].high;
  return marksArr;
};