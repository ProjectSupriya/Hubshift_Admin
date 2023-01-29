import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    justifyContent : "left",
  },
  drawer : {
    margin:"10px",
    marginTop:"64px",
    border: "solid #05C3DD 2px",
    paddingBottom:"10px",
    width: "250px",
   
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '6px 5px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    borderBottomColor:"solid grey 1px",
    '&:hover': {color: '#05C3DD' },
    },
  btnRoot : {
    paddingLeft : "25px",
    justifyContent : "left !important"
  },
  subMenu : {
    paddingLeft : "50px !important",
  }
}));
export default useStyles;