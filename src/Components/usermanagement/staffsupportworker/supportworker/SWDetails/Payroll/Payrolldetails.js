import React from 'react';
import {
    Button, Grid, useTheme, Typography, Box, TextField, FormControlLabel,
    FormGroup, Checkbox, FormLabel, FormControl, Divider, Paper, RadioGroup, Radio
}
    from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { styled } from "@mui/material/styles";
import PayLevelDropDown from './PayLevelDropDown';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(theme => ({

    Dropdownstyle:{
        display: "flex",
        justifyContent:'space-between',
        alignItems: "center",
    }


}));

const Rayrolldetails = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>

            <Grid mt={2} container> 

                <Grid item xs={12} md={12}>
                    <Typography sx={{ mt: 2, fontWeight: 700, color: "#000", fontSize: "16px" }}>
                        User Type: <span style={{ fontWeight: 'normal', padding: '100px' }}>Support Worker</span>
                    </Typography>

                </Grid>

                <Grid item xs={12} md={12}>
                    <Typography sx={{ mt: 2, fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    Account Access Enabled: <span style={{ fontWeight: 'normal', padding: '100px' }}>No</span>
                    </Typography>

                </Grid>

                <Grid item xs={12} md={12}>
              
                <Box mt={3} className={classes.Dropdownstyle} >
                  
               
                  <Typography fontWeight="bold" >
                   
                 
                  Pay Level:*
                  </Typography>
                  <PayLevelDropDown />

                </Box>

                 </Grid>

                 <Grid item xs={12} md={12}>
              
                <Box mt={3} className={classes.Dropdownstyle} >
                  
               
                  <Typography fontWeight="bold" >
                   
                 
                  Pay Group:*
                  </Typography>
                  <PayLevelDropDown />

                </Box>

                 </Grid>

                 <Grid item xs={12} md={12}>
              
                <Box mt={3} className={classes.Dropdownstyle} >
                  
               
                  <Typography fontWeight="bold" >
                   
                 
                  Teasm:*
                  </Typography>
                  <PayLevelDropDown />

                </Box>

                 </Grid>

                 <Grid item xs={12} md={12}>
              
                <Box mt={3} className={classes.Dropdownstyle} >
                  
               <Typography fontWeight="bold" >
                  Accounting System Reference:
                  </Typography>

                 <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


                </Box>

                 </Grid>

                 <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             <Typography fontWeight="bold" >
             ABN / Contractor Number:
                </Typography>

               <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              <Box sx={{mt:1,display:'flex'}}>
               
                            
                    <Typography padding='5px' fontWeight='bold'>Attach Document</Typography>
                    <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="anyone" control={<Radio />} label="Upload" />
                                    <FormControlLabel value="private" control={<Radio />} label="Capture" />

                      </RadioGroup>
                      </Box>

                {/* </Item> */}
               </Grid>



               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             
                <Typography fontWeight="bold" >
                 
               
                Job Type:
                </Typography>
                <PayLevelDropDown />

              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             
                <Typography fontWeight="bold" >
                 
               
                Job Title:
                </Typography>
                <PayLevelDropDown />

              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             <Typography fontWeight="bold" >
             Address:
                </Typography>

               <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             <Typography fontWeight="bold" >
             Suburb:
                </Typography>

               <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             <Typography fontWeight="bold" >
             Postcode:
                </Typography>

               <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             <Typography fontWeight="bold" >
             Geographic Region:
                </Typography>

               <Box sx={{width:500}}><TextField fullWidth id="fullWidth" /></Box> 


              </Box>

               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box mt={3} className={classes.Dropdownstyle} >
                
             
                <Typography fontWeight="bold" >
                 
               
                State:
                </Typography>
                <PayLevelDropDown />

              </Box>

               </Grid>

               <Grid item xs={12} md={12}>

              <Box mt={3} className={classes.Dropdownstyle} >
                
             
                <Typography fontWeight="bold" >
                 
               
                Landline Phone:
                </Typography>
                <PayLevelDropDown />

              </Box>

               </Grid>

               <Grid item xs={12} md={12}
               sx={{
                display: "flex",
                justifyContent:'center',
                alignItems: "center",
               }}
               >
                <Button variant='contained' sx={{backgroundColor:'#01C1EB',color:'#FFFFFF'}}>Save</Button>
               </Grid>      

            </Grid>

        </>
    );
};

export default Rayrolldetails;