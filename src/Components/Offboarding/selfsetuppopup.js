import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Grid from '@mui/material/Grid';
import Terminate from "./Terminatepopup"
import { useNavigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let navigate = useNavigate();

 
  
  const btn = {
    margin:'10px',width:"150px",height:"50px",backgroundColor:"#01C1EB" 
  }

  const btn1 = {
    backgroundColor:"#01C1EB" 
  }

  const btn2 = {
    backgroundColor:'#FF0000' 
  }
  

  const DialogActionssty = {
    display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'
  }

  return (
    <div>
     <Button  variant="contained" style={btn}>Previous</Button> 
     <Button variant="contained" style={btn} onClick={handleClickOpen}> Save & Submit </Button>
     <Button  variant="contained" style={btn}> <Terminate/> </Button> 

               
                     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      > <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', m:3}}>
       <CheckCircleIcon style={{color: "#4ECB71", fontSize:'45px'}} /></Grid>
        <DialogContent >
          <Typography fontWeight={600} gutterBottom sx={{pl:2, pr:2, textAlign:'center'}}>
          Offboarding process<br/> completed successfully.<br/> Would you like to have a <br/> copy of this form in <br/>below formats?
          </Typography>
          
         
        </DialogContent>

        <DialogActions style={DialogActionssty}>
        
      
      <Button type="submit" variant="contained" style={btn1}>               
         PDF
      </Button>

      <Button type="submit" variant="contained" style={btn1}>               
      Email
      </Button>
     
        </DialogActions>
        <DialogActions>

        <Button type="submit" variant="contained" style={btn2}>               
        Proceed with Termination
        </Button>

        </DialogActions>

      </BootstrapDialog>
    </div>
  );
}

