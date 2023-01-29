import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from '../../assets/staff1.png';
import Image1 from '../../assets/staff2.png';
import Image2 from '../../assets/staff3.png';
import Image3 from '../../assets/staff4.png';
import Tab from './dashtab';



export default function ColumnsGrid() {

  return (
    <>
    
    
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    <Box sx={{ flexGrow: 2 }}>
    <Grid container spacing={0}>
    <Grid item xs={6} md={6}> 
    <Typography sx={{fontSize:'30px', textAlign:"left", pt:4}}>Appointments</Typography> 
    
    </Grid>
    </Grid>
    <Grid container spacing={0} columns={12} sx={{  mt:2 }} >
    <Box sx={{width:"100%",mt:2}}>
    <Grid item xs={12} md={12} >
    <Tab/>
    </Grid>
        </Box>
      </Grid>
      <Grid container spacing={4} columns={12} sx={{  mt:2 }} >
        <Grid item xs={12} md={6} > 
        <Box sx={{ display:"flex", alignContent:"center", justifyContent:"center" }}>
        <img src={Image} alt=""/> 
        </Box>        
                  
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Weekly Appointments</Typography> 
        </Grid>
        <Grid item xs={12} md={6} > 
        <Box sx={{display:"flex", alignContent:"center", justifyContent:"center" }}>
        <img src={Image1} alt=""/>    
        </Box>        
               
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Total billable hours</Typography> 
        </Grid>
        <Grid item xs={12} md={6} sx={{ pb:1,display:"flex", alignContent:"center", justifyContent:"center" }}>         
          <img src={Image2} alt=""/>         
        </Grid>
        <Grid item xs={12} md={6} sx={{ pb:1,display:"flex", alignContent:"center", justifyContent:"center" }} >         
          <img src={Image3} alt=""/>         
        </Grid>
      </Grid>
    </Box>
   
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
