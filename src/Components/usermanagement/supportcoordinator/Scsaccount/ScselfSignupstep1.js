import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DropDown from "./countrydropdown";
import LevelDropdown from "./leveldropdown";
import { useNavigate } from "react-router-dom";
import Date from "./date";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ScselfSignupstep1() {
    let navigate = useNavigate();
    function ProfileSetupSecound() {
      navigate("/scselfSignupstep2");
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
                        Step 1
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
                        Step 1 / 5
                      </Typography>
                    </Box>
                  </Item>
                </Grid>

               
              </Grid>

          <Grid container spacing={0}>

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
                    First Name*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                    Last Name*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

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
                    Email*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

          </Grid>

          <Grid container spacing={0}>

            

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
                    Phone*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                    Mobile*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  mt:5,
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
                    Residential Address*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                sx={{ textAlign: "center", textDecoration: "underline" }}
              >
                Can’t find your residential address above?
              </Typography>
            </Grid>

          </Grid>

           {/* border start here */}
          <Grid sx={{ mt: 5}} container spacing={0}>

            <Grid item xs={12} md={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography>Enter Residential Address manually</Typography>
                </Box>
              </Box>
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Residential address line 1*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Residential address line 2*
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    City/Town
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid container>
            <Grid item xs={12} md={6}>
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
                Country*
              </Typography>
              <DropDown />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    PassCode
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Country
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>
            
            </Grid>

         </Grid>

            {/* border end here */}

            

           

            <Grid container spacing={2}>

            <Grid item xs={12} md={12}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Checkbox />
                  <Typography>
                    Postal address is the same as residential address.
                  </Typography>
                </Box>
              </Box>
            </Grid>

           

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:6,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Level*
              </Typography>
              <LevelDropdown />
            </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Typography
                    color={"#000000"}
                    variant="h6"
                    fontWeight={600}
                    sx={{ textAlign: "left", m: 2, fontSize: "25px" }}
                  >
                    Add Bank Details
                  </Typography>
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Bank Account Details
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    BSB
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Account Number
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    width: 1000,
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
                    Account Name
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid xs={12} md={12}>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <Button
                   onClick={ProfileSetupSecound}
                  size="large"
                  sx={{
                    background: "#008ED9",
                    p: 2,
                    textTransform: "capitalize",
                    fontsize: "30px",
                    fontWeight: "600",
                    height: "3.5em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "200px",
                    color: "#fff",
                    "&:hover": {
                      background: "#1DDFDA",
                      transition: ".5s",
                      boxShadow: 10,
                    },
                  }}
                  autoFocus
                >
                  Save & Next
                </Button>
              </Box>
            </Grid>

            </Grid>

      
        </Box>

      </Paper>

    </Container>
  );
}
