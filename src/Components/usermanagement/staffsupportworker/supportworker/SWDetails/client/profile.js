import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Profile from '../../../../../assets/clientprofile.png';



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

    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
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
    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1, fontSize:"28px"}}>Personal Details</Typography>
    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={3}  sx ={{fontWeight: '600'}} >Name:</Grid>
    <Grid  xs={6} md={3} >Ms. Jane Joe Ryan</Grid>
      </Grid> <br />

    <Grid container>
   <Grid  xs={6} md={3}   sx ={{fontWeight: '600', mt:2 }} > Gender: </Grid>
    <Grid  xs={6} md={3} sx={{mt:2}}>Female</Grid>
    <Grid  xs={6} md={3}   sx ={{fontWeight: '600', mt:2 }} > DOB: </Grid>
    <Grid  xs={6} md={3} sx={{mt:2}}>12-11-1991</Grid>
      </Grid> <br />
      
      <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Email:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >jane@ryan.com</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Phone:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >1233567890</Grid>
    <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Mobile:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >1234567890</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Address:</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >56 Webb Road, 9 Settlement Road, GLENGALA, VIC, 3235</Grid>
    </Grid> <br />

    </Grid>
    <Typography sx={{textAlign:'left',fontWeight:'bold'}}>Plan Details</Typography>
    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}> 
    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Type</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Client</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >NDIS Number</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >123456789</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan Start Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-4-2022</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan End Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >12-11-2024</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Service Region</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Sydney</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Service Type</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >abcd</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Status</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Active</Grid>
    </Grid> <br />

    </Grid>
    <Typography sx={{textAlign:'left',fontWeight:'bold'}}>Medical Details</Typography>
    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Primary Disability</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Physical disability</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Allergies</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Skin rashes</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Notes</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} ></Grid>
    </Grid> <br />

    </Grid>
    <Typography sx={{textAlign:'left',fontWeight:'bold'}}>Other Details</Typography>
    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Aboriginal/Torres Strait Islander</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Agreement Signed Date</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >1-06-2022</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Plan Management Current Rate</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >fdgfgg</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Additional Emails</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >English, Spanish</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Cultural Background</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >abc@gmail.com</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Other Primary Language</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Spanish</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Setup Completed By</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Sam Johnson</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Assigned To</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} > Bella Curry </Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Living Arrangements</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Cultural Requirements</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >-</Grid>
    </Grid> <br />

    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Interests</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >Reading, singing</Grid>
    </Grid> <br />



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
