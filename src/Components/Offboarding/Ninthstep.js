import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper,
    Typography,useTheme, Button, } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Container } from '@mui/system';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Popup from "./selfsetuppopup"



const useStyles = makeStyles((theme) => ({
    btn: {
      
      backgroundColor: "#01C1EB !important",
      width: "150px",
      height: "50px",
     
    },
  
    fileupload: {
      backgroundColor: "#fff",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    fileupload1: {
      backgroundColor: "#E0DCDC !important",
      width: "150px",
      color: "#000000 !important",
    },
  
    fileupload2: {
      backgroundColor: "#01C1EB !important",
      width: "150px",
    },
    Boxsty:{
      paddingLeft:'20px',
    }

  })); 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
  
    color: theme.palette.text.dark,
  }));


const FirstStep = () => {
    const theme = useTheme();
  const classes = useStyles(theme);

   const Typographysty = {
    fontSize:"16px",
    fontWeight:"bold"
    }

    const Typographysty1 = {
      fontSize:"18px",
      fontWeight:950
      }

    let navigate = useNavigate();  

  function Pre() {
    navigate("/offboardingstep8");
  }

 
 
    return (

        <>

      <Container>

     

      <Box sx={{mt:15,border:1}}>
         
        

<Paper elevation={2 } sx={{m:10,}}>

      <Grid container spacing={2}>


         <Grid item xs={12} md={12}>
            <Item elevation={0}>

            <Typography style={Typographysty}>
            Step 9
            </Typography>

            <Typography mt={1} style={Typographysty}>
            Step 9 / 9
            </Typography>

            <Typography mt={4} style={Typographysty1}>
            Other
            </Typography>

            </Item>

       </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Employee's personal
                 belongings removed?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>
 
    
      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Office cleaned?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Nameplate removed?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>

      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Checklist completed and
               filed in employee's folder?
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>

                <Box>

                <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Yes" />
                <FormControlLabel  control={<Checkbox />} label="No" />

               </FormGroup>
                </Box>

              </Item>
            </Grid>
      </Grid>

      {/* <Grid item xs={12} md={12}>
                <Box 
                  elevation={0}
                  sx={{
                    mt: 10,
                    display: "flex",
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                    
                  }}
                >
                  <Box padding='10px'>

                  <Button variant='contained'
                  className={classes.btn}
                    onClick={Pre}>
                    Previous
                  </Button>

                  </Box>

                  <Box padding='10px'>
                  <Button variant='contained'
                   className={classes.btn}>
                 
                    Save & Submit   
                  </Button>
                  </Box>

                  <Box padding='10px'>
                  <Button variant='contained'
                   className={classes.btn}>
                   
                    Terminate   
                  </Button>
                  </Box>

                  
                </Box>
       </Grid> */}

     <Grid item xs={12} md={12}>

     <Box 
      sx={{
        mt: 10,
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        
      }}>
      <Box padding='10px'> <Popup/> </Box>

     </Box>
     </Grid>

    
      </Grid>
      </Paper>

      

     </Box>

      </Container>

            
        </>
    );
};

export default FirstStep;