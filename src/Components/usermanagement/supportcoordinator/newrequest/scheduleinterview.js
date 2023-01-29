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
import { MapOutlined, Visibility } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Date from './date'


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
  <Box sx={{p:5}}>
  <Typography sx={{fontSize:'30px', textAlign:"left"}}>Schedule Interview</Typography> 
  <Typography sx={{fontSize:'17px', textAlign:"left", pt:2, pb:2}}>User's details</Typography>
  <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Name:</Grid>
    <Grid  xs={6} md={2} >Tom Arren</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Email:</Grid>
    <Grid  xs={6} md={2} >tomarren@gmail.com</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Phone;</Grid>
    <Grid  xs={6} md={2} >1224567890</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Mobile:</Grid>
    <Grid  xs={6} md={2} >1224567890</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Job Title:</Grid>
    <Grid  xs={6} md={2} >Registered Nurse</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Job Type:</Grid>
    <Grid  xs={6} md={2} >Casual</Grid>
      </Grid> <br />
      <hr/>
      </Box>
    <Box sx={{p:5}}>
      <Grid container spacing={2}>
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
      <Typography fontWeight="bold">Title</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
        />       
      </div>     
    </Box>
        </Grid>

        <Grid item xs={12} md={12} >
            <Item
                    elevation={0}
                    sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "left",
                    pl:0,
                    }}
            >
                
            <Typography padding='25px' fontWeight='bold' >Meeting type:</Typography>&nbsp;&nbsp;
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
           

            <FormControlLabel value="Video Conferencing"  control={<Radio />} label="Video Conferencing" />&nbsp;&nbsp;
            <FormControlLabel  value="Audio Conferencing"  control={<Radio />} label="Audio Conferencing" />&nbsp;&nbsp;
            <FormControlLabel  value="Chat"  control={<Radio />} label="Chat" />&nbsp;&nbsp;
            <FormControlLabel  value="Meet"  control={<Radio />} label="Meet" />
            </RadioGroup>

            </Item>

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
      <Typography fontWeight="bold">Date</Typography>
       <Date/>     
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
      <Typography fontWeight="bold">Time</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
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
      <Typography fontWeight="bold">Duration</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
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
      <Typography fontWeight="bold">Time Zone</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
        />      
      </div>    
    </Box>
        </Grid>

        </Grid>

        <Typography sx={{fontWeight:'bold', pt:4, pb:2}}>User Details</Typography>
        <Grid container spacing={2}>
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
      <Typography fontWeight="bold">Name</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
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
      <Typography fontWeight="bold">Mobile Number</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
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
      <Typography fontWeight="bold">Email</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
        />      
      </div>    
    </Box>
        </Grid>
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
      <Typography fontWeight="bold">Agenda</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
        />       
      </div>     
    </Box>
        </Grid>
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
      <Typography fontWeight="bold">Notes</Typography>
        <TextField
          id="outlined-size-small"
          size="small"
          multiline rows={4} 
        />       
      </div>     
    </Box>
        </Grid>
        <Grid item xs={12} md={12} >
            <Item
                    elevation={0}
                    sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "left",
                    pl:0,
                    }}
            >
                
            <Typography padding='25px' fontWeight='bold' >Reminder:</Typography>&nbsp;&nbsp;
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
           

            <FormControlLabel value="5 minutes"  control={<Radio />} label="5 minutes" />&nbsp;&nbsp;
            <FormControlLabel  value="10 minutes"  control={<Radio />} label="10 minutes" />&nbsp;&nbsp;
            </RadioGroup>

            </Item>

            </Grid>
        <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}} item xs={12} md={12}>
            <Button variant='contained' sx={{textTransform:"capitalize"}}>Save</Button>
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