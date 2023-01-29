import React from 'react';
import { Grid,Typography,}
  from '@mui/material';


const Profile = () => {

  return (
    <>

      <Grid mt={2} container spacing={2} >
       
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





    </>
  )
}
export default Profile;