import React from 'react';
import {
  Radio, Typography, RadioGroup,
  FormControlLabel, FormControl
} from '@material-ui/core';

export function getAllCharVals(prodID) {
  const resultsArr = [];
  if (prodID === 18078) {
    resultsArr.push(['60618', 'Fit', [
      [1, 'Runs Tight'],
      [2, 'Runs slightly tight'],
      [3, 'Perfect'],
      [4, 'Runs slightly Long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60619', 'Length', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60620', 'Comfort', [
      [1, 'Uncomfortable'],
      [2, 'Slightly uncomfortable'],
      [3, 'Ok'],
      [4, 'Comfortable'],
      [5, 'Perfect']
    ]]);
    resultsArr.push(['60621', 'Quality', [
      [1, 'Poor'],
      [2, 'Below average'],
      [3, 'What I expected'],
      [4, 'Pretty great'],
      [5, 'Perfect']
    ]]);
  } else if (prodID === 18079) {
    resultsArr.push(['60622', 'Quality', [
      [1, 'Poor'],
      [2, 'Below average'],
      [3, 'What I expected'],
      [4, 'Pretty great'],
      [5, 'Perfect']
    ]]);
  } else if (prodID === 18080) {
    resultsArr.push(['60623', 'Fit', [
      [1, 'Runs Tight'],
      [2, 'Runs slightly tight'],
      [3, 'Perfect'],
      [4, 'Runs slightly Long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60624', 'Length', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60625', 'Comfort', [
      [1, 'Uncomfortable'],
      [2, 'Slightly uncomfortable'],
      [3, 'Ok'],
      [4, 'Comfortable'],
      [5, 'Perfect']
    ]]);
    resultsArr.push(['60626', 'Quality', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
  } else if (prodID === 18081) {
    resultsArr.push(['60627', 'Fit', [
      [1, 'Runs Tight'],
      [2, 'Runs slightly tight'],
      [3, 'Perfect'],
      [4, 'Runs slightly Long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60628', 'Length', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
    resultsArr.push(['60629', 'Comfort', [
      [1, 'Uncomfortable'],
      [2, 'Slightly uncomfortable'],
      [3, 'Ok'],
      [4, 'Comfortable'],
      [5, 'Perfect']
    ]]);
    resultsArr.push(['60630', 'Quality', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
  } else if (prodID === 18082) {
    resultsArr.push(['60631', 'Size', [
      [1, 'Too small'],
      [2, '1/2 a size too small'],
      [3, 'Perfect'],
      [4, '1/2 a size too big'],
      [5, 'Too Big']
    ]]);
    resultsArr.push(['60632', 'Width', [
      [1, 'Too Narrow'],
      [2, 'Slightly narrow'],
      [3, 'Perfect'],
      [4, 'Slightly wide'],
      [5, 'Too Wide']
    ]]);
    resultsArr.push(['60633', 'Comfort', [
      [1, 'Uncomfortable'],
      [2, 'Slightly uncomfortable'],
      [3, 'Ok'],
      [4, 'Comfortable'],
      [5, 'Perfect']
    ]]);
    resultsArr.push(['60634', 'Quality', [
      [1, 'Runs Short'],
      [2, 'Runs slightly short'],
      [3, 'Perfect'],
      [4, 'Runs slightly long'],
      [5, 'Runs Long']
    ]]);
  }
  return resultsArr;
}

export function buildCharRadios(charArr, setCharacteristics, characteristics) {
  const handleCharacteristics = (event) => {
    const resultObj = characteristics;
    if (event.target.value.length > 0) {
      const str = event.target.value;
      const key = str.slice(2, str.length);
      const val = Number(str.slice(0, 1));
      resultObj[key] = val;
    }
    setCharacteristics(resultObj);
  };

  return (
    <div>
      {charArr.map((char) => (
        <div key={char[0]}>
          <FormControl component="fieldset">
            <Typography className="inputText">{char[1]}</Typography>
            <RadioGroup
              defaultValue="none"
              aria-label="characteristics"
              name="customized-radios"
            >
              {char[2].map((val) => (
                <FormControlLabel
                  key={val[1]}
                  value={`${val[0]} ${char[0]}`}
                  control={<Radio required />}
                  label={`${val[0]} : ${val[1]}`}
                  onChange={handleCharacteristics}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
    </div>
  );
}
