import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Supporttype from './SupporttypeDdown';
import { Container, Typography, FormControlLabel, RadioGroup, Radio, TextField, Button, Link } from "@mui/material";
import Date from './Date';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));


export default function Accountsetup2() {
  return (
    <Container>

      <Paper elevation={0} 
      sx={{ backgroundColor: "#fff", 
            mb: 3, 
            mt: 15,
             border: 1,
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           
         }}>
          <Grid container spacing={0}>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  pt: 2,
                  pb: 2,
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
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Step 2
                  </Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  // pt: 2,
                  // pb:2,
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
                    flexDirection: 'column',

                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Step 2 / 5
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Plan Details
                  </Typography>
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

                <Typography padding='10px' fontWeight='bold'>NDIS Client</Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >


                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>

              </Item>

              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >

                <Typography padding='10px' fontWeight='bold'>Aged Care?</Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >


                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>

              </Item>

              <Item
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >

                <Typography padding='10px' fontWeight='bold'>Self-funded?</Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >


                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>

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
                    NDIS Number (If Yes)
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                </Box>
              </Item>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>

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
                  Support type*
                </Typography>
                <Supporttype />
              </Grid>

            </Grid>

            <Grid item xs={12} md={6}>

              <Item elevation={0}  >

                <Box sx={{mt:4, maxWidth: "100%" }}  >

                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                      
                    }}
                  >
                    Plane Start Time
                  </Typography>
                  <Date />

                </Box>
              </Item>

            </Grid>

            <Grid item xs={12} md={6}>

              <Item elevation={0}  >

                <Box sx={{mt:4, maxWidth: "100%" }}  >

                  <Typography
                    sx={{
                      fontsize: "20px",
                      color: "#000000",
                      fontWeight: "700",
                      p: 0,
                      // marginBottom: 2,
                    }}
                  >
                    Plane End Time
                  </Typography>
                  <Date />

                </Box>
              </Item>

            </Grid>

            <Grid container>

              <Grid item xs={12} md={6}>

                <Item elevation={0}  >

                  <Box sx={{ maxWidth: "100%" }}  >

                    <Typography
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        p: 0,
                        marginBottom: 2,
                      }}
                    >
                      Service Start Time
                    </Typography>
                    <Date />

                  </Box>
                </Item>

              </Grid>

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
                    Current available funding field
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
                    Manual Funding Amount
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
                    Service Region
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
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
               
               <Link  href="/clientaccount1" sx={{textDecoration:'none'}}>
                  <Button
                    sx={{
                      m: 1,
                      p: 1,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      backgroundColor:'#01C1EB !important',
                      color:'#FFFFFF',
                    }}
                  >
                    Previous
                  </Button>
                </Link>  

                <Link  href="/clientaccount3" sx={{textDecoration:'none'}}>

                  <Button
                    sx={{
                      m: 1,
                      p: 1,
                      fontSize: "18px",
                      textTransform: "capitalize",
                      width: "150px",
                      border: 1,
                      backgroundColor:'#01C1EB !important',
                      color:'#FFFFFF',
                    }}
                  >
                    Next
                  </Button>

                </Link>
           </Grid>
          </Grid>
      </Paper>

    </Container>
  );
}
