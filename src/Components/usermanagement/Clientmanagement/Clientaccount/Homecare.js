import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import DropDown from "./countrydropdown";
import Date from "./Date";
import GenderDdown from './GenderDdown'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function Homecare() {
  return (
    <Container>

      <Paper elevation={0} sx={{ }}>

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

           

          <Grid container spacing={2}>

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
                    Title
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    First Name
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    Middle Name
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    Last Name
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

           

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Gender
              </Typography>
              <GenderDdown />

        </Grid>

            <Grid item xs={12} md={8}>
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
                                        marginBottom: 2,
                                    }}
                                >
                                    Due Date
                                </Typography>
                                <Date />

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
                    Email
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

          
            </Grid>

         </Grid>

        </Box>

      </Paper>

    </Container>
  );
}
