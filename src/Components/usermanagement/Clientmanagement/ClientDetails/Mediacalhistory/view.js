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
import Stack from "@mui/material/Stack";

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
  <Grid item xs={12} md={10}>

    <Grid container spacing={2}>  
  <Grid item xs={12} md={12} >
  <Typography sx={{fontSize:'30px', textAlign:"left", pb:5}}>View Medical History</Typography> 
  
    <Box sx={{ flexGrow: 2, mb:3 , display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Grid container spacing={1} columns={12} sx={{  m:2  }} >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,pb:2, width: '100%'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography style={{fontSize:'16px', fontWeight:600, m:1}}>Title:</Typography>
        <TextField
          // label="Title"
          id="outlined-size-small"
          size="Medium"
          sx={{m:1}}
        />       
      </div>     
    </Box>
        </Grid>      
        </Grid>
        <Typography sx={{mb:1, fontWeight:"bold"}}>Attach Document: </Typography>
          <Grid item xs={12} md={12} >
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
    
      </Grid>     
    </Box>  
    <Grid container sx={{mt:10, mb:3}}>
      <Grid item xs={5} >
      </Grid>
      <Grid item xs={2} >
      <Button variant="contained" sx={{display:'flex',flexDirection:'row', justifyContent:'center',textTransform:"capitalize"}}>Save</Button>  
      </Grid>
      <Grid item xs={5} >
      </Grid>
      </Grid>
  </Grid>
</Grid>
</Grid>
</Grid>
    </Container>

    
    </>
  );
}
