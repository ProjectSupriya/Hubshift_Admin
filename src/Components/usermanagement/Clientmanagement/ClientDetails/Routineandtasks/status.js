import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Date from './date';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

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

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 
  const sendMessage = (e) => {
    e.preventDefault();
    alert('hi');
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
         
        >
       
         <MenuItem value={10}>
         <div>
      <Typography  onClick={handleClickOpen}>
        Canceled
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} sx={{textAlign:"center"}}>
        Cancellation Reason Notes
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 1500,
                      maxWidth: "100%",
                    }}
                  >
                    <Typography
                  
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        p: 0,
                      }}
                    >
                     Note
                    </Typography>
                    <TextField multiline rows={5}  fullWidth id="fullWidth" />
                  
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                    //   width: 1500,
                      maxWidth: "100%",
                    }}
                  >
                    <Typography
                  
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        p: 0,
                      }}
                    >
                    Postpone Meeting
                    </Typography>
                    <Typography
                  
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "400",
                        pt: 1,
                      }}
                    >
                   Choose preferred Date & Time
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{m:2,
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Date />
      </div>    
    </Box>
        </Grid>
        </DialogContent>
        <DialogActions sx={{ display: "flex",
                justifyContent: "center",
                alignItems: "center",}}>
          <Button autoFocus onClick={handleClose} sx={{backgroundColor:"#01C1EB"}}>
           Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  

         </MenuItem>
          <MenuItem value={20}><Typography >Completed</Typography></MenuItem>
          <MenuItem value={30}>Pending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


