import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Profiletab from "./Profile/Profiletab";
import Invoicestab from "./Invoices/Invoicestab"; 
import Fundingtab from './Funding/tab';
import Appointmentstab from './Appointment/tabletab'
import Medicalhistory from './Mediacalhistory/Medicalhistory'
import Riskassessment from './RiskAssessment/Riskassessment'
import Goal from "./Goal/Goaltable"
import Task from "./Task/tasktable";
import Notes from "./Notes/NotesTabel"
import Routineandtasks from "./Routineandtasks/tab"
import Progressnotes from './Progressnotes/progressNotesTabel'
import Communityaccess from './Communityaccess/Communityaccess'
import Complainttable from './Complaint/Complainttabel'
import Conflict from "./ConflictofIneterests/Conflicttabel"
import PlanManager from "./Planmanager/PlanManager"
import Emergency from "./Emergencycontacts/emergency"


import '../../../../index.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}





export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue(newValue + 9);
  };

  // const classes = useStyles();

  return (
    <>
      <Container>

        <Grid container sx={{ maxWidth: "100%" }}>

          {/* tabs rows 1 */}

          <Grid item xs={12} md={12}>
          <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              indicatorColor="light"
            >
              <Tab className='Headertabstyle'
              
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                      Profile
                    </Typography>
                  </>
                }
                {...a11yProps(0)}
              /> 

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                      Invoices
                    </Typography>
                  </>
                }
                {...a11yProps(1)}
              />

              <Tab className='Headertabstyle'
                
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Funding
                    </Typography>
                  </>
                }
                {...a11yProps(2)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Appointments
                    </Typography>
                  </>
                }
                {...a11yProps(3)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Medical History
                    </Typography>
                  </>
                }
                {...a11yProps(4)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Risk Assessment
                    </Typography>
                  </>
                }
                {...a11yProps(5)}
              />

              <Tab className='Headertabstyle'
                
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Goals
                    </Typography>
                  </>
                }
                {...a11yProps(6)}
              />

              <Tab className='Headertabstyle'
                
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                      Task
                    </Typography>
                  </>
                }
                {...a11yProps(7)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Routines & Tasks
                    </Typography>
                  </>
                }
                {...a11yProps(8)}
              />

             
          </Tabs>

          </Grid>

          {/* Tabs rows 2 */}

          <Grid item xs={12} md={12}>
          <Tabs style={{marginTop:'1px'}}
              value={value - 9 }
              onChange={handleChange2}
              aria-label="basic tabs example"
              textColor="inherit"
              indicatorColor="light"
            >
               <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                      Notes
                    </Typography>
                  </>
                }
                {...a11yProps(9)}
              /> 
              <Tab className='Headertabstyle'
              
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Progress Notes
                    </Typography>
                  </>
                }
                {...a11yProps(10)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Community access provider
                    </Typography>
                  </>
                }
                {...a11yProps(11)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Complaint/ Feedback Management
                    </Typography>
                  </>
                }
                {...a11yProps(12)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Conflict of Ineterests
                    </Typography>
                  </>
                }
                {...a11yProps(13)}
              />

              <Tab className='Headertabstyle'
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Plan Manager
                    </Typography>
                  </>
                }
                {...a11yProps(14)}
              />

              <Tab className='Headertabstyle' 
               
                label={
                  <>
                    {" "}
                    <Typography fontSize="12px" fontWeight="bold">
                    Emergency Contacts
                    </Typography>
                  </>
                }
                {...a11yProps(15)}
              />

             
          </Tabs>

               </Grid>

       
         
        </Grid>

        {/* </Box> */}
        <TabPanel value={value} index={0}>
          <Profiletab />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Invoicestab/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Fundingtab/>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Appointmentstab/>
        </TabPanel>

        <TabPanel value={value} index={4}>
         <Medicalhistory/>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Riskassessment/>
        </TabPanel>

        <TabPanel value={value} index={6}>
          <Goal/>
        </TabPanel>

        <TabPanel value={value} index={7}>
         <Task/>
        </TabPanel>

        <TabPanel value={value} index={8}>
          <Routineandtasks/>
        </TabPanel>

        <TabPanel value={value} index={9}>
        <Notes/>
           </TabPanel>

        <TabPanel value={value} index={10}>
           <Progressnotes/>
           </TabPanel>

           <TabPanel value={value} index={11}>
           <Communityaccess/>
           </TabPanel>

           <TabPanel value={value} index={12}>
           <Complainttable/>
           </TabPanel>

           <TabPanel value={value} index={13}>
           <Conflict/>
           </TabPanel>

           <TabPanel value={value} index={14}>
           <PlanManager/>
           </TabPanel>

           <TabPanel value={value} index={15}>
           <Emergency/>
           </TabPanel>
           
           


  
       
      </Container>
    </>
  );
}
