import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  parentGrid: {
    display: 'flex',
    border: '4px solid black',
    flexDirection: 'column',
    justify: 'center',
    alignContent: 'center'
  },
  topGrid: {
    // border: "3px solid red",
    marginTop: '10px'
    // alignContent: "center"
    // justify:"space-evenly",
    // alignContent:"center"
  },
  componentTitle: {
    // border: "3px solid blue",
    display: 'flex',
    padding: '10px',
    fontSize: '30px'
  },
  totalRev: {
    // border: "3px solid blue",
    display: 'flex',
    padding: '10px'
  },
  sortby: {
    // border: "3px solid blue",
    display: 'flex',
    padding: '10px'
  },
  midGrid: {
    // border: "3px solid red",
    display: 'flex',
    margin: '10px 0 10px 0'
  },
  leftPanel: {
    // border: "3px solid green",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  rightPanel: {
    // border: "3px solid green",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  reviewTile: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px'
  },
  buttonContainer: {
    // border: "3px solid orange",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  moreRevBtn: {
    // border: "3px solid red"
  },
  addRevBtn: {
    // border: "3px solid blue"
  }
}));

export default useStyles;
