import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Accordian from './accordian';
import { VisibilityRounded } from '@material-ui/icons';
import { Typography } from '@mui/material';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
       <VisibilityRounded style={{ color: "#9b59b6", fontSize:'25px' }}/>
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={'100%'}
        open={open}
        onClose={handleClose}
      >
      <Typography sx={{p:2}}>Client Name: Jane Ryan</Typography>
      <hr style={{width:'98%'}}/>
        <DialogTitle>Edit Task</DialogTitle>
       
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 220 }}>
              <Accordian/>
            </FormControl>
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
