import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import PrimarySearchAppBar from '../../../Sidebar/appbar';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (

<>
<PrimarySearchAppBar/>

    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
    <Box  sx={{ flexGrow: 1,}}>     
      <Box sx={{ width: '100%',backgroundColor:'#fff', borderRadius:'50px', }}>
      <Grid container spacing={2}>
      <Grid item xs={1} md={1}  >    
  </Grid>
  <Grid item xs={12} md={10} >
  <Typography sx={{ fontWeight:"bold", textAlign:'left'}}>Client Details</Typography>
    <hr/>
    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1}}>Personal Details</Typography>
    <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={4}  sx ={{fontWeight: '600'}} >Title</Grid>
    <Grid  xs={6} md={4} >Mr</Grid>
      </Grid> 

    <Grid container>
   <Grid  xs={6} md={4}   sx ={{fontWeight: '600', mt:2 }} > First Name </Grid>
    <Grid  xs={6} md={4} sx={{mt:2}}>Tom</Grid>
      </Grid> 
      
      <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Middle Name</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Joe</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Last Name</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Arren</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Gender</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Male</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Date of Birth</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-11-1991</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Email</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >tomarren@gmail.com</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Phone</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >1244567890</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 1</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >56 Webb Road</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 2</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >hgjhjkjhgjhg</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Suburb</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >GLENGALA</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >State</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >VIC</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Postcode</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >24</Grid>
    </Grid> 

    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1}}>Plan Details</Typography>
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Type</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Registered Nurse</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >NDIS Number</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >123456785</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan Start Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-06-2022</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan End Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-06-2022</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Service Region</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Sydney</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Service Type</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >abcd</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Status</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Active</Grid>
    </Grid> 

    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1}}>Medical Details</Typography>
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Primary Disability</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Physical disability</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Allergies</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Skin rashes</Grid>
    </Grid> 

    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Notes</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid> <br />

    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1}}>Other Details</Typography>
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Aboriginal/Torres Strait Islander</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Agreement Signed Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >1-10-2011</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan Management Current Rate</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >assddffg</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Additional Emails</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >abc@gmail.com</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Other Primary Language</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Spanish</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Setup Completed By</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Sam Johnson</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Assigned To</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Bella Curry</Grid>
    </Grid> 
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Living Arrangements</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid> 
     <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Cultural Requirements</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid>
    <Grid container>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Interests</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Reading, singing</Grid>
    </Grid> 
    </Grid>

            <Grid item xs={12}  sx={{p:3,display:'flex',flexDirection:'row'}}>
            <Item elevation={0}>
            <Button variant="contained" className='aprvbtn'>
             Approve</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" className='rjtbtn'>
            Reject</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outlined" className='cmnbtn'>
            Cancel
            </Button>
            </Item>
            </Grid>
  </Grid>
</Grid>
     
      
    

  </Box>    
    </Box>
    </Grid>
    </Grid>
    </Container>
 
</>
    
  );
}
