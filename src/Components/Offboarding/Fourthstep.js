import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, 
    Typography,useTheme,Stack, Button, } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Container } from '@mui/system';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


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

  const Input = styled("input")({
    display: "none",
  });

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
    navigate("/offboardingstep3");
  }

  function Next() {
    navigate("/offboardingstep5");
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
            Step 4
            </Typography>

            <Typography mt={1} style={Typographysty}>
            Step 5 / 9
            </Typography>

            <Typography mt={4} style={Typographysty1}>
            Expense Reporting
            </Typography>

            </Item>

       </Grid>

     
      <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Employee expense reports received?
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
                Expense Receipts
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
            <Item>
                
                  <Box className={classes.fileupload}>
                   
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button className={classes.fileupload1}
                        
                          variant="contained"
                          component="span"
                        >
                          Choose File
                        </Button>
                      </label>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                        />
                      </label>
                    </Stack>

                    <Button className={classes.fileupload2}
                     
                      variant="contained"
                      component="span"
                    >
                      Upload
                    </Button>
                  </Box>
                </Item>
            </Grid>
       </Grid>

      
       <Grid container>
            <Grid item xs={12} md={4}>
            <Box className={classes.Boxsty}>
              <Item elevation={0}>
                <Typography style={Typographysty}>
                Amount to reimburse: 
                </Typography>
              </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField 
                      fullWidth
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
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
                   className={classes.btn}
                   onClick={Next}>
                   
                 
                    Next
                  </Button>
                  </Box>

                  
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