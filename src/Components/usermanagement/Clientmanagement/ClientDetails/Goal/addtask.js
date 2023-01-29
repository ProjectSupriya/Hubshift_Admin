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
import Status from './status';
import Checkbox from './checkbox';
import { TextareaAutosize } from '@mui/material';
import Date from './date'
import Attach from './attach';
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
import Priority from './priority';
import './Styling/Goal.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));
const Input = styled("input")({
  display: "none",
});

export default function ColumnsGrid() {
    
  return (
    <>
  
    <PrimarySearchAppBar/>
    <Container >
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
    <Grid container spacing={2}>  
  <Grid item xs={12} md={12} >
  <Typography fontSize='20px' fontWeight='bold' pb={2} >Goal Name: Learn Swimming</Typography>
  <Typography fontSize='20px' fontWeight='bold' pb={2} >Add Task</Typography>
  <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',mb:2}}>
   <Link style={{textDecoration: 'none'}} to ='/goaladdhourly'>

     <Button className='Buttonstyle' variant='contained' >
     Add Hourly Tasks
     </Button>

     </Link>
    </Box>
    <Box sx={{ flexGrow: 2, mb:3 , display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Grid container spacing={4} columns={12} sx={{  m:2  }} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography fontSize='16px' fontWeight='bold' >Title:</Typography>
        <TextField
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
      <Typography fontSize='16px' fontWeight='bold' >Completion Date:</Typography>
        <Date />
      </div>    
    </Box>
        </Grid>
        </Grid>

       <Grid container spacing={2} sx={{mt:1}}>
      <Grid item xs={12} md={6}> 
      <Typography fontSize='20px' fontWeight='bold' >Frequency of Task:</Typography>    
      <Checkbox/>
      </Grid>
      <Grid item xs={12} md={6}> 
      <Typography fontSize='20px' fontWeight='bold' >Priority</Typography>    
      <Priority/>
      </Grid>
      </Grid>  

      <Grid container sx={{m:1}}>
          <Grid item xs={12} md={3}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    
   <Typography sx={{m:1, fontWeight:"bold"}}>Attach Document: </Typography>
     
    </Box>
        </Grid> 
        <Grid item xs={12} md={4}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    
    <Attach/>
     
    </Box>
        </Grid> 
          </Grid>

          <Grid item xs={12} md={12}>
                <Item
                  elevation={3} 
                  className="FileUpload1"
                  
                >
                  <Box  
                  className="FileUploadBox"
                    sx={{
                     
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button className="FileButton"
                        
                          variant="contained"
                          component="span"
                        >
                          Choose File
                        </Button>
                      </label>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                        />
                      </label>
                    </Stack>
                    <Button className="UploadButton"
                    
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>

          <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontSize:'16px', fontWeight:600, mb:1}}>Note:</Typography>
    <TextareaAutosize
              aria-label="minimum height"
              minRows={12}
             label="Note"
             placeholder='Note'
              style={{
                width: "100%",
                borderRadius: "5px",
                fontFamily: "Arial",
                color: "#000000",
                outline: "#0c7dee",
              }}
            />
     
    </Box>

        </Grid> 
          </Grid>

         
          <Grid container spacing={2} sx={{mt:1}}>
      <Grid item xs={12} md={6}>  
      <Typography style={{fontSize:'16px', fontWeight:600}}>Status:</Typography>   
      <Status/>
      </Grid>
      </Grid>  
     
      <Grid container spacing={2} sx={{mt:10, mb:3}}>
      
      <Grid item xs={12} md={12} sx={{display:"flex", alignContent:"center", justifyContent:"center"}} >
      <Button variant="contained" sx={{ textTransform:"capitalize", m:1, backgroundColor:"#01C1EB"}}>Save</Button>  
      <Button variant="contained" sx={{ textTransform:"capitalize", m:1, backgroundColor:"#01C1EB"}}>Add New</Button>  
      </Grid>    
      </Grid>
     
      </Grid>     
    </Box>
    {/* </Paper> */}
   
  </Grid>
</Grid>
</Grid>
</Grid>
    </Container>

    
    </>
  );
}
