import React, { useContext, useState, useEffect } from "react";
import { Slider, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

import { ReviewsContext } from '../../../helpers/context';

//helper function
import { calcAvgRating, calcStarRating, getCharLowHighVals } from '../helperFunctions.jsx';

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  sliderCharts: {
    width: '100%'
  }
}));

const ProductReviewSlider= withStyles({
  root: {
    // color: 'rgba(128,128,128, 1)', GREY COLOR
    color: 'rgba(63, 195, 128, 1)', //GREEN COLOR
    height: 10,
  },
  thumb: {
    height: 20,
    width: 10,
    backgroundColor: 'rgba(38, 166, 91, 1)',
    border: '2px solid black',
    marginTop: -5,
    marginLeft: 0,
    marginRight: 0,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    borderRadius: 0
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 10,
    borderRadius: 0,
    margin: 0
  },
  rail: {
    height: 10,
    borderRadius: 0,
    margin: 0
  },
  mark: {
    backgroundColor: '#ffffff',
    height: 10,
    width: 5,
    marginTop: 0,


  },
  markActive: {
    opacity: 1,
    backgroundColor: '#000000',
    border: '0.5px solid black',
    height: 9,
  },
  disabled: {
    "& .MuiSlider-thumb": {
      height: 20,
      width: 10,
      backgroundColor: 'rgba(38, 166, 91, 1)',
      border: "2px solid black",
      // borderRadius: "10px 10px 10px 10px",
      marginTop: -5,
      marginLeft: 0,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    color: 'rgba(63, 195, 128, 1)',
    height: 10
  }
})(Slider);

function valuetext(value) {
  return `${value}`;
}

const ProductReviewChart = () => {
  const { revsMetaData } = useContext(ReviewsContext);
  const [charValPairs, setCharValPairs] = useState([]);

  const getChar = () => {
    let resultArr = [];
    const charKeys = Object.keys(revsMetaData.characteristics);
    charKeys.forEach( (key, index) => {
      let charNumVal =  revsMetaData.characteristics[key]['value'];
      let charArr = [key, Math.round(Number(charNumVal)), getCharLowHighVals(key)];
      resultArr.unshift(charArr);
    })
    setCharValPairs(resultArr);
  }

  useEffect( () => {
    if (revsMetaData) {
      if (revsMetaData.characteristics) {
        getChar();
      }
    }
  }, [revsMetaData])

  const classes = useStyles();

  return (
    <div className={classes.parentContainer}>
      <Typography id="discrete-slider" gutterBottom>
        Product Review Chart
      </Typography>

      <div className={classes.sliderCharts}>
        {charValPairs.map( (item, index) => (
          <div key={index}>
          <Typography className={classes.chartTitles} gutterBottom >
          {item[0]}
        </Typography>

        <ProductReviewSlider
        defaultValue={item[1]}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={item[2]}
        min={1}
        max={5}
        disabled
        />
        </div>
        ))}

      {/* End of innerContainer */}
      </div>

    {/* End of ParentContainer */}
    </div>
  );
};

export default ProductReviewChart;