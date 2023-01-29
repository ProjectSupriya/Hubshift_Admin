import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CampaignIcon from "@mui/icons-material/Campaign";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>
   
 
    <Container>
      <Box  sx={{ flexGrow: 1,}}>
       
        
        <Box sx={{ width: '100%',backgroundColor:'#fff', borderRadius:'50px' }}>
       
      <Grid sx={{p:3,display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>        
      <Grid item xs={2}></Grid>
      <Grid item xs={10}> <Typography sx={{mt:5 ,mb:5, fontSize:'28px',fontWeight:'700'}}>Stakeholder: Physiotherapist</Typography> </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>    
          <Item elevation={0}>
          <Typography
                component="h1"
                variant="h6"
                fontWeight="700"
                color={"#000"}
                fontSize={'17px'}
              >
             Full Name :
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}> 
          <Typography textAlign="left">Ms. Genn Glan</Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}> <Typography
                component="h1"
                variant="h6"
                fontWeight="700"
                color={"#000"}
                fontSize={'17px'}
              >
                Email
              </Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
          <TextField
          label=""
          id="outlined-size-small"
          defaultValue="gennglan@gmail.com"
          size="small"
          fullWidth
        />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}> <Typography
                component="h1"
                variant="h6"
                fontWeight="700"
                color={"#000"}
                fontSize={'17px'}
              >
             Phone Number
              </Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
          <TextField
          label=""
          id="outlined-size-small"
          defaultValue="1234567890"
          size="small"
          fullWidth
        />
          </Item>
        </Grid>
       
        <Grid item xs={8} >
    <Item elevation={0}><Button variant="contained"  sx={{mt:5,borderRadius:'10px', textTransform:'capitalize'}}>
   Save Changes
</Button></Item>
  </Grid>
    
      </Grid>
      
    </Box>
        
       
      </Box>
      
    </Container>
    </>
  );
}

