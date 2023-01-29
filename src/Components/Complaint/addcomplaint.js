import React from "react";
import {Container,Typography,Box,TextField,Grid,Paper,styled,Button } from "@mui/material";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Client from './Client';
import Serviceprovider from "./Serviceprovider"
import Supportcoordinator from "./Supportcoordinator"
import Supportworker from "./Supportworker"
import Status from "./Status";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const Addcomplaint = () => {

const Buttongrid={
    display:'flex',flexDirection:'row', justifyContent:'center'
}
const Buttonsty={
  backgroundColor:'#01C1EB',width:'100px'

}


  return (
    <>
      <PrimarySearchAppBar />

      <Container>
        <Grid container spacing={2} sx={{mb:10}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={10} md={10}>

            <Grid container spacing={1}>

              <Grid item md={12}>
                <Typography fontSize="22px" fontWeight='bold' > Add complaint</Typography>
                   
              </Grid> 
              
              <Grid item xs={12} md={4}>

             <Item elevation={0}>
    
          <Box>
          <Typography fontSize= "16px" fontWeight='bold'>  Date of Complaint:  </Typography>
       
             <TextField fullWidth id="fullWidth"
      
               />
               </Box>
  </Item>
  
              </Grid>

              <Grid item xs={12} md={4}>

             <Item elevation={0}>
    
          <Box>
          <Typography fontSize= "16px" fontWeight='bold'>  Date of Complaint:  </Typography>
       
             <TextField fullWidth id="fullWidth"
      
               />
               </Box>
         </Item>
  
              </Grid>

              <Grid item xs={12} md={4}>

              <Item
                  elevation={0} >
                 
               
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Client*
                    </Typography>
                    <Client/>
                  </Box>
                </Item>
  
              </Grid>

              <Grid item xs={12} md={4}>

              <Item
                  elevation={0} >
                 
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Supportcoordinator*
                    </Typography>
                    <Supportcoordinator/>
                  </Box>
                </Item>
  
              </Grid>

              <Grid item xs={12} md={4}>

              <Item
                  elevation={0} >
                 
               
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Supportworker*
                    </Typography>
                    <Supportworker/>
                  </Box>
                </Item>
  
              </Grid>

              <Grid item xs={12} md={4}>

              <Item
                  elevation={0} >
                 
               
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Serviceprovider*
                    </Typography>
                    <Serviceprovider/>
                  </Box>
                </Item>
  
              </Grid>
             
              <Grid item xs={12} md={6}>

              <Item elevation={0}>
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'>  Date of Complaint:  </Typography>
                     
                    <TextField fullWidth id="fullWidth"
                    
                    />
                  </Box>
                </Item>
                

              </Grid>

              <Grid item  md={12}>
                <Item elevation={0}>
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'>  Description of Complaint:  </Typography>
                     
                    <TextField fullWidth id="fullWidth"
                    
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}  >
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'> Proposed immediate and Corrective Actions: </Typography>
                     
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}  >
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'> Actual completion date for actions: *</Typography>
                     
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>

              <Item
                  elevation={0} >
                 
               
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Status*
                    </Typography>
                    <Status/>
                  </Box>
                </Item>
                

              </Grid>


            

 
    
      <Grid item md={12} mt={5} style={Buttongrid} >
      <Button style={Buttonsty} variant="contained" >Save</Button>
      </Grid>
      


            

            </Grid>
          
          </Grid>

        </Grid>
     
      </Container>
    </>
  );
};

export default Addcomplaint;