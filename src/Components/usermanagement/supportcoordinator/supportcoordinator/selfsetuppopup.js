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

  function applyjob() {
    navigate("/scselfSignupstep1");
    console.log("navigate", navigate);
  }

  return (
    <div>
     <Button  variant="contained" sx={{textTransform:"capitalize"}}>Continue</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
     <Button variant="contained" sx={{   backgroundColor:'#008ED9',textTransform:'capitalize', "&:hover": {
                    background: "#008ED9",},}} onClick={handleClickOpen} 
               
           >            
           Self Setup
           </Button> 
       
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      > <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', m:3}}>
       <CheckCircleIcon style={{color: "#4ECB71", fontSize:'45px'}} /></Grid>
        <DialogContent >
          <Typography fontWeight={600} gutterBottom sx={{pl:2, pr:2, textAlign:'center'}}>
          Self Setup request with<br/> login credentials sent<br/> successfully to the user.
          </Typography>
          
         
        </DialogContent>
        <DialogActions sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        
           <Button  autoFocus onClick={applyjob}            
             type="submit"
             variant="contained"
             
             sx={{ mt: 2, mb: 2, textTransform:'capitalize', backgroundColor:'#01C1EB' }}
           >
             
         Ok
           </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

