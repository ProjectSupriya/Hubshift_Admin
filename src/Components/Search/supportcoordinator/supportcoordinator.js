import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Table from './table';
import TextField from '@mui/material/TextField';
import Role from './role'
import Experience from './experience'
import Level from './level'

export default function ColumnsGrid() {
  const [status,setStatus]=React.useState(false)
  return (
    <>   
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={12} md={12} >
    <Box sx={{ flexGrow: 2, mb:3 }}> 
      <Grid container spacing={4} columns={12} sx={{  m:2  }} >
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Support Coordinator Full Name"
          id="outlined-size-small"
          size="small"
        />       
      </div>     
    </Box>
        </Grid>
        </Grid>
        <Grid container spacing={4} sx={{mt:1}}>
      <Grid item xs={12} md={6}>
      <Typography fontWeight="bold">Role</Typography>
      <Role/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
      <Grid item xs={12} md={6}>
      <Typography fontWeight="bold">Experience</Typography>
      <Experience/></Grid>
      <Grid item xs={12} md={6}>
      <Typography fontWeight="bold">Level</Typography>
      <Level/></Grid>
      </Grid> 
      <Grid container spacing={2} sx={{mt:1}}>
        <Grid item xs={12} md={4}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Suburb"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Geographic Region"
          id="outlined-size-small"
          size="small"
        />      
      </div>    
    </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Postcode"
          id="outlined-size-small"
          size="small"
        />       
      </div>    
    </Box>
        </Grid></Grid>
      <Grid container sx={{mt:5}}>
      <Grid item xs={5} >
      </Grid>
      <Grid item xs={2} >
      <Button  onClick={()=>setStatus(!status)} variant="contained" sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>Search</Button>  
      </Grid>
      <Grid item xs={5} >
      </Grid>
      </Grid>
      </Grid>     
    </Box>
    <Grid item xs={12} md={12}sx={{mt:10}}>
   
   {
     status? <div> <Table/> </div>:null
   }
        
 </Grid>
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
