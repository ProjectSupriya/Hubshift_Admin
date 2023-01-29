import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Popup from './selfsetuppopup'



export default function ColumnsGrid() {
  
  return (
    <>   
    <Container >
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              justifyContent: "start",
            }}
          >
            <MailOutlineIcon sx={{ fontSize: '80px', color:"#01C1EB" }} />
            <Typography sx={{ fontSize:"25px"}}>Hubshift</Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography sx={{fontWeight:"bold", pt:8, fontSize:"20px"}}>Add Service Provider</Typography>
      <Paper sx={{ flexGrow: 2, mb:3, border:"1px solid grey", width:"100%" ,mt:3}} elevation={10}>
    <Grid container spacing={2}>
  <Grid item xs={12} md={12} >
    <Box>
     
      <Grid container spacing={2} columns={12} sx={{  p:10  }} >
      <Typography variant='h5'>Registration Form</Typography>
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
          label="Name/Company name*"
          id="outlined-size-small"
          size="small"
        />       
      </div>     
    </Box>
        </Grid>
        </Grid>
        <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
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
          label="Email"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
          label="Phone Number"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        </Grid>
       
        <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={12}>
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
          label="ABN Number/ Business Number *"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        </Grid>
        <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
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
          label="Provider Code*"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
          label="Alternate contact"
          id="outlined-size-small"
          size="small"
        />
       
      </div>
     
    </Box>
        </Grid>
        </Grid>
      
      <Grid container sx={{mt:5,display:'flex',flexDirection:'row', justifyContent:'center'}}> 
      <div><Popup/></div>
      </Grid>
      </Grid>
         
    </Box>
  </Grid>
</Grid>
</Paper>
    </Container>

    
    </>
  );
}
