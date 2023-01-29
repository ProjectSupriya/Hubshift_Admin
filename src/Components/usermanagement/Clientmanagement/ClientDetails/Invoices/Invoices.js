import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Daterange from './daterange'
import InvoicesTable from './InvoicesTable'
import Date from './Date';


export default function Timesheet() {
    const [status,setStatus]=React.useState(false)

  return (
    <>
  
    
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={12} md={12} >
    <Box sx={{ flexGrow: 2, mb:3 }}> 

      <Grid container spacing={4} columns={12} sx={{  m:2  }} >

      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6}>

     {/* <Item elevation={0}  > */}

    <Box sx={{m:1, maxWidth: "100%" }}>

        <Typography
            sx={{
                fontsize: "20px",
                color: "#000000",
                fontWeight: "700",
                p: 0,
            }}
        >
            From Date
        </Typography>
        <Date />

    </Box>

       </Grid>

       <Grid item xs={12} md={6}>


<Box sx={{m:1, maxWidth: "100%" }}  >

   <Typography
       sx={{
           fontsize: "20px",
           color: "#000000",
           fontWeight: "700",
       }}
   >
       To Date
   </Typography>
   <Date />

</Box>

  </Grid>

        <Grid item xs={12} md={6} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography sx={{pb:1, fontWeight:"bold"}}>Duration </Typography>
        <Daterange/>      
      </div>     
    </Box>
        </Grid>

        <Grid item xs={12} md={6} >
      <Button onClick={()=>setStatus(!status)} variant="contained" sx={{m:5,display:'flex',flexDirection:'row', justifyContent:'center'
      ,textTransform:"capitalize"}}>Show</Button> 
      </Grid>
        </Grid>
      </Grid> 

      <Grid item xs={12} md={12}sx={{mt:5}}>
   
   {
     status? <div> <InvoicesTable/> </div>:null
   }
        
 </Grid>    
    </Box>
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
