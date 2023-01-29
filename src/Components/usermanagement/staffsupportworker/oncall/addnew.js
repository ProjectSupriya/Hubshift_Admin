import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from '../../../Sidebar/appbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {RadioGroup,Radio} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Qualification from './qualification'
import Supporttype from './select/supporttype'
import Groupname from './select/groupname'
import Supportcategoryname from './select/supportcategoryname'
import Supportitemname from './select/supportitemname'
import Region from './select/region'
import Appointmenttype from './select/appointmenttype'
import Client from './select/client'
import Category from './select/category'
import Fundingsource from './select/fundingsource'
import Service from './select/service'
import Supportworker from './select/supportworker'
import Jobtype from './select/jobtype'
import Supportcoordinator from './select/supportcoordinator'
import Experience from './select/experience'
import Level from './select/level'
import Yes from './yes'
import Date from './select/date'
import StartTime from './select/starttime'
import EndTime from './select/endtime'
import Map from '../../../assets/map.png';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  
  color: theme.palette.text.dark,
  
}));

export default function ColumnsGrid() {
    const [status,setStatus]=React.useState(false)
  return (
    <>
    
    <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10}>
  <Typography sx={{fontSize:"27px", fontWeight:"bold"}}>Add Appointment</Typography>
     <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Support Type</Typography>
        <Supporttype/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Group Name</Typography>
        <Groupname/></Grid>
      </Grid> 
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Support Category Name</Typography>
        <Supportcategoryname/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={12}>
        <Typography fontWeight="bold">Support Item Name</Typography>
        <Supportitemname/></Grid>
      </Grid> 
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Region</Typography>
        <Region/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Appointment Type</Typography>
        <Appointmenttype/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Client</Typography>
        <Client/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Category</Typography>
        <Category/></Grid>
      </Grid> 
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Funding Source</Typography>
        <Fundingsource/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Service*</Typography>
        <Service/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Support Worker</Typography>
        <Supportworker/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Job Type</Typography>
        <Jobtype/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
      <Grid item xs={12} md={12}>
      <Qualification/>
      </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Support Coordinator</Typography>
        <Supportcoordinator/></Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt:1}}>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Experience</Typography>
        <Experience/></Grid>
        <Grid item xs={12} md={6}>
        <Typography fontWeight="bold">Level</Typography>
        <Level/></Grid>
      </Grid>

      {/* section yes or no */}
      <Box sx={{border:"1px solid #0C8AFF", width:"100%", mt:2}}>
      <Grid container spacing={4} >
      <Grid item xs={12} md={6}>
                    <Item
                        elevation={0} >
                        <Box
                       sx={{
                            '& .MuiTextField-root': {  width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Typography
                            sx={{
                            fontsize: "20px",
                            color: "#000000",
                            fontWeight: "700",
                            p: 0,
                            }}
                        >
                       Appointment Date
                        </Typography>
                        <Date/>
                        </Box>
                    </Item>
                    </Grid>
        <Grid item xs={12} md={6} >
            <Item
                    elevation={0}
                    sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    
                    }}
            >
                
            <Typography padding='25px' fontWeight='bold'>Repeat</Typography>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
           

            <FormControlLabel value="No"  control={<Radio />} label="No" />
            <FormControlLabel onClick={()=>setStatus(!status)} value="Yes"  control={<Radio />} label="Yes" />

            </RadioGroup>

            </Item>

            </Grid>
      </Grid>
      <Grid item xs={12} md={12}sx={{mt:10}}>
   
   {
     status? <div> <Yes/> </div>:null
   }
        
 </Grid>
      </Box>

      {/* Routine */}
      <Box sx={{border:"1px solid #0C8AFF", width:"100%",p:2, mt:2}}>
        <Typography>Routines & Tasks</Typography><hr/>
        <Grid container spacing={4}>
        <Grid item xs={12} md={8} >
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography fontWeight="bold">Routine Name:</Typography>
        <TextField
          label="Routine Name:"
          id="outlined-size-small"
          size="small"
        />       
      </div>     
    </Box>
        </Grid>

        <Grid item xs={12} md={4}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 5, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Button variant="contained" sx={{backgroundColor:"#01C1EB", mt:4}}>Add Routine</Button>      
      </div>    
    </Box>
        </Grid></Grid>
      </Box>

      <Grid container spacing={1} sx={{pt:5}}>

        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={12}>
        <Typography sx={{ fontWeight: 'bold', color: "#000" }}>Start - End Times : </Typography>
        &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;<StartTime/>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <EndTime/>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; <Checkbox/> <Typography>&nbsp;&nbsp;Next day (Overnight</Typography>
        </Grid>
        </Grid> <br />
        <Grid container spacing={4}>

        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={6}>
        <Typography sx={{ fontWeight: 'bold', color: "#000"}}>Start From (Location): </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="outlined-basic" label="Start from location" variant="outlined" sx={{width:"100%"}}/>
        </Grid>

        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={6}>
        <Typography sx={{ fontWeight: 'bold', color: "#000"}}>End To (Location):</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="outlined-basic" label="End to location" variant="outlined" sx={{width:"100%"}}/>
        </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1, mt: 5, }} >
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
         
                    <img
                      src={Map}
                      alt=""
                      style={{ objectFit: "contain", mt: 0, width: "100%" }}
                    />
                   </Grid> 
                   </Grid>
      </Box>

      <Box
     sx={{
       flexGrow: 1,
       mt: 5,
      
      
     }}
   >
    

     
     <Grid container spacing={1}>
        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={5}>
        <Grid container spacing={1}>
        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={5}>
        <Typography sx={{ fontWeight: 'bold', color: "#000" }}>KM To:</Typography>
        </Grid>
        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={4}>
        <TextField size="small" fullWidth />&nbsp;&nbsp;
        <Typography> KM</Typography>
        </Grid>
        </Grid>
        

        </Grid>

        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={5}>
        <Grid container spacing={1}>
        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={4}>
        <Typography sx={{ fontWeight: 'bold', color: "#000" }}>KM With:</Typography>
        </Grid>
        <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={4}>
        <TextField size="small" fullWidth />&nbsp;&nbsp;
        <Typography>KM</Typography>
        </Grid>
        </Grid>
        

        </Grid>

            </Grid> <br />
            <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={2}>
            <Typography sx={{ fontWeight: 'bold', color: "#000" }}>Duration:  </Typography>
            </Grid>
            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={2}>
            <TextField size="small" fullWidth />&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography sx={{  color: "#000" }}> 120 mins</Typography>
            </Grid>

            </Grid> <br />
            <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={2}>
            <Typography sx={{ fontWeight: 'bold', color: "#000" }}>Accounts :  </Typography>
            </Grid>
            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>
            <Typography href="#" sx={{  color: "#0C8AFF" }}> Add Settings</Typography>
            </Grid>
            </Grid> <br />
            <Grid container spacing={1}>
            <Grid item xs={12} md={12} >
                        <Item
                                elevation={0}
                                sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "start",
                                alignItems: "center",  
                                pl:0                 
                                }}
                        >               
                        <Typography  fontWeight='bold'>Flexible with Time :</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        >
                    

                        <FormControlLabel value="No"  control={<Radio />} label="No" />
                        <FormControlLabel value="Yes"  control={<Radio />} label="Yes" />

                        </RadioGroup>

                        </Item>

                        </Grid>
            </Grid> <br />
            <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={2}>
            <Typography sx={{ fontWeight:'bold', color: "#000" }}>Tasks: </Typography>
            </Grid>
            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>
            <TextField fullWidth id="fullWidth" />
            </Grid>


            </Grid> <br />
            <Grid container spacing={1}>
            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={2}>
            <Typography sx={{ fontWeight: 'bold', color: "#000" }}>Notes: </Typography>
            </Grid>
            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center'}} item xs={12} md={8}>
            <TextField multiline rows={4}  fullWidth id="fullWidth" />
            </Grid>
            </Grid> <br />
            <Grid container spacing={1}>

            <Grid sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}} item xs={12} md={12}>
            <Button variant='contained' sx={{textTransform:"capitalize"}}>Save</Button>
            </Grid>



            </Grid> <br />
            </Box>

</Grid>
</Grid>
</Container>
    

    
    </>
  );
}
