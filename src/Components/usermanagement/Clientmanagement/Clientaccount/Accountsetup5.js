import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StakeholderDdown from "./StakeholderDdown"
import { Container, Typography, TextField, Link, Button} from "@mui/material";
import {Dialog,DialogActions, DialogContent,DialogContentText} from "@mui/material";
import Draggable from "react-draggable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

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

export default function Accountsetup5() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    return (
        <Container>

            <Paper elevation={0}
                sx={{
                    backgroundColor: "#fff",
                    mb: 3,
                    mt: 15,
                    border: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}>



                <Grid container spacing={0}>

                    <Grid item xs={12} md={12}>
                        <Item elevation={0} >

                            <Box>

                                <Typography
                                    sx={{
                                        fontSize: "20px",
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
                        <Item elevation={0}>

                            <Box>

                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    Step 5 / 5
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        color: "black",
                                    }}
                                >
                                    Stakeholder details
                                </Typography>
                            </Box>
                        </Item>
                    </Grid>

                    
                    <Grid item xs={12} md={6} >

                      <Typography
                  sx={{
                    textAlign: "left",
                    ml: 1,
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    p: 0,
                  }}
                >
                  Stakeholder
                      </Typography>

                     <StakeholderDdown />
           
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}

                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
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
                                 Relationship with client (for family)
                                </Typography>
                                <TextField fullWidth id="fullWidth"  />
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6} >
                    
                        <Item
                            elevation={0} >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    
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
                                 Hospital Name (for hospital)
                                </Typography>
                                <TextField fullWidth id="fullWidth" />
                            </Box>
                        </Item>
                    </Grid>
                   
                    <Grid item xs={12} md={12}>
                        <Item
                            elevation={0}

                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
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
                                 Name
                                </Typography>
                                <TextField fullWidth id="fullWidth" />
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}

                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
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
                                  Emails
                                </Typography>
                                <TextField fullWidth id="fullWidth" />
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}

                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
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
                                 Password
                                </Typography>
                                <TextField fullWidth id="fullWidth" type='password' />
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={12}
                        sx={{
                            mt: 5,
                            display: "flex",
                            alignSelf: "flex-end",
                            justifyContent: "flex-end",
                        }}>

                        <Link href="/clientaccount3" sx={{ textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    m: 1,
                                    p: 1,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    width: "150px",
                                    border: 1,
                                    backgroundColor: '#01C1EB !important',
                                    color: '#FFFFFF',
                                }}
                            >
                                Previous
                            </Button>
                        </Link>


                            <Button onClick={handleClickOpen}
                                sx={{
                                    m: 1,
                                    p: 1,
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    width: "150px",
                                    border: 1,
                                    backgroundColor: '#01C1EB !important',
                                    color: '#FFFFFF',
                                }}
                            >
                                Next
                            </Button>

                    </Grid>

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
                            Account setup is successful.
                              
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
                                to=""
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
                    
                </Grid>
            </Paper>

        </Container>
    );
}
