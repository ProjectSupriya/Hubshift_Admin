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
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import OutlinedInput from "@mui/material/OutlinedInput";
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
            float:'right',
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
      <Button  variant="contained" onClick={handleClickOpen}>
        Update
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Check all these details before appointment
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Always confirm the date and time of shift. <br /> <br />


If you cannot reach for your shift, do inform office on time and let them find a solution never call half an hour 
before.<br /> <br />


Always read the BSP(Behaviour Support plan).<br /> <br />


Carry your Driving license and ID.<br /> <br />


Reach 10-15 min early at workplace for a better handover.<br /> <br />


Never park in driveways during the day.<br /> <br />


Be properly and appropriately dressed. Fully covered and proper non slippery shoes.<br /> <br />


Carry your food with you. - No food without approval is to be eaten from house.<br /> <br />


If you find anything uncertain when you reach always inform office. <br /> <br />


Take a proper handover what happened in last shift.<br /> <br />


Handover document.<br /> <br />


What to do and what not to do short narrative by finishing staff.<br /> <br />


Always tally the cash in front of handover staff.<br /> <br />


Greet client/clients with their name and with smiling face.<br /> <br />


Be confident.<br /> <br />

          </Typography>
          <Typography sx={{display:'flex', flexDirection:'row'}} gutterBottom>
            
            <Checkbox/> <Typography>I agree with the Terms & Conditions</Typography>
        
           
          </Typography>
          <Typography gutterBottom>
            <Typography>
                Note
            </Typography>
          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
       
      }}
    >
      <OutlinedInput
                        sx={{ paddingBottom: "120px" }}
                        fullWidth
                        placeholder="Note"
                      />
    </Box>
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button  variant="contained" onClick={handleClose}>
        Update
      </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
