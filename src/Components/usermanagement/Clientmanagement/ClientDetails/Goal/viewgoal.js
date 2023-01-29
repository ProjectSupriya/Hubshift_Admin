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
import Grid from '@mui/material/Grid';
import { VisibilityRounded } from '@material-ui/icons';
import { Typography } from '@mui/material';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
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
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
         <Typography>Goal Name: Learn Swimming </Typography> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{display:"flex", justifyContent:"flex-end"}}>Duration:1 month</Typography> 
          </Grid>
          </Grid>
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
