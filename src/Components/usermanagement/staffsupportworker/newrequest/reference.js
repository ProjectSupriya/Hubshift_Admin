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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
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
}

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
      <Button size="small" onClick={handleClickOpen} sx={{textTransform:"capitalize",fontSize:"12px",
       color:"#000000"}}>
       Reference1
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Reference 1
        <Typography sx={{pt:1}}><b> Support Worker Name:</b>&nbsp;&nbsp; Dan Frayer</Typography>
        <Typography sx={{pt:1}}><b>Name:&nbsp;&nbsp;</b>Tracy Collins &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Email:</b>&nbsp;&nbsp;tracycollins@gmail.com</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers >
          <Typography gutterBottom sx={{p:1}}>
          <b>Question 1:</b><br/>From how many years do you know Jill?
          </Typography>
          <Typography gutterBottom sx={{p:1}}>
            <b>Answer:</b><br/>I know Jill since 10 years.
          </Typography>
          <Typography gutterBottom sx={{p:1}}>
          <b>Question 2:</b><br/>Where was he working earlier?
          </Typography>
          <Typography gutterBottom sx={{p:1}}>
            <b>Answer:</b><br/>Jill used to work at a private hospital as a Nurse.
          </Typography>
        </DialogContent>
        <DialogActions  sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:"center"}}>
          <Button variant="contained" autoFocus onClick={handleClose} >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}