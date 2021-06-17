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
    marginTop: '10px'
  },
  componentTitle: {
    display: 'flex',
    padding: '10px',
    fontSize: '30px'
  },
  totalRev: {
    display: 'flex',
    padding: '10px'
  },
  sortby: {
    display: 'flex',
    padding: '10px'
  },
  midGrid: {
    display: 'flex',
    margin: '10px 0 10px 0'
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  ReviewTileViewPort: {
    border: '1px solid black',
    padding: '3px',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    maxHeight: '85vh',
    overflow: 'auto'
  },
  reviewTile: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
    margin: '5px'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  moreRevBtn: {
  },
  addRevBtn: {
  }
}));

export default useStyles;
