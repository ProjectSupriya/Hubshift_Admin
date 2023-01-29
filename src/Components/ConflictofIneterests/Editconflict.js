import React from "react";
import {Container,Typography,Box,TextField,Grid,Paper,styled,Button } from "@mui/material";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Client from './Client';
import Serviceprovider from "./Serviceprovider"
import Supportcoordinator from "./Supportcoordinator"
import Supportworker from "./Supportworker"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const EditConflic = () => {

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
                <Typography fontSize="22px" fontWeight='bold' > Edit Conflict</Typography>
                   
              </Grid> 
              
              <Grid item xs={12} md={6}>

<Item
    elevation={0} >
   
    <Box>
     
      <Typography fontSize='16px' fontWeight='bold'>
       
      Support coordinator*
      </Typography>
      <Supportcoordinator/>
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
             
              

              <Grid item  md={12}>
                <Item elevation={0}>
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'>  Nature of Conflict or Interest  </Typography>
                     
                    <TextField fullWidth id="fullWidth"  multiline rows={2} 
                    
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item  md={12}>
                <Item elevation={0}>
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'>  How is this being managed?</Typography>
                     
                    <TextField fullWidth id="fullWidth"  multiline rows={2} 
                    
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item  md={12}>
                <Item elevation={0}>
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'> Date of Declaration </Typography>
                     
                    <TextField fullWidth id="fullWidth"  multiline rows={2} 
                    
                    />
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

export default EditConflic;