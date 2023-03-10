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
import { Check, Clear } from '@material-ui/icons';

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

  return (
    <div>
     <Clear style={{ color: "#FF0000", fontSize:'25px' }} onClick={handleClickOpen}/>   
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      > <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', m:3}}>
       <CheckCircleIcon style={{color: "#4ECB71", fontSize:'45px'}} /></Grid>
        <DialogContent >
          <Typography fontWeight={600} gutterBottom sx={{pl:2, pr:2, textAlign:'center'}}>
          Are you sure you want <br/>to reject this timesheet?
          </Typography>
          
         
        </DialogContent>
        <DialogActions sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        
           <Button  autoFocus onClick={handleClose}            
             type="submit"
             variant="contained"
             
             sx={{ mt: 2, mb: 2, textTransform:'capitalize', backgroundColor:'#FB5656' }}
           >
             
         Yes
           </Button>
           <Button  autoFocus onClick={handleClose}            
             type="submit"
             variant="contained"
             
             sx={{ mt: 2, mb: 2, textTransform:'capitalize', backgroundColor:'#FB5656' }}
           >
             
        No
           </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

