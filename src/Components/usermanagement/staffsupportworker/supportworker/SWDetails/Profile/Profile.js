import React from 'react';
import {
    Button,Grid, useTheme, Typography,Box,TextField,FormControlLabel,
    FormGroup,Checkbox,FormLabel,FormControl,Divider,Paper, RadioGroup,Radio
}
from '@mui/material';
// import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core';
import ProfileImage from "./.././../../../../assets/profileimage3.png";
import mapimg from "./.././../../../../assets/map3.png";
import { styled } from "@mui/material/styles";
import SuburbDdown from './StatusDdown';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles(theme => ({

    formstyle: {
        marginTop:"20px",
        backgroundColor: "#fff",
        width: 700,    
    },
    Checkboxlabel:{
        fontSize:"15px",
    },
    

}));

const Profile = () => {

    const theme = useTheme();
    const classes = useStyles(theme);

    

    return (
        <>

                <Grid mt={8} container >
                 {/* ProfileImage */}
                <Grid item xs={12} md={4}>
                    <Box>   
                   
                 <img src={ProfileImage} alt="Avatar" style={{borderRadius: '50%',width:"200px"
                 }}/>
   
                    </Box>

                </Grid>

                {/* Personal Details  */}

        <Grid item xs={12} md={8}>

                 <Grid container spacing={4}>

                <Grid item xs={12} md={12}>
                  <Typography sx={{mt:5, fontWeight: 700, color: "#000", fontSize: "20px" }}> Personal Details   </Typography>
                 </Grid>
                
                 <Grid  item xs={12} md={12}>
                    <Typography sx={{ mt:2,fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    First Name: <span style={{fontWeight:'normal',padding:'100px'}}>Mr. Tom Joe Arren</span>
                     </Typography>
                        
                </Grid>

                <Grid  item xs={12} md={12}>
                    <Box sx={{ mt:2,display:'flex', justifyContent:'space-between'}}>

                    <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    Gender: <span style={{fontWeight:'normal'}}>Maile</span></Typography> 

                    <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
                            DOB: <span style={{fontWeight:'normal'}}> 12-Dec-1991</span>
                            </Typography>
                    </Box>
                </Grid>

             <Grid item xs={12} md={12}>
              
            <Box className={classes.formstyle}>
                
              <Typography fontWeight='bold'> Email  </Typography>       
              <TextField fullWidth id="fullWidth"  label='tomarren@gmail.com' />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Phone Number  </Typography>       
              <TextField fullWidth id="fullWidth"  label='1234567890' />
            </Box>
             </Grid>

             <Grid item xs={12} md={12}>
              
              <Box className={classes.formstyle}>
                  
                <Typography fontWeight='bold'> Address Lane 1</Typography>       
                <TextField fullWidth id="fullWidth"  label='56 Webb Road' />
              </Box>
               </Grid>

               <Grid item xs={12} md={12}>
              
              <Box className={classes.formstyle}>
                  
                <Typography fontWeight='bold'> Address Lane 2</Typography>       
                <TextField fullWidth id="fullWidth"  label='Address'  />
              </Box>
               </Grid>

               <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  mt:1,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Suburb
              </Typography>
              <SuburbDdown />
            </Grid>

            <Grid item xs={12} md={4}>
                 <Box width='200px' mt={2}>
                 <Typography fontWeight='bold'> State  </Typography>       
                 <TextField  fullWidth id="fullWidth" label='Vlc' />
               </Box>
             </Grid>

             <Grid item xs={12} md={4}>
              
            <Box width='200px'mt={2}>
                
              <Typography fontWeight='bold'> Postcode  </Typography>       
              <TextField  fullWidth id="fullWidth" label='2333' />
            </Box>
             </Grid>

             <Grid  item xs={12} md={12}>
                    <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    Job Title: <span style={{fontWeight:'normal',padding:'10px'}}>Nurse</span>
                     </Typography>
                        
                </Grid>
            
                <Grid  item xs={12} md={12}>
                    <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    Job Type: <span style={{fontWeight:'normal',padding:'10px'}}>Casual</span>
                     </Typography>
                        
                </Grid>

                <Grid  item xs={12} md={12}>
                    <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>
                    Level: <span style={{fontWeight:'normal',padding:'10px'}}>5</span>
                     </Typography>
                        
                </Grid>

                <Grid item xs={12} md={3}>
                <Typography sx={{  fontWeight: 700, fontSize:'15px' }}> Qualifications</Typography>

                </Grid>

                <Grid item xs={12} md={2}>
                <FormGroup sx={{}}>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Domestic</p></>}/>
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Oncology</p></>}/>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Manual Handling</p></>} />
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Russian</p></>}/>
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={2}>
                <FormGroup sx={{}}>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Domestic</p></>}/>
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Oncology</p></>}/>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Manual Handling</p></>} />
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Russian</p></>}/>
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={2}>
                <FormGroup sx={{}}>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Domestic</p></>}/>
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Oncology</p></>}/>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Manual Handling</p></>} />
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Russian</p></>}/>
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={1}>
                <FormGroup sx={{}}>
                  <FormControlLabel control={<Checkbox  />} label={<><p className={classes.Checkboxlabel}>Domestic</p></>}/>
                  <FormControlLabel control={<Checkbox />}  label={<><p className={classes.Checkboxlabel}>Oncology</p></>}/>
                 
                  </FormGroup>
                </Grid>

                <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Badges: </Typography>       
              <TextField fullWidth id="fullWidth"  />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Immunisation: </Typography>       
              <TextField fullWidth id="fullWidth"  />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Languages:  </Typography>       
              <TextField fullWidth id="fullWidth"  label='English, Spanish' />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Cultural background:  </Typography>       
              <TextField fullWidth id="fullWidth"  />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Religion: </Typography>       
              <TextField fullWidth id="fullWidth"  label='Christian' />
            </Box>
             </Grid>

             <Grid item xs={12} md={10}>
              
            <Box mt={2}>
                
              <Typography fontWeight='bold'> Interests & hobbies:  </Typography>       
              <TextField fullWidth id="fullWidth"  label='Singing, Reading books, travelling' />
            </Box>
             </Grid>

             <Grid item xs={12} md={12}>
              
              <Box className={classes.formstyle}>
                  
                <Typography fontWeight='bold'> About  </Typography>       
                <TextField fullWidth id="fullWidth" multiline rows={4}

                label='Hi, I am Tom...' />
              </Box>
               </Grid>
            
               <Grid item xs={12} md={10}>
              
              <Box mt={2}>
                  
                <Typography fontWeight='bold'> Preferences:  </Typography>       
                <TextField fullWidth id="fullWidth"  label='Singing, Reading books, travelling' />
              </Box>
               </Grid>

               <Grid item xs={12} md={12}>
               <Box mt={2}>
               <Typography fontWeight='bold'> Work Locations: </Typography>       
                <img src={mapimg}/>
                </Box>

                <Divider sx={{mt:3,bgcolor:'black'}} variant="middle" />

               </Grid>

               {/* <Grid item xs={12} md={12}>

                 <Box
                  sx={{
                   mt: 2,
                   paddingLeft: "20px",
                   display: "flex",
                   flexDirection: "column",
                  }}
                 >
              <Typography padding='10px' fontSize="25px" fontWeight="600">
              Self-service
              </Typography>

              <Typography padding='10px'>
              Turn on self-service to allow employees to view their pay slips,
               manage their personal details and apply for leave.
               </Typography>

        <FormControl>
         <FormLabel >
         <Typography fontWeight="600"> Turn on self-service for this employee?</Typography>
            </FormLabel>
         <RadioGroup
         row >
       
      
        <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
       
      </RadioGroup>
    </FormControl>

              
                  </Box>
              </Grid> */}

              <Grid item xs={12} md={12}>
                <Button variant="contained"

                sx={{mt:2, backgroundColor:'#05C3DD !important',
                color:'#FFFFFF',
                height: "50px",
                
                }}>
                Save changes
                </Button>
              </Grid>


               



                

                


                
                </Grid>
          </Grid>



         </Grid>

            



        </>
    )
}
export default Profile;