import React from "react";
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
} from "@mui/material";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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

const Addsupportworkers = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>

        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
              justifyContent: "start",
            }}
          >
            <MailOutlineIcon sx={{ fontSize: '80px', color:"#01C1EB" }} />
            <Typography sx={{ fontSize:"25px"}}>Hubshift</Typography>
          </Box>
        </Grid>
      </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography fontSize="20px" fontWeight='bold' mt={2} mb={1}>
                Add Client
              </Typography>

              <Paper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 50,
                  border: "1px solid black",
                }}
              >
               
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                   <Grid item md={4} xs={12}>
                      <TextField 
                        margin="normal"
                        required
                        fullWidth
                        label="First Name"
                        name="First Name"
                        autoFocus
                      />
                    </Grid>

                    <Grid item md={4} xs={12}>
                      <TextField
                        margin="normal"
                        size="medium"
                        fullWidth
                        name="Middle Name"
                        label="Middle Name"
                      />
                    </Grid>

                    <Grid item md={4} xs={12}>
                      <TextField
                        margin="normal"
                        size="medium"
                        fullWidth
                        required
                        name="Last Name"
                        label="Last Name"
                      />
                    </Grid>   

                    <Grid item md={6} xs={12}>
                      <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        margin="normal"
                        size="medium"
                        required
                        fullWidth
                        name="PhoneNumber"
                        label="Phone Number"
                        type="Phone Number"
                        id="PhoneNumber"
                        autoComplete="current-password"
                      />
                    </Grid>

                  

                    
                    <Grid item md={12} xs={12}>
                  <Box
                    sx={{
                      marginTop:6,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{ textTransform: "none" }}
                      variant="contained"
                      type="submit"
                      sx={{
                        m:2,
                        backgroundColor: "#05C3DD !important ",
                        height: "50px",
                        width: "150px",
                      }}
                    >
                    Continue
                    </Button>

                    <Button
                      onClick={handleClickOpen}
                      style={{ textTransform: "none" }}
                      variant="contained"
                      type="submit"
                      sx={{
                        m:2,
                        backgroundColor: "#05C3DD !important ",
                        height: "50px",
                        width: "150px",
                      }}
                    >
                      Selt Setup
                    </Button>

             </Box>
                    </Grid>

             

                  </Grid>


              </Paper>

            </Grid>
          </Grid>
        </Container>

    {/* model for Submit button */}
        <div>
                      <Dialog
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
                            Self Setup request with login credentials sent successfully to the user.
                              
                            </Typography>
                          </DialogContentText>
                        </DialogContent>

                        <DialogActions 
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
                                to="/clientaccount1"
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

      </div>
    </>
  );
};

export default Addsupportworkers;
