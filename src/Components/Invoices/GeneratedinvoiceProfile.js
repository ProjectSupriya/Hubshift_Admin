import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box,Button,Grid,Link,Paper} from '@mui/material';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../Sidebar/appbar";
import ProfileImage from "../assets/profileimage2.png"; 
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Progressbar from './progressbar';
import Generateinnvoicetable1 from './Generateinnvoicetable1';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function Clientetails() {

    const buttongrid = {
        marginTop: '30px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
      
      const buttonsty = {
        backgroundColor: "#01C1EB"
      }
  return (
    <>
  
     <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>

      {/* profile card */}

    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  
  <Grid item xs={12} md={10}>

  <Box> <Typography fontSize='22px' fontWeight='bold'> Generated Invoices</Typography> </Box>
  <Box mt={2}> <Typography fontSize='20px' fontWeight='200'> Invoice Generated Successfully </Typography> </Box>



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

  <Box sx={{mt:4,display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <Link style={{textDecoration: 'none'}} href ='/editinvoice'>

     <Button variant='contained' sx={{ backgroundColor:'#01c1eb', textTransform:'capitalize'}}>
     Edit Invoice
     </Button>

     </Link>
    </Box>

        <Grid mt={4} item  md={12}>

        <Typography fontSize='26px' fontWeight='bold' >NDIS Provider: </Typography>

<Grid  sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}
container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>     



<Grid container mt={2} sx={{borderTop:1}}>
 <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Number: </Grid>
 <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 12345 </Grid>
</Grid> <br />

<Grid container mt={2}>
 <Grid  xs={6} md={3}  sx ={{mt:1,fontWeight: '500',}} > Invoice Date: </Grid>
 <Grid  xs={6} md={3} sx ={{mt:1,fontWeight: '500'}} > 11-Jul-2022 </Grid>
</Grid> <br />

<Grid container>
<Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > Client: </Grid>
<Grid  xs={6} md={2} sx={{mt:2}}> Jane Ryan </Grid>

<Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Number: </Grid>
<Grid  xs={6} md={2} sx={{mt:2}}> 4324343434 </Grid>

<Grid  xs={6} md={2}   sx ={{fontWeight: '600', mt:2 }} > NDIS Zone: </Grid>
<Grid  xs={6} md={2} sx={{mt:2}}> NSW </Grid>
  </Grid> <br />
  

<Grid container sx={{mb:2}}>
 <Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Category:</Grid>
<Grid  xs={6} md={3} sx={{mt:2}} >ABC</Grid>
<Grid  xs={6} md={3}   sx ={{ fontWeight: '600', mt:2}} >Status:</Grid>
<Grid  xs={6} md={3} sx={{mt:2}} >Active</Grid>
</Grid> <br />

<Grid container mt={2}>
 <Grid  xs={6} md={3}  sx ={{fontWeight: '500',}} > Referrer/Plan Manager: </Grid>
 <Grid  xs={6} md={3} sx ={{fontWeight: '500'}} > Harri Mortin </Grid>
</Grid> <br />



</Grid>
      
        </Grid> 

         <Box mt={8}>      
        <Generateinnvoicetable1/>
        </Box> 

        <Grid item xs={12} md={12} style={buttongrid}>
           <Button variant="contained" style={buttonsty}> Dowload PDF</Button> 
          </Grid>
  </Grid>

    </Grid>
      
    </Container>
 
    </>
  );
}
