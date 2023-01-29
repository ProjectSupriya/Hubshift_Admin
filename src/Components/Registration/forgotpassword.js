import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  let navigate = useNavigate();
 
  function Reset() {   
    navigate('/resetpassword');
    console.log('navigate',navigate)
    
  }
  return (
    <Container>
    <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            elevation={0}
            sx={{
            //   display: "flex",
            //   flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <MailOutlineIcon sx={{ fontSize: '80px', color:"#01C1EB" }} />
            <Typography sx={{ fontSize:"25px"}}>Hubshift</Typography>
          </Box>
        </Grid>
      </Grid>
        <Paper>
    <Box container sx={{ flexGrow: 1, mt:10 , border:"1px solid #01C1EB"}}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
         <Box sx={{display:'flex', flexDirection:'column',Width:'100%', justifyContent:"center", }}>          
         <Box sx={{display:'flex', flexDirection:'row',maxWidth:'100%', justifyContent:"center", }}>
         <Typography sx={{maxWidth:'400px', fontWeight:600, color:'#303030', 
         fontSize:'20px', m:4, lineHeight:'24px'}}>Forgot Password</Typography>
         </Box>
         </Box>
          <Item elevation={0} sx={{display:'flex',mt:2,flexDirection:'row', justifyContent:'center', 
          alignItems:'center'}}>
          <Box
                sx={{
                    backgroundColor:'#fff',
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <Typography sx={{fontsize:'20px', color:'#000000', fontWeight:'700', p:1}}>
                Email
                </Typography>
            <TextField  fullWidth 
             id="fullWidth"
             placeholder='Enter Email' />
            </Box>
          </Item>
        </Grid>
        
       
        <Grid item xs={12} md={12}>
          <Item elevation={0} sx={{display:'flex', m:8, mt:8,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Button onClick={Reset}  sx={{background:'#01C1EB', fontSize:'15px', textTransform:'capitalize',   color:'#fff',
                   width:150 ,fontWeight:'500',borderRadius:"10px", "&:hover": {
                    background: "#01C1EB",
                    transition: ".5s",
                    boxShadow: 10,
                  },}} autoFocus>
           Proceed
          </Button>
           </Item>
        </Grid>

      </Grid>
    </Box>
    </Paper>
    </Container>
  );
}
