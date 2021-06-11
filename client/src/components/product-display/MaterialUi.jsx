import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarSmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black'
  },
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black'
  },
  button: {
    padding: '7px',
    border: '1px solid black',
    width: '100%',
    borderRadius: '0px'
  },
  form: {
    background: 'purple'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  img: {
    borderRadius: '50%',
    border: '1px solid black'
  },
  icon: {
    color: 'black'
  },
  selectTag: {
    padding: '10px',
    border: '1px solid black',
    borderRadius: '4px',
    width: '100%',
    fontWeight: 'bold'
  },
  card: {
    width: '100%'
  },
  loadingSpinner: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  grid: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'purple',
    border: '2px solid black'
  },
  grid2: {
    textAlign: 'center',
    color: 'white',
    border: '2px solid black'
  },
  grid3: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    border: '2px solid black'
  },
  grid4: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    border: '2px solid black'
  },
  grid5: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'gray',
    border: '2px solid black'
  }
}));

export default useStyles;
