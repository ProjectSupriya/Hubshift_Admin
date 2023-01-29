import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../../Dashboardappbar/appbar';
import Tab from './tab';
import Tab1 from './tab1'
import Image from '../../../assets/dash5.png';
import Image1 from '../../../assets/dash6.png';
import Image2 from '../../../assets/dash1.png';
import Image3 from '../../../assets/dash7.png';
import Location from './locationpopup';
import RectangleIcon from '@mui/icons-material/Rectangle';
import Accordian from './meetingaccordian'
import Accordian1 from './appointmentaccordian'
import Button from '@mui/material/Button';
import { MapOutlined, Visibility } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import Quicktask from './quicktask'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  let navigate = useNavigate();
  function applyjob() {
    navigate("/quicktask");
    console.log("navigate", navigate);
  }
  return (
    <>
    
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
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
          <img src={Image}/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Outstanding Tasks</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image1}/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600", mt:2}}>Hours</Typography> 
        </Grid>
        <Grid item xs={12} md={6} >         
          <img src={Image2}/>         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600"}}>Payment</Typography> 
        </Grid>
        <Grid item xs={12} md={6}  >         
          <img src={Image3} 
          />         
         <Typography sx={{fontSize:"16px", textAlign:"center",p:1, fontWeight:"600", mt:5}}>No. of Clients</Typography> 
        </Grid>
      </Grid>
    </Box>
    {/* <Box sx={{mt:30,mb:10,  backgroundColor:"#D3D3D3"}}>
      <Typography paddingLeft={10} fontSize="20px" fontWeight="600" margin='5px' sx={{pb:1, pt:1}} >Note:</Typography>
      <Typography paddingLeft={10} paddingBottom="15px">
      Meetings and Appointments table by default visible, arrow on right side, section can be closed by clicking the arrow.
      Notifications - Widget - Drag & Drop.<br/>
      Settings: Options for customisable widgets on Dashboard.<br/>
      Widgets can be swapped or reshuffle.<br/>
      <b>Maintain this Date format everywhere -- dd-mm-yy</b><br/>
      View All button in Meetings & Apointments will navigate to the seperate Meetings and Appointments pages.
      </Typography>
    </Box> */}
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
