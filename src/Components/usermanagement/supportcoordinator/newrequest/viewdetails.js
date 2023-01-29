import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Profile from '../../../assets/Profile.png';
import PrimarySearchAppBar from '../../../Sidebar/appbar';
import Map from '../../../assets/map2.png'


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
      <Grid container spacing={2} sx={{mt:0}}>
      <Grid item xs={6} md={3} sx={{mt:5}} >
     <Grid  sx={{p:3,display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
      <Grid item xs={12} md={4}>
      <img src= {Profile} alt="" width={110} height={110} style={{objectFit:'contain',  float:'right'}} />
      </Grid>
       <Grid item  md={1}>
           </Grid>
           </Grid>
  </Grid>
  <Grid item xs={12} md={9} >
  <Typography sx={{ fontWeight:"bold", textAlign:'left'}}>Support Worker Details</Typography>
    <hr/>
    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1}}>Personal Details</Typography>
    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={4}  sx ={{fontWeight: '600'}} >Title</Grid>
    <Grid  xs={6} md={4} >Mr</Grid>
      </Grid> <br />

    <Grid container>
   <Grid  xs={6} md={4}   sx ={{fontWeight: '600', mt:2 }} > First Name </Grid>
    <Grid  xs={6} md={4} sx={{mt:2}}>Tom</Grid>
      </Grid> <br />
      
      <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Middle Name</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Joe</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Last Name</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Arren</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Gender</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Male</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Date of Birth</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-11-1991</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Email</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >tomarren@gmail.com</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Phone</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >1244567890</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 1</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >56 Webb Road</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 2</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >hgjhjkjhgjhg</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Suburb</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >GLENGALA</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >State</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >VIC</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Postcode</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >24</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Job Title</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Registered Nurse</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Level</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >5</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Qualification</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Personal Care</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Badges</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Immunisation</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Languages</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >English, Spanish</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Cultural Background</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Religion</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Christian</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Interests & Hobbies</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Singing, Reading books, travelling</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >About</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Hi, I am Tom. I’m passionate about helping people.
     I’m available to do household tasks, 
    personal care and paperwork.</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Preferences</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Documents</Grid>
    <Grid  xs={6} md={4} sx={{mt:2, color:'#0C8AFF'}} >DOWNLOAD ZIP</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Work Locations
     <img src={Map} width={350} height={200} style={{objectFit:'contain',  float:'left'}}/>
     </Grid>
    
    </Grid> <br />

    </Grid>

                <Grid item xs={12}  sx={{p:3,display:'flex',flexDirection:'row', justifyContent:'flex-start'}}>
            <Item elevation={0}>
            <Button variant="contained" sx={{backgroundColor:"#4ECB71", color:"#ffffff",textTransform:"capitalize"}}>
             Approve</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" sx={{backgroundColor:"#FF0000",color:"#ffffff",textTransform:"capitalize"}}>
            Reject</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained"  sx={{backgroundColor:"#ffffff",textTransform:'capitalize', color:"#000000"}}>
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
