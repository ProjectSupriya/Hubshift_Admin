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
import Category from './category'
import { FormControlLabel, Radio, RadioGroup, Stack, TextareaAutosize } from '@mui/material';
import Date from './date'
import "../Goal/Styling/Goal.css"

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
  
  <Grid item xs={12} md={10} >
  <Typography sx={{fontSize:'40px', textAlign:"left", pb:5}}>Add Task</Typography> 
  <Paper elevation={0}>
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
      <Typography style={{fontSize:'16px', fontWeight:600}}>Title:</Typography>
        <TextField
          // label="Title"
          id="outlined-size-small"
          size="small"
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
      <Typography style={{fontSize:'16px', fontWeight:600}}>Assigned To:</Typography>
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
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography style={{fontSize:'16px', fontWeight:600}}>Category:</Typography>
        <Category/>
       
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
      <Typography style={{fontSize:'16px', fontWeight:600}}>Due Date:</Typography>
        <Date />
      </div>    
    </Box>
        </Grid>
        </Grid>

      

     
      <Grid container sx={{mt:2}}>

      <Grid item xs={12} md={12}>

<Item
    elevation={0}
    sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
    }}
>

    <Typography padding='10px' fontWeight='bold'>Attach Document</Typography>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
    >


        <FormControlLabel value="anyone" control={<Radio />} label="Upload" />
        <FormControlLabel value="private" control={<Radio />} label="Capture" />

    </RadioGroup>

</Item>

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


               <Grid item xs={12} md={12}>
<Box className="Addtaskcapturebtn">
    <Typography mt={2} paddingLeft='25px' fontWeight='bold'>
        If Capture Radio Button is Selected</Typography>

    <Item className='Addtaskcapturebtn2'
        elevation={0}>

        <Typography padding='10px' fontWeight='bold'>Attach Document</Typography>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >


            <FormControlLabel value="anyone" control={<Radio />} label="Upload" />
            <FormControlLabel value="private" control={<Radio />} label="Capture" />

        </RadioGroup>

    </Item>
    <Box sx={{ paddingLeft: '20px' }}>
        <Button variant='contained' sx={{ backgroundColor: "#01C1EB !important",}}
        >Clict to Capture</Button>
    </Box>
</Box>
               </Grid>
          
          </Grid>

          <Grid container sx={{mt:2}}>
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
          <Grid container sx={{mt:15, mb:3}}>
      <Grid item xs={5} >
      </Grid>
      <Grid item xs={2} >
      <Button variant="contained" sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>Save</Button>  
      </Grid>
      <Grid item xs={5} >
      </Grid>
      </Grid>

     
      </Grid>     
    </Box>
    

    </Paper>
  </Grid>
</Grid>

    </Container>

    
    </>
  );
}
