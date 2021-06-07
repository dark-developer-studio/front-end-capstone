import React from "react";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  barDiagram: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginLeft: "10px",
    border: "3px solid red"
  },
}));

const data = {
  labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
  datasets: [
    {
      label: '',
      data: [20, 40, 10, 25, 5],
      backgroundColor: [
        'rgba(35, 203, 167, 1)',
        'rgba(35, 203, 167, 1)',
        'rgba(35, 203, 167, 1)',
        'rgba(35, 203, 167, 1)',
        'rgba(35, 203, 167, 1)',
        'rgba(35, 203, 167, 1)',
      ],
      borderColor: [
        'rgba(38, 166, 91, 1)'
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
    // bar: {
    //   borderWidth: 2,
    // },
  },
  responsive: true,

  plugins: {
    legend: {
      display: false
    },
  },
//   title: {
//     display: true,
//     text: 'This is a Horizontal Bar Chart',
//   },
// },
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

const StarBarChart = () => (
    <Bar data={data} options={options} />
);

export default StarBarChart;