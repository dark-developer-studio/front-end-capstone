import React from "react";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  starBarChart: {
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

//Bar Colors
let emerald = 'rgba(63, 195, 128, 1)';
let eucalyptus = 'rgba(38, 166, 91, 1)';
let htmlGray = 'rgba(128,128,128, 1)'

const data = {
  labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
  datasets: [
    {
      label: '',
      data: [20, 40, 10, 25, 5],
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
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: true,
      grid: {
        display: false
      }
    }
  }
};

const StarBarChart = () => {
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