import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  formField: {
    margin: '5px 0px'
  },
  linkButton: {
    backgroundColor: 'transparent',
    color: 'inherit',
    lineHeight: 1.43,
    letterSpacing: 0.01071,
    fontWeight: 400,
    textDecoration: 'underline',
    textTransform: 'none',
    minWidth: 'auto',
    padding: '6px 2px 6px 6px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#66b',
      textDecoration: 'underline'
    },
    '&:disabled': {
      textDecoration: 'none'
    }
  },
  answerInfo: {
    color: '#888',
    marginLeft: 8
  },
  answerContainer: {
    padding: 3,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 5px 0 rgba(0, 0, 0, 0.04)',
    margin: '0px 3px 10px',
    borderRadius: 2
  }
}));
