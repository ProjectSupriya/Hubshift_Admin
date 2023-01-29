import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
         ...theme.typography.body2,
         padding: theme.spacing(1),
         textAlign: 'center',
         color: theme.palette.text.secondary,
       }));

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen}>
       5
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        
        <DialogContent>
           <Grid container spacing={1} sx={{mt:1}}>
     <Grid item xs={12} md={3}> 
      <Box sx={{backgroundColor:"#E0DCDC", p:1, borderRadius:"5px"}}> 
      <Typography style={{fontSize:'16px', fontWeight:600}}>Pending</Typography>   
     <Stack spacing={0.5}>
         <Item>1.Lunch</Item>
         <Item>2.Breakfast</Item>
       </Stack>
       </Box>
       </Grid>
       <Grid item xs={12} md={3}> 
       <Box sx={{backgroundColor:"#E0DCDC",p:1,borderRadius:"5px"}}> 
       <Typography style={{fontSize:'16px', fontWeight:600}}>In-Progess</Typography>   
       <Stack spacing={2}>
         <Item>3.Pushups X15</Item>
       </Stack>
       </Box>
       </Grid>
       <Grid item xs={12} md={3}>  
       <Box sx={{backgroundColor:"#E0DCDC",p:1,borderRadius:"5px"}}> 
       <Typography style={{fontSize:'16px', fontWeight:600}}>Completed</Typography>   
       <Stack spacing={1}>
         <Item>4.Jumping Jacks X15</Item>
         <Item>5.Squats X15</Item>
       </Stack>
       </Box>
       </Grid>
       <Grid item xs={12} md={3}>  
       <Box sx={{backgroundColor:"#E0DCDC",p:1,borderRadius:"5px"}}> 
       <Typography style={{fontSize:'16px', fontWeight:600}}>Canceled</Typography>   
     
       </Box>
       </Grid>
       </Grid>
           
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}