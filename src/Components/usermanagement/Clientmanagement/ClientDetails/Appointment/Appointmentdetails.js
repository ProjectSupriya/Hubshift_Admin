import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Button from '@mui/material/Button';
import ProfileImage from "../../.././../assets/profileimage2.png"; 
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Progressbar from './progressbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapImage from "../../.././../assets/map2.png"; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function AppointmentDetails() {

 

  
  return (
    <>
  
     <PrimarySearchAppBar/>

    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>

  <Grid item xs={12} md={10}>

  <Grid container spacing={2}>

  <Grid item xs={6} md={10}><Typography fontSize="30px" fontweight="bold">Appointment Details</Typography> </Grid>
  <Grid item xs={6} md={2}> <Button variant="contained" >Ongoing</Button></Grid>
  </Grid>
  
 
  <Box
      sx={{
        flexGrow: 1,
        mt: 5, 
        border: 5,
        borderColor: "#CAF5FF",
      }}
    >
    
      {/* Profile Cart */}

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
              Jane Ryan

            </Typography>

            {/* icon Section */}

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
                  // alignItems: "flex-start",
                }}
              >
                <PersonIcon style={{ color: "#828282", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>plan managed</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  // alignItems: "flex-start",
                }}
              >
                <LocationOnIcon style={{ color: "#828282", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>VIC,GLENGALA</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  // alignItems: "flex-start",
                }}
              >
                <EmailIcon style={{ color: "#828282", fontSize: "20px" }} />
                &nbsp;{" "}
                <Typography sx={{ color: "#000",fontSize: "13px" }}>francisdsouza@gmail.com</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  // alignItems: "flex-start",
                }}
              >
                <PhoneIcon style={{ color: "#828282", fontSize: "20px" }} />
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
                  // alignItems: "flex-start",
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
                // alignItems: "flex-start",
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
                // alignItems: "flex-start",
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
                  // alignItems: "flex-start",
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

                <Box sx={{border:1,borderColor: '#CAF5FF'}}>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row"}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                      <Typography> 10 </Typography>
                  
                 </div>    
                      <Typography>Appointments</Typography>
                  </div>
                </Box>
                 {/* border 2nd */}

                <Box sx={{border:1,borderColor: '#CAF5FF'}}>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row"}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                      <Typography> $250000 </Typography>
                  
                 </div>    
                      <Typography>Remaining Funds</Typography>
                  </div>
                </Box>

                 {/* border 3rd */}
                <Box sx={{border:1,borderColor: '#CAF5FF'}}>
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding:'10px',margin:'auto'}}>

                  <div style={{display: "flex", flexDirection: "row"}}>
                  <Box sx={{backgroundColor:'#808080',height:'20px', width:'20px'}}></Box>
                      <Typography> 10 </Typography>
                  
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
               Contract Period
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
   

   {/* form details */}

   <Grid paddingLeft='10px' container spacing={2}>
 
 <Grid  sx={{mt:5,display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}
 container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     

 <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Support Type: </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> Core </Typography> </Grid>
   </Grid> 

   <Grid container mt={2}>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> Item Name:</Typography>  </Grid>
 <Grid  xs={6} md={3}> <Typography> Assistance in Supported Independent Living - Standard - Weekday Daytime </Typography>   </Grid>

 <Grid  xs={6} md={3}> <Typography fontWeight='bold'> Appointment Date & Time :</Typography>  </Grid>
 <Grid  xs={6} md={3}> <Typography> 1-Jun-2022 8:00 AM to 9:00 AM  </Typography> </Grid>

   </Grid> 

   <Grid container mt={2}>

   <Grid  xs={6} md={3}> <Typography fontWeight='bold'> Category:</Typography>  </Grid>
 <Grid  xs={6} md={3}> <Typography> Homecare </Typography> </Grid>

 <Grid  xs={6} md={3}> <Typography fontWeight='bold'> Appointment:</Typography>  </Grid>
 <Grid  xs={6} md={3}> <Typography> Regular </Typography> </Grid>
   </Grid>

   <Grid container mt={2}>

<Grid  xs={6} md={6}> <Typography fontWeight='bold'> Other Support Worker:</Typography>  </Grid>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> Service Provider:</Typography>  </Grid>
<Grid  xs={6} md={3}> <Typography> ABC Company </Typography> </Grid>
   </Grid>

   <Grid container mt={2}>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> Support Coordinator:</Typography>  </Grid>
<Grid  xs={6} md={3}> <Typography> Francis Dsouza </Typography> </Grid>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> Supervisor:</Typography>  </Grid>
<Grid  xs={6} md={3}> <Typography> Ricky Panther </Typography> </Grid>
</Grid>

 <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Qualifications Required: </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> Personal Care </Typography> </Grid>
 </Grid> 

 <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'>  Start-End Times: </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> 8:00 AM-9:00 AM </Typography> </Grid>
 </Grid> 

 <Grid container mt={2}>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> Start From (Location):</Typography>  </Grid>
<Grid  xs={6} md={3}> <Typography> Sydney </Typography> </Grid>

<Grid  xs={6} md={3}> <Typography fontWeight='bold'> End To (Location):</Typography>  </Grid>
<Grid  xs={6} md={3}> <Typography> Brisbane </Typography> </Grid>
</Grid>




</Grid>

    </Grid>

   
      {/* map image section */}

      <Grid mt={7} container spacing={1}>

        <Grid item xs={12} md={12}>
   
                    <Typography>
                          <img
                      src={MapImage}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "100%" }}
                    />
                    </Typography>
        </Grid>
      
      </Grid>

      <Grid paddingLeft='10px' container spacing={2}>
 
 <Grid  sx={{mt:5,display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}
 container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}> 

 <Grid container mt={2}>

<Grid  xs={6} md={2}> <Typography fontWeight='bold'> KM To:</Typography>  </Grid>
 <Grid  xs={6} md={2}> <Typography> 15 KM </Typography>   </Grid>

 <Grid  xs={6} md={2}> <Typography fontWeight='bold'> KM With:</Typography>  </Grid>
 <Grid  xs={6} md={2}> <Typography> 18 KM  </Typography> </Grid>

   </Grid>     

 <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Duration: </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> 160 mins </Typography> </Grid>
   </Grid> 

   <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Flexible with Time: </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> No </Typography> </Grid>
   </Grid> 

   <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Task </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> No tasks have been added </Typography> </Grid>
   </Grid> 

   <Grid container mt={2}>
<Grid  xs={6} md={3} > <Typography fontWeight='bold'> Task </Typography> </Grid>
 <Grid  xs={6} md={3} > <Typography> No notes have been added </Typography> </Grid>
   </Grid> 

   

   

   




</Grid>

    </Grid>

  
   



 </Grid>
 </Grid>
 </Container>

  

    
    </>
  );
}
