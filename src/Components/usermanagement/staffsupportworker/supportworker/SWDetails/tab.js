import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Profile from './Profile/Profile';
import { makeStyles } from "@material-ui/core";
import Profiletab from './Profile/Profiletab';
import PayrollTabs from './Payroll/PayrollTabs';
import Availability from './Availability/Tabs';
import AppointmentTab from './Appointment/Table/tab';
import Timesheet from './Timesheet/tab'
import Client from './client/client'
import Note from './Notes/NotesTabel'
import Task from './Task/task'
import Leave from './Leave/leave'
import Incident from './incidents/incident'
import Induction from './Induction/induction'
import EmergencyContact from './Emergencycontacts/emergency'

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

const useStyles = makeStyles((theme) => ({

tabsstyle: {
backgroundColor: '#ececec',
// color: '#000000', 
borderRadius: 1,
textTransform: 'capitalize',
color:'red',

},
}));

export default function BasicTabs() {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
setValue(newValue);
};
const classes = useStyles();

return (
<>


<Grid container sx={{maxWidth:'100%'}}>

<Grid item xs={12} md={12} >

<Tabs 
value={value} 
onChange={handleChange}
variant="scrollable"
scrollButtons="auto"
aria-label="scrollable auto tabs example"
textColor="inherit" indicatorColor="light" 

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
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Availability</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Appointments</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Timesheet</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Notes</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Task</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Client</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Leave</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Incident</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Induction</Typography></>} 
{...a11yProps(0)} />

<Tab sx={{
backgroundColor: '#ececec', color: '#000000', margin: '0px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
color: '#000000',
},
}} 
label={<> <Typography fontSize='12px' fontWeight='bold'>Emergency Contacts</Typography></>} 
{...a11yProps(0)} />

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
 <AppointmentTab/>
</TabPanel>
<TabPanel value={value} index={4}>
<Timesheet/>
</TabPanel>
<TabPanel value={value} index={5}>
<Note/>
</TabPanel>
<TabPanel value={value} index={6}>
<Task/>
</TabPanel>
<TabPanel value={value} index={7}>
<Client/>
</TabPanel>
<TabPanel value={value} index={8}>
<Leave/>
</TabPanel>
<TabPanel value={value} index={9}>
<Incident/>
</TabPanel>
<TabPanel value={value} index={10}>
<Induction/>
</TabPanel>
<TabPanel value={value} index={11}>
<EmergencyContact/>
</TabPanel>

</>
);
}

