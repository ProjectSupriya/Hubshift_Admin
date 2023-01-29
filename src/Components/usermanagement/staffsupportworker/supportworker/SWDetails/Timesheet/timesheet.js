import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Daterange from './daterange'
import TimesheetTable from './TimesheetTable'
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function Timesheet() {
    const [status,setStatus]=React.useState(false)
    let navigate = useNavigate();

    function applyjob() {
      navigate("/timesheettable");
      console.log("navigate", navigate);
    }
  return (
    <>
  
    
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={12} md={12} >
    <Box sx={{ flexGrow: 2, mb:3 }}> 
      <Grid container spacing={4} columns={12} sx={{  m:2  }} >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography sx={{pb:1, fontWeight:"bold"}}>Date Range</Typography>
        <Daterange/>      
      </div>     
    </Box>
        </Grid>
        <Grid item xs={12} md={6} >
      <Button onClick={()=>setStatus(!status)} variant="contained" sx={{m:5,display:'flex',flexDirection:'row', justifyContent:'center'
      ,textTransform:"capitalize"}}>Show</Button> 
      </Grid>
        </Grid>
      </Grid> 
      <Grid item xs={12} md={12}sx={{mt:5}}>
   
   {
     status? <div> <TimesheetTable/> </div>:null
   }
        
 </Grid>    
    </Box>
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
