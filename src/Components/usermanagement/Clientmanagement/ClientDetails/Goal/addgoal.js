import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Duration from "./Duration";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  let navigate = useNavigate();

    function applyjob() {
      navigate("/goaladdtask");
      console.log("navigate", navigate);
    }
  return (
    <>
  
     <PrimarySearchAppBar/>
    <Container >

    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  
  <Grid item xs={12} md={10} >
  <Typography sx={{fontSize:'30px', textAlign:"left", pb:5}}>Add Goal</Typography> 
  <Paper sx={{border:"1px solid grey", pb:5}}>
    <Box sx={{ flexGrow: 2, mb:3 }}>
      <Grid container spacing={4} columns={12} sx={{  m:2  }} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography>Goal Name:</Typography>
      <div>
        <TextField
          id="outlined-size-small"
          size="Large"
          placeholder="Learn Swimming"

        />       
      </div>     
    </Box>
        </Grid>
        </Grid>

       <Grid container spacing={4} sx={{mt:1}}>
      <Grid item xs={12} md={5}>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      
        <InputLabel id="demo-simple-select-label">Duration:</InputLabel>
          <Duration/>     
      </div>     
    </Box>
      </Grid>
      </Grid>
      </Grid>     
    </Box>
    <Grid container sx={{mt:15}}>     
      <Grid item xs={12} md={12} sx={{display:"flex", alignContent:"center", justifyContent:"center"}} >
      <Button variant="contained" onClick={applyjob} sx={{textTransform:"capitalize"}}>Add Task</Button>  
      </Grid>
      </Grid>
    </Paper>
   
  </Grid>
</Grid>
   </Container>

    
    </>
  );
}
