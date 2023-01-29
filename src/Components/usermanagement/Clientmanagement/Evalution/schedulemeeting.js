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
import TextField from '@mui/material/TextField';
import Date from './date'
import Table from './table'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  const [status,setStatus]=React.useState(false)
  return (
    <>
    
    <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
  <Box >
  <Typography sx={{fontSize:'30px', textAlign:"left"}}>Schedule Meeting</Typography> 
  <Typography sx={{fontSize:'17px', textAlign:"left", pt:2, pb:2}}>Client Meeting</Typography>
  
  <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Client Name:</Grid>
    <Grid  xs={6} md={2} >Tom Arren</Grid>
    <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >NDIS Number:</Grid>
    <Grid  xs={6} md={2} >1234567899</Grid>
      </Grid> <br />
      <Grid container>
   <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >NDIS Zone: </Grid>
    <Grid  xs={6} md={2} >NSW</Grid>
    <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Catalogue:</Grid>
    <Grid  xs={6} md={2} >June 2022</Grid>
    <Grid  xs={6} md={2}  sx ={{fontWeight: '600'}} >Status</Grid>
    <Grid  xs={6} md={2} >Active</Grid>
      </Grid>
      </Box>
    <Box>
      <Grid container spacing={2}>
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
                
            <Typography padding='25px' fontWeight='bold' >Meeting type:</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
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
      <Typography fontWeight="bold">Meeting Location</Typography>
        <TextField
          id="outlined-size-small"
          size="Medium"
        />      
      </div>    
    </Box>
        </Grid>
          
      <Grid item xs={12} md={12} sx={{mt:5,display:'flex',flexDirection:'row', justifyContent:'center',alignItems:"center"}}>
      <Typography  onClick={()=>setStatus(!status)} variant="contained" sx={{ textDecoration:"underline", textTransform:"capitalize"}}>
      Can’t find the location above?</Typography>  
      </Grid>
      
        </Grid>
        <Grid item xs={12} md={12} sx={{mt:10}}>
          
          {
            status? <div> <Table/> </div>:null
          }
        
      </Grid> 
        </Box>
  </Grid>
  </Grid>
  </Container>
  </>
  );
}