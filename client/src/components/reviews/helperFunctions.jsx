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