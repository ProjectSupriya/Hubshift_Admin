import * as React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Checkbox,
  FormHelperText,
  DialogTitle,
} from "@mui/material";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Signupfifthstep() {

  const [open, setOpen] = React.useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    let navigate = useNavigate();  
  function Pre() {
    navigate("/furthsetup");
    console.log("navigate", navigate);
  }
  function Next() {
    navigate("/fifthsetup");
    console.log("navigate", navigate);
  }

  return (
    <Container>

      <Paper elevation={0} sx={{ backgroundColor: "#fff", mb: 3,mt:15,border:1 }}>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            backgroundColor: "#fff",
            mt: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

             <Grid container spacing={0}>

             <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      pt: 2,
                      pb:2,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        width: 2000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "25px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        Step 5
                      </Typography>
                    </Box>
                  </Item>
              </Grid>

                <Grid item xs={12} md={12}>
                  <Item
                    elevation={0}
                    sx={{
                      display: "flex",
                      pt: 2,
                      pb:2,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        width: 2000,
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "25px",
                          fontWeight: 500,
                          color: "black",
                        }}
                      >
                        Step 5 / 5
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

               
              </Grid>

            <Grid container spacing={0}>

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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1500,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                    }}
                  >
                    Reference 1
                  </Typography>
                  <TextField 
                  fullWidth 
                  label="First Name"

                  id="fullWidth"
                   />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={6}>
              
            <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                  
                  <TextField fullWidth id="fullWidth" label='Emaile' />
                </Item>
            

            </Grid>

            <Grid item xs={12} md={6}>
              
            <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                  
                  <TextField fullWidth id="fullWidth" label='Password' type='password' />
                </Item>
            

            </Grid>


            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  mt:4,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1500,
                    maxWidth: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                    }}
                  >
                    Reference 2
                  </Typography>
                  <TextField 
                  fullWidth 
                  label="First Name"

                  id="fullWidth"
                   />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={6}>
              
              <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                    
                    <TextField fullWidth id="fullWidth" label='Emaile' />
                  </Item>
              
  
              </Grid>
  
              <Grid item xs={12} md={6}>
                
              <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                    
                    <TextField fullWidth id="fullWidth" label='Password' type='password' />
                  </Item>
              
  
              </Grid>

              <Grid item xs={12} md={12} sx={{ mt: 5, width: 1000 }}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                    m: 0,
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    onClick={Pre}
                    sx={{
                      m: 1,
                      p: 1,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      fontSize: "18px",
                      backgroundColor:'#01C1EB !important',
                      color:'#FFFFFF',
                      
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                onClick={handleClickOpen}
                    sx={{
                      m: 1,
                      p: 1,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      fontSize: "18px",
                      backgroundColor:'#01C1EB !important',
                      color:'#FFFFFF',

                    }}
                  >
                    Submit
                  </Button>
                  {/* <SetupAc/> */}
                </Item>
              </Grid>

           

           

            </Grid>

         

          


      
        </Box>

      </Paper>

      {/* model for Submit button */}
         <div>
                      <Dialog
                        // fullWidth={true}
                        maxWidth={"xs"} //------- 'sm'   'md'   'lg'   'xl'
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                      >
                        
                        <Box
                          mt={5}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ fontSize: "60px", color: "green" }}
                          />
                        </Box>
                        <DialogContent
                        >
                          <DialogContentText>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: 20,
                                color: "black",
                              }}
                            >
                           Profile setup is successful.                              
                            </Typography>
                          </DialogContentText>
                        </DialogContent>

                        <DialogActions //className={classes.Model}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ marginBottom: "60px", display: "flex" }}
                          >
                            <Box>
                              <Link
                                style={{ textDecoration: "none" }}
                                to="/swdetails"
                              >
                                <Button
                                  sx={{
                                    backgroundColor: "#05C3DD !important ",
                                    width: "100px",
                                  }}
                                  variant="contained"
                                  autoFocus
                                  onClick={handleClose}
                                >
                                  Done
                                </Button>
                              </Link>
                            </Box>
                          </div>
                        </DialogActions>
                      </Dialog>
        </div>

    </Container>
  );
}
