import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import{Button,TextField,useTheme} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../../../../../Sidebar/appbar";
import SupporttypeDdown from './AppointmentDdown/Supporttype';
import GroupnameDdown from "./AppointmentDdown/Groupname"
import SupportcatenameDdowm from "./AppointmentDdown/Supportcategoryname"
import SupportitemnameDdown from "./AppointmentDdown/Supportitemname"
import RegionDdown from "./AppointmentDdown/Region"
import AppointmenttypeDdown from "./AppointmentDdown/Appointmenttype"
import ClientdDdown from "./AppointmentDdown/Client"
import CategoryDdown from "./AppointmentDdown/Category"
import FundingsourceDdown from "./AppointmentDdown/Fundingsource"
import ServiceDdown  from "./AppointmentDdown/Service";
import SupportworkerDdown from "./AppointmentDdown/Supportworker"
import JobtypeDdown from "./AppointmentDdown/Jobtype"
import SCDdown from "./AppointmentDdown/SupportCoordinator"
import ExperiencedDown from "./AppointmentDdown/Experience"
import LevelDdown from "./AppointmentDdown/Level"
import DaysDdow from "./AppointmentDdown/Days"
import Date from "./Table/date";
import StartTime from './Table/starttime';
import EndTime from './Table/endtime';
// import MapImage from '../../assets/map2.png'
import MapImage from '../../../../../assets/map2.png'



import { FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox,Radio,RadioGroup} from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

const useStyles = makeStyles(theme => ({
    button: {
      border: 0,
      height: '55px',
      width: '200px',
      padding: '0 30px',
      backgroundColor: "#05C3DD !important ", //important
      color: "#FFFFFF !important ",
      borderRadius: '10px !important ',
  },
  
  Modelbutton: {
          
    margin:'5px',
    height: '40px',
    width: '160px',
    padding: '0 30px',
    backgroundColor: "#05C3DD !important ",
    color: "#FFFFFF ",
    borderRadius: '10px !important ',
  
  }
  }));

