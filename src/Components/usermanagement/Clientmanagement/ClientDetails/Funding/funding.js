import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../Sidebar/appbar';
import ProfileImage from "../assets/profileimage2.png";
import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Email } from '@material-ui/icons';
import DescriptionIcon from '@mui/icons-material/Description';
import PhoneIcon from "@mui/icons-material/Phone";
import Progressbar from './progressbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tab from './tab'

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
  
     <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
  <Typography sx={{fontSize:'30px',fontWeight:'bold', pb:3}}>Funding/Budget</Typography>
  <Paper sx={{border:"1px solid grey"}}>
  <Box
      sx={{
        flexGrow: 1,
       
        // borderRadius:"10px",
        border: 10,
        borderColor: "#CAF5FF",
      }}
    >
      <Grid container spacing={1}>

        <Grid item xs={12} md={3}>
          <Item elevation={0} sx={{pt:5}}>
            <img
              src={ProfileImage}
              alt=""
              style={{
                objectFit: "contain",
                mt: 0,
                width: "100%",
                // height: "150px",
                
              }}
            />
          </Item>
        </Grid>

        <Grid item xs={12} md={8}>
          <Item elevation={0}>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'start'}}>
              <Typography
              sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}
            >
              Jane Ryan

            </Typography>
              </Box>
       <Box sx={{display:'flex', flexDirection:'row', justifyContent:'start'}}>
       <Email sx={{color:"#3498db"}} /> &nbsp;&nbsp;&nbsp;&nbsp;<RemoveRedEyeIcon sx={{color:"#9b59b6"}} /> 
       </Box>
          
            </Box>
           

            {/* icon Section */}
            <Typography
              sx={{ color: "#000", fontSize: "12px" }}>
              31, Female, {"DOB:12/12/1991"}
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
                <DescriptionIcon style={{ color: "#e4d3ec", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>Plan managed</Typography>
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
                <LocationOnIcon style={{ color: "#e74c3c", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>VIC,GLENGALA</Typography>
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
                <EmailIcon style={{ color: "#3498db", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>francisdsouza@gmail.com</Typography>
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
                <PhoneIcon style={{ color: "#1abc9c", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>1234567890</Typography>
              </Box>

          
            </Box>

            {/* NDIS Number: 4356789 */}

            <Box
              sx={{
                display: "flex",
                mt: 2,
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
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "13px" }}
              >
                NDIS Number : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "13px" }}>  4356789 </Typography>
              
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
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "13px" }}
              >
                NDIS Zone : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "13px" }}> NSW </Typography>
              
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
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "13px" }}
              >
                Catalogue : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "13px" }}> Jul 2022 </Typography>
              
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
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "13px" }}
              >
                Status : 
              </Typography> &nbsp;
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "13px" }}> NSW </Typography>
              
            </Box>

            </Box>

            <Box
              sx={{
                display: "flex",
                mt: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              >
                 {/* border 1st */}

                 <Box sx={{border:2,borderColor: '#01c1eb', borderRadius:"10px"}}>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row", alignItems:'center'}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                  &nbsp;&nbsp; <Typography> 10 </Typography>
                  
                 </div>    
                      <Typography>Appointments</Typography>
                  </div>
                </Box>
                 {/* border 2nd */}

                <Box sx={{border:2,borderColor: '#01c1eb', borderRadius:"10px"}}>
                 <div style={{display: "flex", flexDirection: "column", padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row", alignItems:'center'}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                  &nbsp;&nbsp;   <Typography> $250000 </Typography>
                  
                 </div>    
                      <Typography>Remaining Funds</Typography>
                  </div>
                </Box>

                 {/* border 3rd */}
                <Box sx={{border:2,borderColor: '#01c1eb', borderRadius:"10px"}}>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row", alignItems:'center'}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                  &nbsp;&nbsp; <Typography> 24 </Typography>
                  
                 </div>    
                      <Typography>Remaining Hours</Typography>
                  </div>
                </Box>

              </Box>


          

            {/* Contract Period */}
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
               Agreement Period
              </Typography> &nbsp;
             
              
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
                 5%
              </Typography> &nbsp;
             
              
            </Box>
            </Box>

            <Progressbar/>
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
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                From
              </Typography> 
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>  2/Jul/2022</Typography>
              
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
                sx={{ fontWeight: 600, color: "#000", fontSize: "16px" }}
              >
                To 
              </Typography> 
              <Typography sx={{ fontWeight: 400, color: "#000", fontSize: "16px" }}>1/Jul/2023</Typography>
              
            </Box>
            </Box>
            
          </Item>
        </Grid>     
      </Grid>     
    </Box>   
    </Paper> 
   <Tab/>
    </Grid> 
     </Grid>
    </Container>

    
    </>
  );
}
