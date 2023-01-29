import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../../../../../Sidebar/appbar";
import ProfileImage from "../../../../../assets/profileimage3.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Progressbar from "./progressbar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",

  color: theme.palette.text.dark,
}));

export default function ColumnsGrid() {
  return (
    <>
      <PrimarySearchAppBar />

      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>

        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Typography style={{ fontSize: "25px", fontWeight: 600 }}>
          Leaves & Payroll
          </Typography>
        </Grid>
      </Container>

      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Box
            sx={{
              flexGrow: 1,
              mt: 1,

              border: 5,
              borderColor: "#CAF5FF",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                  <img
                    src={ProfileImage}
                    alt=""
                    style={{
                      objectFit: "contain",
                      mt: 0,
                      width: "100%",
                      height: "150px",
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={7}>
                <Item elevation={0}>
                  <Typography
                    sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}
                  >
                    Francis Dsouza
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start",
                        alignItems: "flex-start",
                      }}
                    >
                      <PersonIcon
                        style={{ color: "#828282", fontSize: "25px" }}
                      />
                      &nbsp;{" "}
                      <Typography sx={{ color: "#000" }}>
                        NSW, Sydney
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start",
                        alignItems: "flex-start",
                      }}
                    >
                      <EmailIcon
                        style={{ color: "#828282", fontSize: "25px" }}
                      />
                      &nbsp;{" "}
                      <Typography sx={{ color: "#000" }}>
                        francisdsouza@gmail.com
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start",
                        alignItems: "flex-start",
                      }}
                    >
                      <PhoneIcon
                        style={{ color: "#828282", fontSize: "25px" }}
                      />
                      &nbsp;{" "}
                      <Typography sx={{ color: "#000" }}>1234567890</Typography>
                    </Box>
                    <MapOutlinedIcon
                      style={{ color: "#828282", fontSize: "25px" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        Employee ID :
                      </Typography>{" "}
                      &nbsp;
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        {" "}
                        EMP004
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        Role :
                      </Typography>{" "}
                      &nbsp;
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        {" "}
                        Support Coordinator
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        Experience :
                      </Typography>{" "}
                      &nbsp;
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        {" "}
                        Mainstream
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        Level :
                      </Typography>{" "}
                      &nbsp;
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        2
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        Contract Period
                      </Typography>{" "}
                      &nbsp;
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "row",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        5%
                      </Typography>{" "}
                      &nbsp;
                    </Box>
                  </Box>
                  <Progressbar />
                  <Box
                    sx={{
                      display: "flex",
                      mt: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "column",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        From
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        {" "}
                        2/Jul/2022
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                        flexDirection: "column",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        To
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#000",
                          fontSize: "16px",
                        }}
                      >
                        1/Jul/2023
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>

      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>
          <Grid container xs={12} md={8}>
          <Typography style={{ fontSize: "18px", fontWeight: 600 }}>
          Edit Bank Details
          </Typography>
        
          </Grid>
        </Grid>
      </Container>

      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>
          <Grid container xs={12} md={4}>
        
          <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
          Bank Account Details
          </Typography>
          <TextField sx={{mt:1}} fullWidth  id="fullWidth" />
          </Grid> &nbsp;&nbsp;&nbsp;&nbsp;
          <Grid container xs={12} md={4}>
        
          <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
          BSB
          </Typography>
          <TextField sx={{mt:1}} fullWidth  id="fullWidth" />
          </Grid>
        </Grid>
      </Container>
      
      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}> 
             <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>
          <Grid container xs={12} md={4}>
        
          <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
          Account Number
          </Typography>
          <TextField sx={{mt:1}} fullWidth  id="fullWidth" />
          </Grid> &nbsp;&nbsp;&nbsp;&nbsp;
          <Grid container xs={12} md={4}>
        
          <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
          Account Name
          </Typography>
          <TextField sx={{mt:1}} fullWidth  id="fullWidth" />
          </Grid>
        </Grid>
      </Container>

      <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>    
          <Grid container spacing={1} >
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>
          <Grid sx={{display:'flex', flexDirection:'row', justifyContent:'center',  mb:4}} container xs={12} md={8}>
          <Button style={{width:250, background:'#1a90ff', padding:'12px', color:'#fff'}}>Update</Button>
        
          

          </Grid>

          
        </Grid>

        
      </Container>
    </>
  );
}
