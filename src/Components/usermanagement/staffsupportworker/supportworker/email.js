import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {RadioGroup,Radio} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../../../Sidebar/appbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Popup from './popup'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  return (
    <>
    
    <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
  <Box sx={{p:8}}>
  <Typography sx={{fontSize:'27px', textAlign:"left"}}>Training Docs Email from Admin to SW</Typography> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{pt:3,
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography fontWeight="bold">To</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          placeholder='tomarren@gmail.com'
        />       
      </div>     
    </Box>
        </Grid>
        </Grid>

        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{pt:3,
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography fontWeight="bold">Subject</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
          placeholder='Training Documents'
        />      
      </div>    
    </Box>
        </Grid>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{pt:3,
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography fontWeight="bold">Message</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          placeholder='Hi Tom,
        Please find the Training documents attached.
.
 .
                    Regards,
                        Admin'  
          multiline rows={6} 
        />       
      </div>     
    </Box>
        </Grid>
       
        <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}} item xs={12} md={12}>
           <Popup/>
            </Grid>



            </Grid>
        </Grid>
        </Box>
  </Grid>
  </Grid>
  </Container>
  </>
  );
}