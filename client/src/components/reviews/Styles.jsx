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
    border: "3px solid red",
    marginTop: "10px"

    // alignContent: "center"
    // justify:"space-evenly",
    // alignContent:"center"
  },
  componentTitle: {
    display: "flex",
    border: "3px solid blue",
    padding: "10px"
  },
  totalRev: {
    display: "flex",
    border: "3px solid blue",
    padding: "10px"
  },
  sortby: {
    display: "flex",
    border: "3px solid blue",
    padding: "10px"
  },
  midGrid: {
    display: "flex",
    border: "3px solid red",
    margin: "10px 0 10px 0"
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    border: "3px solid green",
  },
  recommendPercentage: {
    margin: "10px"
  },

  rightPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    border: "3px solid green",
  },
  reviewTile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "3px solid orange",
    marginTop: "10px",
    marginBottom: "10px"
  },
  revTileTopRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    border: "2px solid rebeccaPurple"
  },
  revTileTopRowStars: {
    border: "1px solid red",
    padding: " 5px"
  },
  revTileTopRowUser: {
    border: "1px solid red",
    padding: " 5px"
  },
  revTileTopRowTimestamp: {
    border: "1px solid red",
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    border: "3px solid orange",
  },
  moreRevBtn: {
    border: "3px solid red"
  },
  addRevBtn: {
    border: "3px solid blue"
  }

}));

export default useStyles;