import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Profiletab from './Profile/Profiletab';
import PayrollTabs from './Payroll/PayrollTabs';
import Availability from './Availability/Tabs';
import Meetingtab from "./Meeting/Meetingtab"
import AppointmentTab from './Appointment/Table/tab';
import Timesheettab from "./Timesheet/tab"
import NotesTable from './Notes/NotesTabel';
import Task from "./Task/task"
import Incidents from './incidents/incident'
import Client from './client/client'
import Leavestab from './Leaves/Leavestab'
import PlanManager from './Planmanager/PlanManager'
import Emergencycontacts from "./Emergencycontacts/emergency"

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
'aria-controls': `simple-tabpanel-${index}`,
};
}


export default function BasicTabs() {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
setValue(newValue);
};

return (
<>

<Container>

<Grid container sx={{maxWidth:'100%'}}>

<Grid item xs={12} md={12} >

<Tabs value={value} onChange={handleChange}aria-label="basic tabs example" 
textColor="inherit" indicatorColor="light" 
// sx={{ backgroundColor: '#ececec',}}
>

<Tab style={{
width:10,backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}}
label={<> <Typography fontSize='12px' fontWeight='bold'>Profile</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
width:10,backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Payroll</Typography></>} 
{...a11yProps(1)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Availability</Typography></>} 
{...a11yProps(2)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Meeting</Typography></>} 
{...a11yProps(3)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Appointments</Typography></>} 
{...a11yProps(4)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Timesheet</Typography></>} 
{...a11yProps(5)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Notes</Typography></>} 
{...a11yProps(6)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Task</Typography></>} 
{...a11yProps(7)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Client</Typography></>} 
{...a11yProps(8)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Leave</Typography></>} 
{...a11yProps(9)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Incidents</Typography></>} 
{...a11yProps(10)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>PlaneManage</Typography></>} 
{...a11yProps(11)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Emergency Contacts</Typography></>} 
{...a11yProps(12)} />

</Tabs>
</Grid>

</Grid>


{/* </Box> */}
<TabPanel value={value} index={0}>
<Profiletab/>
</TabPanel>

<TabPanel value={value} index={1}>
    <PayrollTabs/>
</TabPanel>

<TabPanel value={value} index={2}>
   <Availability/>
</TabPanel>

<TabPanel value={value} index={3}>
 <Meetingtab/>
</TabPanel>

<TabPanel value={value} index={4}>
 <AppointmentTab/>
</TabPanel>
<TabPanel value={value} index={5}>
<Timesheettab/>
</TabPanel>


<TabPanel value={value} index={6}>
<NotesTable/>
</TabPanel>

<TabPanel value={value} index={7}>
 <Task/>
</TabPanel>

<TabPanel value={value} index={8}>
<Client/>
</TabPanel>

<TabPanel value={value} index={9}>
 <Leavestab/>
</TabPanel>

<TabPanel value={value} index={10}>
 <Incidents/>
</TabPanel>

<TabPanel value={value} index={11}>
 <PlanManager/>
</TabPanel>

<TabPanel value={value} index={12}>
 <Emergencycontacts/>
</TabPanel>



</Container>
</>
);
}

