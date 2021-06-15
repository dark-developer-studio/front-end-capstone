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
  avatarIndicators: {
    '&:hover': {
      cursor: 'pointer'
    },
    border: '1px solid black',
    margin: '1px'
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
    height: 550,
    maxWidth: '100%',
    padding: '10px'
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
    maxWidth: '100%'
  },
  loadingSpinner: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  },
  carousel: {
    height: '90%',
    width: '100%',
    objectFit: 'contain',
    boxShadow: '0px 1px 2px 1px rgba(0, 0, 0, .3)',
    margin: '20px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '6px'
  },
  carouselThumbs: {
    height: '50px',
    width: '50px',
    position: 'absolute',
    top: '60px',
    left: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid black'
  },
  navButtonWrapper: {
    top: '250px'
  },
  grid: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: '6px',
    padding: '2px'
  },
  imgBackground: {
    paddingRight: '17px'
  },
  mainImg: {
    height: 550,
    maxWidth: '100%',
    padding: '10px',
    position: 'relative',
    top: 0,
    left: 0
  },
  sideImg: {
    height: '50px',
    width: '50px',
    border: '2px solid black'
  },
  imgGrid: {
    position: 'relative',
    left: 0,
    top: 0
  },
  discountPrice: {
    color: 'red'
  },
  orignalPrice: {
    textDecoration: 'line-through'
  }
}));

export default useStyles;
