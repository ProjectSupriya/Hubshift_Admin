import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../Sidebar/appbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Category from './category'
import { TextareaAutosize } from '@mui/material';
import Date from './date'
import Severity from './saverity';
import Radio from './radio';
import Attach from './attach'; 

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
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>

    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  
  <Grid item xs={12} md={10} >
  <Typography sx={{fontSize:'40px', textAlign:"left", pb:5}}>Add Incident</Typography> 
  <Paper sx={{border:"1px solid grey", pb:5}}>
    <Box sx={{ flexGrow: 2, mb:3 , display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Grid container spacing={4} columns={12} sx={{  m:2  }} >
      <Typography sx={{fontWeight:"bold", mb:1}}>Details of person filling form</Typography>
      <Grid container spacing={2} sx={{mb:2}}>
        <Grid item xs={12} md={6} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography>Full Name</Typography>
        <TextField
          label="Full name"
          id="outlined-size-small"
          size="Medium"
        />       
      </div>     
    </Box>
        </Grid>

        <Grid item xs={12} md={4} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography>Date</Typography>
    <Date/>    
      </div>     
    </Box>
        </Grid>
       
        </Grid>

        <Typography sx={{fontWeight:"bold", mb:1}}>Incident Details</Typography>
<Grid container spacing={2} sx={{mb:2}}>
        <Grid item xs={12} md={5}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
    <Typography>Date of incident: *</Typography>
    <Date/>
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
      <Typography>Name/s of person/s involved:</Typography>
      <TextField
          label="Name/s of person/s involved:"
          id="outlined-size-small"
          size="Medium"
        />
      </div>
     
    </Box>
        </Grid>

        </Grid>

        <Typography sx={{fontWeight:"bold", mb:1}}>Client*</Typography>
        <Grid container spacing={2} sx={{mb:2}}>
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
        <Category/>
       
      </div>
     
    </Box>
        </Grid>
       
        </Grid>

        
          <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Description of incident:</Typography>
    <TextareaAutosize
              aria-label="minimum height"
              minRows={6}
             label=""
             placeholder=''
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
      
          <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Witnesses (include contact details):</Typography>
    <TextareaAutosize
              aria-label="minimum height"
              minRows={6}
             label=""
             placeholder=''
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

          <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Injury (if applicable):</Typography>
    <TextareaAutosize
              aria-label="minimum height"
              minRows={6}
             label=""
             placeholder=''
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

          <Typography sx={{fontWeight:"bold", mb:1}}>Severity</Typography>
        <Grid container spacing={2}>
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
       <Severity/>
       
      </div>
     
    </Box>
        </Grid>
       
        </Grid>

        <Typography sx={{fontWeight:"bold", mb:1, mt:1}}>Reporting of the incident</Typography>
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
                <Typography >Incident Reported to:</Typography>
                <TextField
                    label="Name/s of person/s involved:"
                    id="outlined-size-small"
                    size="Medium"
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
                <Typography>Date</Typography>
                <Date/>
                </div>
                
                </Box>
                    </Grid>
                

                    </Grid>

        <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Follow Up Action</Typography>
    <TextareaAutosize
              aria-label="minimum height"
              minRows={6}
             label=""
             placeholder=''
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

          <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Is this a reportable incident to the NDIS Commission? *</Typography>
    <Radio/>
     
    </Box>
        </Grid> 
          </Grid>

          <Grid container sx={{m:1}}>
          <Grid item xs={12} md={12}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch', pt:5 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography sx={{fontWeight:"bold", mb:1}}>Is the risk assessment filled? *</Typography>
    <Radio/>
     
    </Box>
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
                  sx={{
                    display: "flex",
                    mt: 3,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                    width: 800,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      m: 1,
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
                        <Button
                          sx={{
                            background: "#E0DCDC",
                            width: "150px",
                            color: "#000000",
                            fontWeight: "600",
                            "&:hover": {
                              background: "#E0DCDC",
                              transition: ".5s",
                              boxShadow: 10,
                            },
                          }}
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
                    <Button
                      sx={{
                        background: "#01C1EB",
                        fontSize: "18px",
                        textTransform: "capitalize",
                        width: "150px",
                        color: "#ffffff",
                        fontWeight: "600",
                        "&:hover": {
                          background: "#01C1EB",
                          transition: ".5s",
                          boxShadow: 10,
                        },
                      }}
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
              </Grid>

              <Grid container sx={{mt:5}}>
      <Grid item xs={5} >
      </Grid>
      <Grid item xs={2} >
      <Button variant="contained" sx={{backgroundColor:"#01c1eb", display:'flex',flexDirection:'row', justifyContent:'center',alignItems:"center", textTransform:"capitalize"}}>Save</Button>  
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
