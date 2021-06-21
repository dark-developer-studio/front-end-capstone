import React, { useState } from 'react';
import {
  Radio, RadioGroup,
  FormControlLabel, FormControl, FormLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  radioTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black'
  },
  radioGroupStyle: {
    display: 'flex',
    flexDirection: 'row',
    justify: 'center',
    alignContent: 'center',
    padding: '2px',
    margin: '10px'
  },
  radioSubGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justify: 'center'
  },
  radioText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px'
  }
});

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
  const [radioError, setRadioError] = useState(false);
  const [count, setCount] = useState(0);
  const handleCharacteristics = (event) => {
    const resultObj = characteristics;
    if (event.target.value.length > 0) {
      const str = event.target.value;
      const key = str.slice(2, str.length);
      const val = Number(str.slice(0, 1));
      resultObj[key] = val;
    }
    setCharacteristics(resultObj);
    if (count < 4) {
      setRadioError(true);
    } else {
      setRadioError(false);
    }
  };

  const classes = useStyles();

  const handleCount = () => {
    let total = count;
    total += 1;
    setCount(total);
  };

  return (
    <div>
      {charArr.map((char) => (
        <div key={char[0]}>
          <FormControl component="fieldset" error={radioError} onChange={handleCount}>
            <FormLabel component="legend" className={classes.radioTitle}>{char[1]}</FormLabel>
            <RadioGroup
              defaultValue="none"
              aria-label="characteristics"
              name="customized-radios"
              className={classes.radioGroupStyle}
            >
              {char[2].map((val) => (
                <div
                  className={classes.radioSubGroupStyle}
                  key={val[1]}
                >
                  <div className={classes.radioText}>{val[0]}</div>
                  <div>
                    <FormControlLabel
                      value={`${val[0]} ${char[0]}`}
                      control={<Radio />}
                      label={`${val[1]}`}
                      labelPlacement="bottom"
                      style={{ fontWeight: 'bold' }}
                      onChange={handleCharacteristics}
                    />
                  </div>

                </div>
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
    </div>
  );
}
