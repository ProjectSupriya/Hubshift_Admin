import React from 'react';
import { Box, Grid,Link,Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function Bankdetails() {
  return (
    <>
  
  <Box sx={{mt:4,display:'flex',justifyContent:'space-between',alignItems:'center'}}>

<Typography sx={{marginLeft:'-15px', fontWeight:"bold", }}>Invoice Details </Typography>
<Typography > <Link href='/clienteditbankdetails' > <EditIcon fontSize='medium'/> </Link> </Typography> 

</Box>

    <Grid container spacing={2}>
 
    <Grid  sx={{mt:5,display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}
    container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     

    <Grid container mt={2}>
   <Grid  xs={6} md={3} > <Typography fontWeight='bold'> Package: </Typography> </Grid>
    <Grid  xs={6} md={3} > NDIS - NDIA Managed </Grid>
      </Grid> 

      <Grid container mt={2}>
   <Grid  xs={6} md={3}> <Typography fontWeight='bold'> Preferred Billing Method:</Typography>  </Grid>
    <Grid  xs={6} md={3}> Credit Card </Grid>
      </Grid> 

      <Grid container mt={2}>
   <Grid  xs={6} md={3}> <Typography fontWeight='bold'> Payment Instructions/Notes:</Typography>  </Grid>
    <Grid  xs={6} md={3}> asaaaddfdwdwdsa </Grid>
      </Grid> 

      <Grid container mt={2}>
      <Grid  xs={6} md={2} > <Typography fontWeight='bold'> Default Bank Account Details: </Typography> </Grid> 
    <Grid  xs={6} md={2} > 213232 </Grid>
      </Grid> 

      <Grid container mt={2}>
  

    <Grid  xs={6} md={2}> <Typography fontWeight='bold'> BSB: </Typography>  </Grid>
    <Grid  xs={6} md={2}> 1234 </Grid>

    <Grid  xs={6} md={2}> <Typography fontWeight='bold'> Account Number: </Typography>  </Grid>
    <Grid  xs={6} md={2} > 323244434334</Grid>

    <Grid  xs={6} md={2}> <Typography fontWeight='bold'>Account Name:</Typography> </Grid>
    <Grid  xs={6} md={2} > sadf</Grid>
      </Grid>

      <Grid container mt={2}>
  

  <Grid  xs={6} md={4}> <Typography fontWeight='bold'> Secondary Bank Account Details: </Typography>  </Grid>
  {/* <Grid  xs={6} md={2}>  </Grid> */}

  <Grid  xs={6} md={2}> <Typography fontWeight='bold'> BSB:  </Typography>  </Grid>
  <Grid  xs={6} md={2} >3244 </Grid>

  <Grid  xs={6} md={2}> <Typography fontWeight='bold'>Account Name:</Typography> </Grid>
  <Grid  xs={6} md={2} > 323244434334</Grid>
    </Grid>



   </Grid>

   </Grid>
       

      
 
    </>
  );
}
