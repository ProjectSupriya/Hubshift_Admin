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
        Check all these details during appointment
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Go through the routine template. <br /> <br />


Read communication book. <br /> <br />


Read Appointment Diary. <br /> <br />


Check emails related to your shift. <br /> <br />


Divide the work between you and other staff if more than one else plan your work. <br /> <br />


See if any appointment and plan the timings. <br /> <br />


Check on client every 20-30 min for their well-being, continence, safety. <br /> <br />


Always remove any hazard. <br /> <br />


Check for medication routine and set alarms. <br /> <br />


Prepare fresh meals for the client-choice, options and control. <br /> <br />


Check for washing/hanging on line. <br /> <br />


Look for the cleaning of fridge/ cupboards. <br /> <br />


Look for tiding of house. <br /> <br />


Engage the client in your work. <br /> <br />


When work is finished engaging client in planned goal activities. <br /> <br />


Use small sentences for Communcation with Clients. <br /> <br />


Keep always house keys and contact nos on you. <br /> <br />


Do not use phone unless emergency. <br /> <br />


Avoid using other languages other than English. <br /> <br />


Complete the paperwork and record appropriately. <br /> <br />


Complete support record. <br /> <br />


Don t forget to sign off for your shift so that you can be paid. <br /> <br />


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
