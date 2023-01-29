import React from "react";
import {
  Box,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import Container from "@mui/material/Container";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
export default function clienteditbankdetails() {
  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>
            {/* code start here */}
            <Grid container spacing={0}>

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
                      Edit Bank Details
                    </Typography>
                    <Typography
                      sx={{
                        mt: 3,
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Edit Bank Details
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Package
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Preferred Billing method
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container>
              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Payment Instructions/Notes
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>
              </Grid>

               <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Default Bank Account Details
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      BSB
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Account Number
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Account Name
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Secondary Bank Account Details
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      BSB
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Account Number
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
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
                      Account Name
                    </Typography>
                    <TextField fullWidth id="fullWidth"  />
                  </Box>
                </Item>
              </Grid>
              

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  mt: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Button
                    sx={{
                      m: 1,
                      p: 1,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      backgroundColor: "#01C1EB !important",
                      color: "#FFFFFF",
                    }}
                  >
                    Update
                  </Button>

               
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
