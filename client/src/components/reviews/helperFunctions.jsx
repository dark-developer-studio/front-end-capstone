export function getTotalReviews(revData) {
  let count = 0;
  if (revData.length !== 0) {
    revData.forEach(() => {
      count += 1;
    });
  }
  return count;
}

export function calcAvgRating(ratingObj) {
  let starRatingTotal = 0;
  let ratingEntriesTotal = 0;
  let starValue = 1;

  while (starValue < 6) {
    const stringStarValue = starValue.toString();
    if (ratingObj[stringStarValue]) {
      ratingEntriesTotal += Number(ratingObj[stringStarValue]);
      starRatingTotal += (Number(ratingObj[stringStarValue]) * starValue);
    }
    starValue += 1;
  }
  const avg = (starRatingTotal / ratingEntriesTotal);
  return avg;
}

export function calcStarRating(avgRate) {
  let wholeNum = Math.floor(avgRate);
  let decimal = (avgRate - Math.floor(avgRate)).toFixed(3);

  if (decimal < 0.125) {
    decimal = 0.00;
  } else if (decimal >= 0.125 && decimal < 0.375) {
    // Because .25 on the Rating star icon does not look correct.
    decimal = 0.4066;
  } else if (decimal >= 0.375 && decimal < 0.625) {
    decimal = 0.50;
  } else if (decimal >= 0.625 && decimal < 0.875) {
    // Because .75 on the Rating star icon does not look correct.
    decimal = 0.60;
  } else {
    decimal = 0.00;
    wholeNum += 1;
  }
  return wholeNum + decimal;
}

export function getCharLowHighVals(char) {
  const marksArr = [
    {
      value: 1,
      label: ''
    },
    {
      value: 5,
      label: ''
    },
    {
      value: 2,
      label: ''
    },
    {
      value: 3,
      label: ''
    },
    {
      value: 4,
      label: ''
    }
  ];

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
  };

  marksArr[0].label = charLowHighValsObj[char].low;
  marksArr[1].label = charLowHighValsObj[char].high;
  return marksArr;
}

export function dateFormatter(timeStamp) {
  const date = new Date(timeStamp.toString());
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthsArr[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
}

export function convertToPercentages(starValsArr) {
  const resultArr = [];
  let total = 0;
  // This for loop adds all values in array in order to use
  // resulting total as denominator for calculating percentages.
  for (let i = 0; i < starValsArr.length; i += 1) {
    total += starValsArr[i];
  }

  for (let i = 0; i < starValsArr.length; i += 1) {
    if (starValsArr[i] === 0) {
      resultArr.push(starValsArr[i]);
    } else {
      resultArr.push(((starValsArr[i] / total) * 100).toFixed(2));
    }
  }
  return resultArr;
}
