import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    display: "flex",
    border: "4px solid black",
    flexDirection:"column",
    justify: "center",
    alignContent: "center"
  },
  topGrid: {
    // border: "3px solid red",
    marginTop: "10px"

    // alignContent: "center"
    // justify:"space-evenly",
    // alignContent:"center"
  },
  componentTitle: {
    // border: "3px solid blue",
    display: "flex",
    padding: "10px",
    fontSize: "30px"
  },
  totalRev: {
     // border: "3px solid blue",
     display: "flex",
     padding: "10px"
  },
  sortby: {
     // border: "3px solid blue",
     display: "flex",
     padding: "10px"
  },
  midGrid: {
    // border: "3px solid red",
    display: "flex",
    margin: "10px 0 10px 0"
  },
  leftPanel: {
    // border: "3px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  recommendPercentage: {
    margin: "10px"
  },

  rightPanel: {
    // border: "3px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  reviewTile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid black",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px"
  },
  revTileTopRow: {
    // border: "2px solid rebeccaPurple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  revTileTopRowStars: {
    // border: "1px solid red",
    padding: " 5px"
  },
  revTileTopRowUser: {
    // border: "1px solid red",
    padding: " 5px"
  },
  revTileTopRowTimestamp: {
    // border: "1px solid red",
    padding: " 5px"
  },
  reviewSummary: {
    fontSize: "large",
    fontWeight: "bold",
    margin: "5px"
  },
  productRecommendText: {
    fontSize: "small",
    fontStyle: "italic",
    margin: "5px"
  },
  reviewText: {
    // border: "2px solid black",
    padding: "10px",
    margin: "15px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)"
  },

  buttonContainer: {
    // border: "3px solid orange",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  moreRevBtn: {
    // border: "3px solid red"
  },
  addRevBtn: {
    // border: "3px solid blue"
  }

}));

export default useStyles;