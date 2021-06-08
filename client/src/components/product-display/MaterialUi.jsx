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
    width: '100%',
    fontWeight: 'bold'
  },
  card: {
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  grid: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'purple',
    border: '2px solid black'
  },
  grid2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    border: '2px solid black'
  },
  grid3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue',
    border: '2px solid black'
  },
  grid4: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    border: '2px solid black'
  },
  grid5: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'gray',
    border: '2px solid black'
  },
  grid6: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'orange',
    border: '2px solid black'
  }
}));

export default useStyles;
