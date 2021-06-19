import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  parentCard: {
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19)',
    margin: '10px 10px'
  },
  parentGrid: {
    display: 'flex',
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
    border: '1.5px solid #ccc',
    borderRadius: '4px',
    padding: '3px',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    maxHeight: '85vh',
    overflow: 'auto'
  },
  reviewTileList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#fefcfb'
  },
  reviewTile: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)',
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