export default function Addappointment() {

    const theme = useTheme();
  const classes = useStyles(theme);

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
      });
      const handleChange = (event) => {

        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

      const steps = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5'
    
      ];
    
      const steps2 = [
        'Task 1',
        'Task 2',
        'Task 3',
        
      ];
  return (
    <>
  
     <PrimarySearchAppBar/>

    <Container style={{paddingTop:"0px", paddingBottom:"0px"}}>

    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>

   <Grid item xs={12} md={10}> 
  
  <Grid item xs={6} md={10}><Typography fontSize="30px" fontweight="bold">Add Appointment</Typography> </Grid>
    
            

        <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:6,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Support Type
              </Typography>
              <SupporttypeDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:6,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Group Name
              </Typography>
              <GroupnameDdown />
        </Grid>  

         <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Support Category Name
              </Typography>
              <SupportcatenameDdowm/>
        </Grid>

        <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Support Item Name
              </Typography>
              <SupportitemnameDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Region
              </Typography>
              <RegionDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Appointment Type
              </Typography>
              <AppointmenttypeDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Client
              </Typography>
              <ClientdDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Category
              </Typography>
              <CategoryDdown />
        </Grid> 

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Funding Source
              </Typography>
              <FundingsourceDdown />
        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Service
              </Typography>
              <ServiceDdown />
        </Grid> 

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Support Worker
              </Typography>
              <SupportworkerDdown />
            <FormControlLabel control={<Checkbox />} label="Access to add Routine & Tasks" />

        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Job Type
              </Typography>
              <JobtypeDdown/>

        </Grid>

        {/* <Grid item xs={12} md={12}> */}
          <Box sx={{mt:2,display:'flex',flexDirection:'row'}}>
            <Typography sx={{margin:'5px',fontWeight:'bold' }}>Qualifications Required:</Typography>
             <Box >
             {/* <Typography>Qualifications</Typography> */}

               <FormControl component="fieldset" variant="standard">

               <FormGroup sx={{ }}>
                  <FormControlLabel control={<Checkbox  />} label='Domestic'/>
                  <FormControlLabel control={<Checkbox />}  label='Oncology'/>
                  <FormControlLabel control={<Checkbox  />} label='Manual Handling' />
                  <FormControlLabel control={<Checkbox />}  label='Russian'/>
                  </FormGroup>

               </FormControl>

               <FormControl  component="fieldset" variant="standard">

               <FormGroup sx={{ }}>
                  <FormControlLabel control={<Checkbox  />} label='Domestic'/>
                  <FormControlLabel control={<Checkbox />}  label='Oncology'/>
                  <FormControlLabel control={<Checkbox  />} label='Manual Handling' />
                  <FormControlLabel control={<Checkbox />}  label='Russian'/>
                  </FormGroup>

               </FormControl>

               <FormControl  component="fieldset" variant="standard">

               <FormGroup sx={{ }}>
                  <FormControlLabel control={<Checkbox  />} label='Domestic'/>
                  <FormControlLabel control={<Checkbox />}  label='Oncology'/>
                  <FormControlLabel control={<Checkbox  />} label='Manual Handling' />
                  <FormControlLabel control={<Checkbox />}  label='Russian'/>
                  </FormGroup>

               </FormControl>

               <FormControl  component="fieldset" variant="standard">

               <FormGroup sx={{ }}>
                  <FormControlLabel control={<Checkbox  />} label='Domestic'/>
                  <FormControlLabel control={<Checkbox />}  label='Oncology'/>
                  <FormControlLabel control={<Checkbox  />} label='Manual Handling' />
                  <FormControlLabel control={<Checkbox />}  label='Russian'/>
                  </FormGroup>

               </FormControl>

               
             </Box>
          </Box>
        {/* </Grid> */}

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Support Cooardinator
              </Typography>
              <SCDdown />
            <FormControlLabel control={<Checkbox />} label="Access to add Routine & Tasks" />

        </Grid>
 
        <Grid container>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Experience
              </Typography>
              <ExperiencedDown />

        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Level
              </Typography>
              < LevelDdown/>
              
              

        </Grid>
        </Grid>

         {/*  1st border start here */}
        <Grid container>

        <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    width: 1500,
                                    maxWidth: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontsize: "20px",
                                        color: "#000000",
                                        fontWeight: "700",
                                        p: 0,
                                        marginBottom: 2,
                                    }}
                                >
                                    Due Date
                                </Typography>
                                <Date />

                            </Box>
                        </Item>

        </Grid>

        <Grid item xs={12} md={6}>

                        <Item
                            elevation={0}
                            sx={{
                                mt:6,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            <Typography padding='10px' fontWeight='bold'>Repeat </Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >


                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />

                            </RadioGroup>

                        </Item>

        </Grid>

        <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    width: 1500,
                                    maxWidth: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontsize: "20px",
                                        color: "#000000",
                                        fontWeight: "700",
                                        p: 0,
                                        marginBottom: 2,
                                    }}
                                >
                                    Due Date
                                </Typography>
                                <Date />

                            </Box>
                        </Item>

        </Grid>

        <Grid item xs={12} md={6}>
                        <Item
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    width: 1500,
                                    maxWidth: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontsize: "20px",
                                        color: "#000000",
                                        fontWeight: "700",
                                        p: 0,
                                        marginBottom: 2,
                                    }}
                                >
                                    Due Date
                                </Typography>
                                <Date />

                            </Box>
                        </Item>

        </Grid>

        <Grid item xs={12} md={12}>

                        <Item
                            elevation={0}
                            sx={{
                                // mt:6,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >

                            <Typography padding='10px' fontWeight='bold'>Frequency </Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >


                                <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
                                <FormControlLabel value="Fortnightly" control={<Radio />} label="Fortnightly" />
                                <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />


                            </RadioGroup>

                        </Item>

        </Grid>

        <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Days
              </Typography>
              <DaysDdow />

        </Grid>

        </Grid>

        {/* 1st border end here */}


         {/* Task Section Start here */}
        <Grid container sx={{border:1, borderColor:'#0C8AFF',mt:5}}>

        <Grid item xs={12} md={12}>
  <Typography fontSize='25px' fontWeight='bold' padding='20px'>Routine and Task</Typography>
</Grid>

  <Grid item xs={12} sm={12} md={12}>
                  <Item
                      elevation={0}
                      sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                      }}
                  >
                      <Box
                          sx={{
                              backgroundColor: "#fff",
                              width: 900,
                              // maxWidth: "100%",
                          }}
                      >
                          <Typography
                              sx={{
                                  fontsize: "20px",
                                  color: "#000000",
                                  fontWeight: "700",
                                  p: 0,
                                  marginBottom: 2,
                              }}
                          >
                              Routine Name
                          </Typography>
                          <Box sx={{display:'flex', justifyContent: "space-between",alignContent:'center'}}>

                          <TextField defaultValue="Exercise" sx={{width: 500}}/>
                          <Button variant='contained' className={classes.button}> Add Routine</Button> 

                          </Box>
                      </Box>
                  </Item>
  </Grid>

  <Grid item md={8} xs={12}>

    <Box sx={{ mt:2,width: '100%' }}>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography padding='20px'>Exercise</Typography>

        <Typography> <DangerousIcon sx={{color:'red'}}/> </Typography> 
        <Typography > <ControlPointIcon sx={{color:'#01C1EB'}}/> </Typography>
    
      </div>

     
    </Box>

   </Grid>

  
        </Grid>
        {/* Task Section end here */}

        <Grid sx={{mt:2,display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={12}>
          <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>Start - End Times : </Typography>
         &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;<StartTime/>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <EndTime/>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <Checkbox/> <Typography>&nbsp;&nbsp;Next day (Overnight</Typography>
        </Grid>

        <Grid sx={{mt:2,display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={6}>
<Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>Start From (Location): </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
<TextField id="outlined-basic" label="Start from location" variant="outlined" />
        </Grid>

          <Grid sx={{mt:2,display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={6}>
<Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>End To (Location):</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
<TextField id="outlined-basic" label="End to location" variant="outlined" />
          </Grid>

          <Grid item xs={12} md={12}>
   
                    <Typography>
                          <img
                      src={MapImage}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "100%" }}
                    />
                    </Typography>
          </Grid>

          {/* KM section */}

          <Grid container spacing={2}>
 
 <Grid item xs={2} md={1} sx={{display: { xs: 'none', md: 'flex' }}}> 
 </Grid>
 <Box
     sx={{
       flexGrow: 1,
       mt: 5,
      
      
     }}
   >
    

     
     <Grid container spacing={1}>

<Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={7}>
 <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>KM To: </Typography>
&nbsp;&nbsp; <Typography sx={{  color: "#000", fontSize: "20px" }}>45 KM</Typography>
</Grid>

<Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={5}>
 <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>KM With:

 18 KM</Typography>

</Grid>

</Grid> <br />

<Grid container spacing={1}>

<Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>
 <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>Duration:  </Typography>
&nbsp;&nbsp; <Typography sx={{  color: "#000", fontSize: "20px" }}> 120 mins</Typography>
</Grid>

</Grid> <br />

<Grid container spacing={1}>

<Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>
 <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>Accounts :  </Typography>
&nbsp;&nbsp; <Typography sx={{  color: "#000", fontSize: "20px" }}> Add Settings</Typography>
</Grid>



</Grid> <br />


<Grid container spacing={1}>


<Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>

     <Typography
     sx={{
       textAlign: "left",
       fontsize: "20px",
       color: "#000000",
       fontWeight: "700",
       p: 1,
     }}
   >
    Repeat 
    </Typography>

    <RadioGroup sx={{p:1}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
    >


        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />

    </RadioGroup>

{/* </Box> */}

</Grid>

     
     <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Task
              </Typography>
              <TextField fullWidth id="fullWidth"
              label='No tasks have been added'
              />

              {/* <SupporttypeDdown /> */}
        </Grid>

        <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  mt:2,
                  textAlign: "left",
                  ml: 1,
                  fontsize: "20px",
                  color: "#000000",
                  fontWeight: "700",
                  p: 0,
                }}
              >
                Note
              </Typography>
              <TextField fullWidth id="fullWidth"   multiline  rows={4}

              
              />

              {/* <SupporttypeDdown /> */}
        </Grid>

   <Grid item xs={12} md={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Button variant="contained"
     sx={{mt:2, backgroundColor:'#05C3DD !important',
    color:'#FFFFFF',
     height: "50px",
     width:150
                
    }}>
    Save
    </Button>
    </Grid>



</Grid> <br />

  

   </Box>
  
   
 
  
   
   </Grid> 

        

          




             




        </Grid>

    

  </Grid>   
    
  {/* container */}
  </Grid> 
    </Container>

    
    </>
  );
}
