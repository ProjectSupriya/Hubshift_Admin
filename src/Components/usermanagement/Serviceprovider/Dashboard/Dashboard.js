import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from '../../../assets/dash1.png';
import Image1 from '../../../assets/dash2.png';
import Image2 from '../../../assets/dash3.png';
import Image3 from '../../../assets/dash4.png';
import Accordian from './meetingaccordian'
import Accordian1 from './appointmentaccordian'
import Quicktask from './quicktask'

export default function ColumnsGrid() {
  return (
    <>
    
    <Container >
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={0}>
    <Grid item xs={6} md={6}> 
    <Typography variant='h4' textAlign='left' paddingTop='40px'>Dashboard</Typography> 
    
    </Grid>
    </Grid>
    <Grid container spacing={0} columns={12} sx={{  mt:2 }} >
    <Grid item xs={12} md={12} className='quicktask'>               
     <Quicktask/>
    </Grid>
    <Box className='dashbox'>
    <Grid item xs={12} md={12} >
    <Accordian/>
    </Grid>
        </Box>
    <Box className='dashbox'>
    <Grid item xs={12} md={12} >
    <Accordian1/> 
    </Grid>
        </Box>
      </Grid>
      <Grid container spacing={4} columns={12} sx={{  mt:2 }} >
        <Grid item xs={12} md={6} >         
          <img src={Image} alt='' />         
         <Typography className='dashfields' >Payments</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image1} alt=''/>         
         <Typography className='dashfields' >Months</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image2} alt=''/>         
         <Typography className='dashfields'>No. of Clients</Typography> 
        </Grid>
        <Grid item xs={12} md={6}  >         
          <img src={Image3} alt=''/>         
         <Typography className='dashfields' >No. of Employees</Typography> 
        </Grid>
      </Grid>
    </Box>
  
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
