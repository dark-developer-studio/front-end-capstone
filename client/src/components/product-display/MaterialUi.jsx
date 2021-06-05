import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'linear-gradient(45deg, #32FF00, #AF049C)',
    border: 1,
    borderRadius: 20,
    color: 'black',
    padding: '0 30px '
  },
  form: {
    background: 'purple'
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
    backgroundColor: 'green',
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
