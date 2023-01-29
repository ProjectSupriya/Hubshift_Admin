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
  
} from "@mui/material";
// import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../../../.././Sidebar/appbar";

// const useStyles = makeStyles((theme) => ({
  
// }));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const EditPlanManager = () => {

  // const theme = useTheme();
  // const classes = useStyles(theme);

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
                    // textAlign: "left",
                    color: "#000000",
                    fontWeight: "bold",
                    p: 2,
                  }}
                >
                  Edit Plan Manager
                </Typography>
              </Grid>

              <Grid item xs={12} md={7}>
                
                 <Typography
                  fontSize="18px"
                  sx={{
                    color: "#000000",
                    fontWeight: "bold",
                    p: 2,
                  }}
                >
                  Business Details 
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
                      Plan Manager Name
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
                      Website
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
                      ABN
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container>

              <Grid item xs={12} md={7}>
                
                <Typography
                 fontSize="18px"
                 sx={{
                   mt:8, 
                   color: "#000000",
                   fontWeight: "bold",
                   p: 2,
                 }}
               >
                 Primary Contact 
               </Typography>
             </Grid>

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
                      First Name
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
                      last Name
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container>
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
                      Email
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

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
                      Phone
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
                      Mobile
                    </Typography>
                    <TextField  fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={7}>
                
                <Typography
                 fontSize="18px"
                 sx={{
                   mt:8,
                   color: "#000000",
                   fontWeight: "bold",
                   p: 2,
                 }}
               >
                Invoice Details
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
                     Primary Invoice Email
                   </Typography>
                   <TextField  fullWidth id="fullWidth" />
                 </Box>
               </Item>
             </Grid>
              
              <Grid container spacing={4}>

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
                     }}
                   >
                     Add Additional Email
                   </Typography>
                   <TextField  fullWidth id="fullWidth" />
                 </Box>

               </Item>
             </Grid>

             <Grid item xs={12} md={4}>
               
              <Button variant="contained" sx={{marginTop:'45px',width:120,backgroundColor:'#01C1EB !important'}}>
                 Add
                 </Button>
            
             </Grid>

             </Grid>

             <Grid item xs={12} md={12} sx={{mt:10,mb:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Button variant="contained" sx={{width:120,backgroundColor:'#01C1EB !important'}}>
                 Create
                 </Button>
             </Grid>


            </Grid>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPlanManager;
