import React from "react";
import {Container,Typography,Box,TextField,Grid,Paper,styled,Button, InputAdornment} from "@mui/material";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import SearchIcon from '@mui/icons-material/Search';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const Viewnote = () => {

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

              <Grid item xs={7} md={7}>
                <Typography fontSize= "20px" fontWeight='bold' > View Community Access Provider </Typography>
                   
              </Grid>    
             

              <Grid item  md={12}>
                <Item elevation={0}  >
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'>  Provider   </Typography>
                     
                    <TextField fullWidth id="fullWidth"
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon/>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}  >
                  
                  <Box>
                  
                     <Typography fontSize= "16px" fontWeight='bold'> Service Hours </Typography>
                     
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

            

 
    
      <Grid item md={12} style={Buttongrid} >
      <Button style={Buttonsty} variant="contained" >Save</Button>
      </Grid>
      


            

            </Grid>
          
          </Grid>

        </Grid>
     
      </Container>
    </>
  );
};

export default Viewnote;