import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, 
    Typography,useTheme,Stack, Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Container } from '@mui/system';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    btn: {
      
      backgroundColor: "#01C1EB !important",
      width: "150px",
      height: "50px",
    },
  
    fileupload: {
      backgroundColor: "#fff",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    fileupload1: {
      backgroundColor: "#E0DCDC !important",
      width: "150px",
      color: "#000000 !important",
    },
  
    fileupload2: {
      backgroundColor: "#01C1EB !important",
      width: "150px",
    },
    Boxsty:{
      paddingLeft:'20px',
    },
  })); 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
  
    color: theme.palette.text.dark,
  }));

  const Input = styled("input")({
    display: "none",
  });

const FirstStep = () => {
    const theme = useTheme();
  const classes = useStyles(theme);

  let navigate = useNavigate();  


  function Next() {
    navigate("/offboardingstep2");
  }

   const Typographysty = {
    fontSize:"16px",
    fontWeight:"bold"
    }

   
    return (

        <>

      <Container>

     

      <Box sx={{mt:15,border:1}}>
         
        

<Paper elevation={2 } sx={{m:10,}}>

      <Grid container spacing={2}>


         <Grid item xs={12} md={2}>
            <Item elevation={0}>

            <Typography style={Typographysty}>
            Step 1
            </Typography>

            <Typography mt={1} style={Typographysty}>
            Step 1 / 9
            </Typography>

            </Item>

       </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                  Referrer/Plan Manager:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Employee ID:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Employee’s Email ID:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Termination Type:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Voluntary" />
                <FormControlLabel  control={<Checkbox />} label="Involuntary" />
               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Termination Reason:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Last Day Worked:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Final Pay Date:
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Resignation Letter Received?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />
               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Resignation Letter
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
            <Item>
                
                  <Box className={classes.fileupload}>
                   
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button className={classes.fileupload1}
                        
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

                    <Button className={classes.fileupload2}
                     
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
            </Grid>
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Termination Letter or
                Severance Letter Provided?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />
               </FormGroup>
                </Box>

              </Item>
            </Grid>
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                RTermination Letter or
                Severance Letter
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
            <Item>
                
                  <Box className={classes.fileupload}>
                   
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button className={classes.fileupload1}
                        
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

                    <Button className={classes.fileupload2}
                     
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
            </Grid>
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Participant Notified?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />
                <FormControlLabel  control={<Checkbox />} label="NA" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>

       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Participant Notified?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />
                <FormControlLabel  control={<Checkbox />} label="NA" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
            
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Supervisor/s Notified?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
            
       </Grid>

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Area Manager Notified?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
            
       </Grid>  

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Employee's Handover?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
            
       </Grid>  

       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                  Mobile Number 
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                  Emails
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid xs={12} md={12}>
              <Box
                sx={{
                  padding:'10px',
                  display: "flex",
                  mt: 3,
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <Button 
                  onClick={Next}
                  className={classes.btn}
                  size="large" variant='contained'  
                  autoFocus
                >
                  Save & Next
                </Button>

              </Box>
            </Grid>

            

      </Grid>
      </Paper>

      

     </Box>

      </Container>

            
        </>
    );
};

export default FirstStep;