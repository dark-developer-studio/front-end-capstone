import React, { useEffect, useContext, useState } from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

import { ReviewsContext } from '../../../helpers/context';

//helper functions
import { convertToPercentages } from '../helperFunctions.jsx';

const useStyles = makeStyles((theme) => ({
  starBarChart: {
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const StarBarChart = () => {
  const { revsMetaData } = useContext(ReviewsContext);
  const[ratingStars, setRatingStars] = useState([]);
  const[ratingStarsTotals, setRatingStarsTotals] = useState([]);
  const[starData, setStarData] = useState([]);
  const [starDataPercentages, setStarDataPercentages] = useState([]);

  //Bar Colors
  let emerald = 'rgba(63, 195, 128, 1)';
  let eucalyptus = 'rgba(38, 166, 91, 1)';
  let htmlGray = 'rgba(128,128,128, 1)';

const data = {
  labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
  datasets: [
    {
      label: '',
      data: starData,
      backgroundColor: [
        emerald
      ],
      borderColor: [
        eucalyptus
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  //y axis creates a horizontal chart
  indexAxis: 'y',

  // Elements options apply to all of the options unless overridden in a dataset
  elements: {
    //Empty for now
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(8, 9, 8, 0.8)',
      borderColor: eucalyptus,
      borderWidth: 2,
      xAlign: 'left',
      yAlign: 'center',
      caretPadding: 100,
      caretSize: 10,
      padding: 8,
      //USE CALLBACK TO CREATE CUSTOM TEXT IN TOOLTIP WINDOW!
      callbacks: {
        //   label: function(context) {
        //       var label = context.dataset.label || '';

        //       if (label) {
        //           label += ': ';
        //       }
        //       if (context.parsed.y !== null) {
        //           //label += `${starData[0].toString()} reviews`;
        //           //label += `%`;
        //       }
        //       return label;
        //   }
      }
    }
  },
  scales: {
    x: {
      max: 100,
      min: 0,
    },
    xAxis: {
      display: false,
    },
    yAxis: {
      display: true,
      grid: {
        display: false
      },
    }
  }
};

  const getRatingStars = () => {
    let resultArr = [0, 0, 0, 0, 0];
    const ratingKeys = Object.keys(revsMetaData.ratings);
    ratingKeys.forEach( (key, index) => {
      if (Number(key) > 0 && Number(key) < 6) {
        resultArr[Number(key) - 1] = Number(revsMetaData.ratings[key]);
      }
    })
    resultArr = resultArr.reverse();
    setStarData(convertToPercentages(resultArr));
    //setStarDataPercentages(convertToPercentages(resultArr));
  }

  useEffect( () => {
    if (revsMetaData) {
      if (revsMetaData.ratings) {
        getRatingStars();
      }
    }
  }, [revsMetaData])

  useEffect( () => {
    data.datasets[0].data.splice(0, 5);
    data.datasets[0].data.concat(starData);
  }, [starData])

  const classes = useStyles();

  return  (
    <div className={classes.starBarChart}>
      <Typography gutterBottom>
        Star Rating Chart
      </Typography>

      <Bar data={data} options={options} />
    </div>
  );
}

export default StarBarChart;