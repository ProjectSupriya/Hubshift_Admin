import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography, TextField, Button, Link } from "@mui/material";

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
              <Item elevation={0} >
            
                <Box>
                
                <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Step 3
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
                    Step 3 / 5
                  </Typography>
                  <Typography
                    sx={{
                      mt:1,
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Medical details
                  </Typography>
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
                    Service Region
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
                    Allergies
                  </Typography>
                  <TextField fullWidth id="fullWidth" multiline maxRows={5} minRows={5} />
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
                    Notes
                  </Typography>
                  <TextField fullWidth id="fullWidth" multiline maxRows={10} minRows={10} />
                </Box>
              </Item>
              </Grid>

              <Grid item xs={12} md={12}
               sx={{ 
                mt: 5,
                display: "flex",
                alignSelf: "flex-end",
                justifyContent: "flex-end",
               }}
               >
              
               <Link  href="/clientaccount2" sx={{textDecoration:'none'}}>
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

                <Link  href="/clientaccount4" sx={{textDecoration:'none'}}>

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
