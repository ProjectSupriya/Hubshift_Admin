import React from "react";
import {Container,Typography,Box,TextField,Grid,Paper,styled,Button } from "@mui/material";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Client from './SearchClient';


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

            <Grid item xs={12} md={12}>
                <Typography fontSize='20px' fontWeight='bold'> Funds Management </Typography>
            </Grid>

              <Grid item xs={12} md={6}>

              <Item
                  elevation={0} >
                 
                  <Box>
                   
                    <Typography fontSize='16px' fontWeight='bold'>
                     
                    Select Client:
                    </Typography>
                    <Client/>
                  </Box>
                </Item>
                

              </Grid>

      <Grid item md={12} mt={10} style={Buttongrid} >
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