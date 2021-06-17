import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, Typography } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ReviewsContext } from '../../../helpers/context';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3'
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

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

export function buildCharRadios(charArr, setRecommend, setCharacteristics, characteristics) {
  const handleCharacteristics = (event) => {
    const resultObj = characteristics;
    if (event.target.value.length > 0) {
      const str = event.target.value;
      const key = str.slice(2, str.length);
      const val = Number(str.slice(0, 1));
      console.log('SPLICE', key);
      console.log('SPLICE2', val);

      resultObj[key] = val;
    }
    setCharacteristics(resultObj);
  };

  return (
    <div>
      {charArr.map((char) => (
        <div key={char[0]}>
          <FormControl component="fieldset">
            <FormLabel component="legend" />
            <Typography className="inputText">{char[1]}</Typography>
            <RadioGroup defaultValue="none" aria-label="recommend" name="customized-radios">
              {char[2].map((val) => (
                <FormControlLabel key={val[0]} value={[val[0], char[0]]} control={<StyledRadio />} label={`${val[0]} : ${val[1]}`} onChange={handleCharacteristics} />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
    </div>
  );
}