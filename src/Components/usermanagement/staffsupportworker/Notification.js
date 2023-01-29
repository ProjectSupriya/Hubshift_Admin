import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Notifications } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
 

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
      });
      const { vertical, horizontal } = state;

      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };

  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  let navigate = useNavigate();
  function applyjob() {
    navigate("/newrequest");
    console.log("navigate", navigate);
  }
  function applyjob1() {
    navigate("/leaves");
    console.log("navigate", navigate);
  }
  function applyjob2() {
    navigate("/task");
    console.log("navigate", navigate);
  }
  function applyjob3() {
    navigate("/note");
    console.log("navigate", navigate);
  }

  return (
    <Stack spacing={4} sx={{ width: '100%' }}>
      <Button  onClick={handleClick1}>
        <Notifications/>
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
       anchorOrigin={{ vertical, horizontal }}  key={vertical + horizontal}>
        <Alert onClose={handleClose} severity="" sx={{ width: '90%' }} 
         onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}>
        <Box sx={{pb:2}}>
      <Grid container spacing={0} sx={{backgroundColor:"#f0f0f0", borderRadius:"10px"}}>
        <Grid item xs={3} md={3}>
        <Box  sx={{backgroundColor:"#d9d9d9",p:5, borderRadius:"10px"}}>
        <Typography sx={{ color:"#000",textAlign:"center", fontWeight:"900"}}>New Request</Typography>
        </Box>
        </Grid>
        <Grid item xs={9} md={9}>
        <Box sx={{ p:1}}>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Today, 7:00 PM</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold",fontSize:"12px"}}>You have got a new notification!</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Jane Brian has added a new Incident for Client - Jane Ryan</Typography>
        <Stack spacing={2} direction="row" sx={{ display:'flex', alignItems:"flex-end", justifyContent:"end"}}>
      <Button  variant="text" size="small"  sx={{textTransform:"capitalize"}}>Remind Me</Button>
      <Button onClick={applyjob} variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}} >Read</Button>
      <Button variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}}>Unread</Button>
    </Stack>
        </Box>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{pb:2}}>
      <Grid container spacing={0} sx={{backgroundColor:"#f0f0f0", borderRadius:"10px"}}>
        <Grid item xs={3} md={3}>
        <Box sx={{backgroundColor:"#d9d9d9",p:5, borderRadius:"10px"}}>
        <Typography sx={{ color:"#000",textAlign:"center", fontWeight:"900"}}>Leave</Typography>
        </Box>
        </Grid>
        <Grid item xs={9} md={9}>
        <Box sx={{ p:1}}>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Today, 7:00 PM</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold",fontSize:"12px"}}>You have got a new notification!</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Jane Brian has added a new Incident for Client - Jane Ryan</Typography>
        <Stack spacing={2} direction="row" sx={{ display:'flex', alignItems:"flex-end", justifyContent:"end"}}>
      <Button variant="text" size="small" sx={{textTransform:"capitalize"}}>Remind Me</Button>
      <Button onClick={applyjob1} variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}} >Read</Button>
      <Button variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}}>Unread</Button>
    </Stack>
        </Box>
        </Grid>
      </Grid>
      </Box> 
      <Box sx={{pb:2}}>
      <Grid container spacing={0} sx={{backgroundColor:"#f0f0f0", borderRadius:"10px"}}>
        <Grid item xs={3} md={3}>
        <Box sx={{backgroundColor:"#d9d9d9",p:5, borderRadius:"10px"}}>
        <Typography sx={{ color:"#000",textAlign:"center", fontWeight:"900"}}>Task</Typography>
        </Box>
        </Grid>
        <Grid item xs={9} md={9}>
        <Box sx={{ p:1}}>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Today, 7:00 PM</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold",fontSize:"12px"}}>You have got a new notification!</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Jane Brian has added a new Incident for Client - Jane Ryan</Typography>
        <Stack spacing={2} direction="row" sx={{ display:'flex', alignItems:"flex-end", justifyContent:"end"}}>
      <Button variant="text" size="small" sx={{textTransform:"capitalize"}}>Remind Me</Button>
      <Button onClick={applyjob2} variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}} >Read</Button>
      <Button variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}}>Unread</Button>
    </Stack>
        </Box>
        </Grid>
      </Grid>
      </Box> 
      <Box sx={{pb:2}}>
      <Grid container spacing={0} sx={{backgroundColor:"#f0f0f0", borderRadius:"10px"}}>
        <Grid item xs={3} md={3}>
        <Box sx={{backgroundColor:"#d9d9d9",pt:5,pb:5, borderRadius:"10px"}}>
        <Typography sx={{ color:"#000",textAlign:"center", fontWeight:"900"}}>Note</Typography>
        </Box>
        </Grid>
        <Grid item xs={9} md={9}>
        <Box sx={{ p:1}}>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Today, 7:00 PM</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold",fontSize:"12px"}}>You have got a new notification!</Typography>
        <Typography sx={{color:"#000", textAlign:"left", fontWeight:"bold", fontSize:"12px"}}>Jane Brian has added a new Incident for Client - Jane Ryan</Typography>
        <Stack spacing={2} direction="row" sx={{ display:'flex', alignItems:"flex-end", justifyContent:"end"}}>
      <Button variant="text" size="small" sx={{textTransform:"capitalize"}}>Remind Me</Button>
      <Button onClick={applyjob3} variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}} >Read</Button>
      <Button variant="contained" size="small" sx={{backgroundColor:"#bababa", textTransform:"capitalize"}}>Unread</Button>
    </Stack>
        </Box>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{display:'flex', alignItems:"flex-end", justifyContent:"end"}}>
      <Button variant="text" size="small" sx={{textTransform:"capitalize", color:"#0C8AFF"}}>View All</Button>
      </Box>
        </Alert>
        
      </Snackbar>
    </Stack>
  );
}

