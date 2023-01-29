import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  styled,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  
} from "@mui/material";
import PrimarySearchAppBar from "../../../../../Sidebar/appbar";
import Relationship from './RelationshipDdown'
import CountryDdown from './Country'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const AddPlanManager = () => {

  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2} sx={{}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={10} md={10}>

            <Grid  container>

            <Grid item xs={12} md={7}>
                <Typography
                  fontSize="22px"
                  sx={{
                    color: "#000000",
                    fontWeight: "bold",
                    p: 2,
                  }}
                >
                  Add Emergency Contact
                </Typography>
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
                     Emergency Contact Name*
                    </Typography>
                    <TextField  fullWidth id="fullWidth" required />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                 <Box>
                    <Typography
                        sx={{
                            textAlign: "left",
                            //   ml: 1,
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 1,
                        }}
                    >
                       Relationship
                    </Typography>

                    <Relationship />

                    </Box>

                <Box sx={{display:'flex',justifyContent:"flex-start",alignItems:'flex-start'}}>
                 <FormGroup row >
                <FormControlLabel sx={{p:2}} control={<Checkbox  />} label="Is a primary contact" />
               <FormControlLabel sx={{p:2}} control={<Checkbox />} label="Emergency contact" />
               </FormGroup>
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
                     Contact Number
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
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
                     Alternate Contact Number
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
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
                      Address line 1
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
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
                      Address line 2
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
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
                      City/Town
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
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
                      Province/State/County
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

                <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6} mt={1}>

        <Typography fontWeight="bold">Country </Typography>
         <CountryDdown />
        
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
                      Postcode
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

               </Grid>

               <Grid container>
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
                    Cancel
                    </Button>

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
                      Save
                    </Button>

             </Box>
                    </Grid>
                </Grid> 

             

            </Grid>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddPlanManager;
