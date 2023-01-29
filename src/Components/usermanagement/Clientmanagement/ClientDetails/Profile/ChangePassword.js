import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ChangePassword() {
  
  return (
    <Container>

      <Paper elevation={0} sx={{ backgroundColor: "#fff",}}>

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
                       
          <Typography fontSize="25px" fontWeight="bold" > Change Password </Typography>
         
       </Grid>

            <Grid item xs={12} md={12}>
              <Item
                elevation={0}
                sx={{
                  mt:3,
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
                    Old Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'

                  id="fullWidth"
                   />
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
                    New Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'
                  id="fullWidth"
                   />
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
                    Comform Password
                  </Typography>
                  <TextField 
                  fullWidth 
                  type='password'
                  id="fullWidth"
                   />
                </Box>
              </Item>
            </Grid>

            <Grid mt={2} item xs={12} md={12}>
                <Button variant="contained"> Save changes</Button>
            </Grid>
            </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
