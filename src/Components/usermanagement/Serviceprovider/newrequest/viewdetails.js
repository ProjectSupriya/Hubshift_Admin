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

    <Container >
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
 
    <Box  sx={{ flexGrow: 1,}}>     
      <Box >
      <Grid container spacing={2} sx={{mt:0}}>
  <Grid item xs={12} md={12} >
  <Typography fontWeight='bold'>Service Provider Details</Typography>
    <hr/>
    <Typography fontWeight='bold'>Company Details</Typography>
    <Grid  container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     
    
    <Grid container>
   <Grid  xs={6} md={4} sx ={{ fontWeight: '600', mt:2}} >Company Name</Grid>
    <Grid  xs={6} md={4} >ABC Company</Grid>
      </Grid> 

    <Grid container>
   <Grid  xs={6} md={4}  sx ={{ fontWeight: '600', mt:2}} > Company NDIS Registration Number </Grid>
    <Grid  xs={6} md={4} sx={{mt:2}}>123</Grid>
      </Grid> 
      
      <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Provider Code</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >ABC123</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Email</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >tomarren@gmail.com</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Phone</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >1244567890</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 1</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >56 Webb Road</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Address Line 2</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >hgjhjkjhgjhg</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Suburb</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >GLENGALA</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >State</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >VIC</Grid>
    </Grid> 

    <Grid container >
     <Grid  xs={6} md={4}   sx ={{ fontWeight: '600', mt:2}} >Postcode</Grid>
    <Grid  xs={6} md={4} sx={{mt:2}} >24</Grid>
    </Grid> 
    </Grid>

            <Grid item xs={12} marginTop='40px' className='styleitem'>
            <Item elevation={0}>
            <Button variant="contained" className='aprvbtn'>
             Approve</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" className='rjtbtn'>
            Reject</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outlined" >
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
