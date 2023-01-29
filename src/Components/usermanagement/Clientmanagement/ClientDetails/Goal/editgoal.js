import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Status from './status';
import Checkbox from './checkbox';
import { TextareaAutosize } from '@mui/material';
import Date from './date'
import Attach from './attach';
import Stack from "@mui/material/Stack";
import ProfileImage from '../../../.././assets/profileimage.png';
import Profile from '../../../.././assets/profileimage2.png';
import Sound from '../../../.././assets/sound.png';


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
  
    
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>

    <Grid container spacing={2}>  
  <Grid item xs={12} md={12} >
  <Typography sx={{fontWeight:"bold", fontSize:"20px", pb:2}}>Edit Task</Typography>
  <Paper sx={{border:"1px solid grey", pb:5}}>
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
      <Typography style={{fontSize:'16px', fontWeight:600}}>Completion Date:</Typography>
        <Date />
      </div>    
    </Box>
        </Grid>
        </Grid>

       <Grid container spacing={2} sx={{mt:1}}>
      <Grid item xs={12} md={6}> 
      <Typography style={{fontSize:'16px', fontWeight:600}}>Frequency of Task:</Typography>    
      <Checkbox/>
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
                    // mt: 3,
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

          <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={12}>
          <img src={Sound}/>
          <Box sx={{p:2, backgroundColor:"#E3E3E3", borderRadius:'5px', mb:1}}>Don’t swim alone.</Box>
          </Grid>
            <Grid container spacing={1}>   
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={6}>  
            <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>9-Sep-2022, 12:44 pm </Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent:"end" }} item xs={12} md={6}>  
            <img
                      src={ProfileImage}
                      alt=""
                      style={{
                        objectFit: "contain",
                        mt: 0,
                        width: "4%",
                        borderRadius:"50px",
                      }}
                    />
            <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px", pl:1 }}>Francis Dsouza</Typography>
            </Grid>
            </Grid> 
            </Grid>
            <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={12}>
          <img src={Sound}/>
          <Box sx={{p:2, backgroundColor:"#E3E3E3", borderRadius:'5px', mb:1}}>Swim in designated areas supervised by lifeguards.</Box>
          </Grid>
            <Grid container spacing={1}>   
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={6}>  
            <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>9-Sep-2022, 12:40 pm </Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent:"end" }} item xs={12} md={6}>  
            <img
                      src={Profile}
                      alt=""
                      style={{
                        objectFit: "contain",
                        mt: 0,
                        // width: "7%",
                        borderRadius:"50px",
                      }}
                    />
            <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px", pl:1}}>Tom Arren</Typography>
            </Grid>
            </Grid> 
            </Grid>

          <Grid container spacing={2} sx={{mt:1}}>
      <Grid item xs={12} md={6}>  
      <Typography style={{fontSize:'16px', fontWeight:600}}>Status:</Typography>   
      <Status/>
      </Grid>
      </Grid>  
     
      <Grid container sx={{mt:10, mb:3}}>
      
      <Grid item xs={12} md={12} sx={{display:"flex", alignContent:"center", justifyContent:"center"}} >
      <Button variant="contained" sx={{ textTransform:"capitalize"}}>Update</Button>  
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
