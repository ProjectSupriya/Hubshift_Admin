import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../../Navbar/appbar";
import Button from '@mui/material/Button';
import ProfileImage from "../../assets/profileimage3.png";
import { height } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
// import Download from "../assets/download.png";
import Download from "../../assets/download.png";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// import Progressbar from './progressbar';
import Tab from './Table/tab';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
  return (
    <>
  
     
    <Container style={{paddingTop:"0px", paddingBottom:"0px"}}>
    <Grid container spacing={2}>
 
  {/* <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid> */}
  <Grid item xs={12} md={12}>
  <Typography fontSize="30px" fontWeight="bold">Appointment</Typography>

  <Box
      sx={{
        flexGrow: 1,
        mt: 5,
        
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
                <PersonIcon style={{ color: "#828282", fontSize: "25px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000" }}>NSW, Sydney</Typography>
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
                <EmailIcon style={{ color: "#828282", fontSize: "25px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000" }}>francisdsouza@gmail.com</Typography>
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
                <PhoneIcon style={{ color: "#828282", fontSize: "25px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000" }}>1234567890</Typography>
              </Box>
              <MapOutlinedIcon style={{ color: "#828282", fontSize: "25px" }} />
            </Box>
            {/* experience */}

            <Box sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
          <Box
              sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                Employee ID : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>  EMP004</Typography>
              
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
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                 Date of Joining : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}> 2-july-2022</Typography>
              
            </Box>

            </Box>
            {/* jon title */}

            <Box sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
          <Box
              sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                Job Title : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>  Ragistred Nurse</Typography>
              
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
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                 level : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}> 5</Typography>
              
            </Box>

            </Box>

            <Box sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                // justifyContent: "space-between",
              }}>
          <Box
              sx={{
                display: "flex",
                mt: 1,
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                Job Type : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}> Casual </Typography>
              
            </Box>

            </Box>

           

           
          

          </Item>
        </Grid>
       
      </Grid>
      
  </Box>
   
    <Tab/>
   
    
    
    </Grid>  
   </Grid>  

    </Container>

    
    </>
  );
}
