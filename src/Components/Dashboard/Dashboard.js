import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../Dashboardappbar/appbar';
import Image from '../assets/dash1.png';
import Image1 from '../assets/dash2.png';
import Image2 from '../assets/dash3.png';
import Image3 from '../assets/dash4.png';
import Accordian from './meetingaccordian'
import Accordian1 from './appointmentaccordian'
import Quicktask from './quicktask'

export default function ColumnsGrid() {
  return (
    <>
    
    <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={0}>
    <Grid item xs={6} md={6}> 
    <Typography sx={{fontSize:'30px', textAlign:"left", pt:8}}>Dashboard</Typography> 
    
    </Grid>
    </Grid>
    <Grid container spacing={0} columns={12} sx={{  mt:2 }} >
    <Grid item xs={12} md={12} sx={{ display: "flex",
                justifyContent: "end",
                alignItems: "end", p:0}}>
                
     <Quicktask/>
    </Grid>
    <Box sx={{width:"100%",mt:2, border:"1px solid grey"}}>
    <Grid item xs={12} md={12} >
    <Accordian/>
    </Grid>
        </Box>
    <Box sx={{width:"100%",mt:2, border:"1px solid grey"}}>
    <Grid item xs={12} md={12} >
    <Accordian1/> 
    </Grid>
        </Box>
      </Grid>
      <Grid container spacing={4} columns={12} sx={{  mt:2 }} >
        <Grid item xs={12} md={6} >         
          <img src={Image} alt=""/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Payment</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image1} alt=""/>        
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Profit</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image2} alt=""/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>No. of Clients</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image3} alt=""/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>No. of Employees</Typography> 
        </Grid>
      </Grid>
    </Box>
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
