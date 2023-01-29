import React from 'react';
import { Box, Button, Divider, Grid,Typography} from '@mui/material';
import Container from "@mui/material/Container";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Invoicestable2 from './InvoicesTable2';

export default function Swdetails() {
  return (
    <>
  
     <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>

      {/* profile card */}

    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  
   
  <Grid item xs={12} md={8} >

  <Grid container spacing={2}>

    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1, fontSize:"26px",mb:4}}>Invoice Details </Typography>

    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={3}  sx ={{fontWeight: '500'}} > Added By: </Grid>
    <Grid  xs={6} md={3} sx ={{fontWeight: '500'}} > Admin Name </Grid>
      </Grid> <br />

    <Grid container mt={2} sx={{borderTop:1}}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > NDIS Provider: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > - </Grid>
    </Grid> <br />

    <Grid container mt={2} sx={{borderTop:1}}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Number: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 12345 </Grid>
    </Grid> <br />

    <Grid container mt={2}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Date: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 11-Jul-2022 </Grid>
    </Grid> <br />

    <Grid container>
   <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > Client: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> Jane Ryan </Grid>

    <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Number: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> 4324343434 </Grid>

    <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Zone: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> NSW </Grid>
      </Grid> <br />
      
  
    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Category:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >ABC</Grid>
    <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Status:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >Active</Grid>
    </Grid> <br />

    <Grid container mt={2}>
     <Grid  xs={6} md={3}  sx ={{fontWeight: '500',}} > Referrer/Plan Manager: </Grid>
     <Grid  xs={6} md={3} sx ={{fontWeight: '500'}} > Harri Mortin </Grid>
    </Grid> <br />

   

    </Grid>

   {/* Table Section */}
   <Box mt={8}>
           <Divider/>
        <Invoicestable2/>

    </Box>

    <Typography sx={{ fontWeight:"bold", textAlign:'left', pt:1, pb:1, fontSize:"26px",mb:4}}>Invoice Details </Typography>

    <Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={3}  sx ={{fontWeight: '500'}} > Added By: </Grid>
    <Grid  xs={6} md={3} sx ={{fontWeight: '500'}} > Admin Name </Grid>
      </Grid> <br />

    <Grid container mt={2} sx={{borderTop:1}}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > NDIS Provider: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > - </Grid>
    </Grid> <br />

    <Grid container mt={2} sx={{borderTop:1}}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Number: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 12345 </Grid>
    </Grid> <br />

    <Grid container mt={2}>
     <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Date: </Grid>
     <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 11-Jul-2022 </Grid>
    </Grid> <br />

    <Grid container>
   <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > Client: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> Jane Ryan </Grid>

    <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Number: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> 4324343434 </Grid>

    <Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Zone: </Grid>
    <Grid  xs={6} md={2} sx={{mt:2}}> NSW </Grid>
      </Grid> <br />
      
  
    <Grid container sx={{mb:2}}>
     <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Category:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >ABC</Grid>
    <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Status:</Grid>
    <Grid  xs={6} md={3} sx={{mt:2}} >Active</Grid>
    </Grid> <br />

    <Grid container mt={2}>
     <Grid  xs={6} md={3}  sx ={{fontWeight: '500',}} > Referrer/Plan Manager: </Grid>
     <Grid  xs={6} md={3} sx ={{fontWeight: '500'}} > Harri Mortin </Grid>
    </Grid> <br />

   

    </Grid>

    {/* Table Section */}
   <Box mt={8}>
           <Divider/>
        <Invoicestable2/>

    </Box>



     <Grid item md={12} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <Button variant='contained' size="large" sx={{backgroundColor:'#01C1EB !important'}}> Back</Button>
     </Grid>

   
    </Grid>

    


        </Grid>
       

    </Grid>
      
    </Container>
 
    </>
  );
}
