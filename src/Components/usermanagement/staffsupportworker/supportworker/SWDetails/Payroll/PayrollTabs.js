import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
// import Grid from '@mui/material/Grid';
import { withStyles } from '@material-ui/core/styles';
import Bankdetailtable from './bankdetails';
import PayRate from './payrate';
import Customslip from './Customslip';
import Payrolldetails from './Payrolldetails';
import Fortnightlyslip from "./Fortnightlyslip";
import Payslipdropdown from './Payslipdropdown';

  
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
        <Box sx={{ p: 3 }}>
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

export default function PayrollTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <Container style={{paddingTop:"0px",  paddingBottom:"0px"}}>
 
  

  

   <Box sx={{ mt:5,borderBottom: 1, borderColor: 'divider',maxWidth:'100%' }}>

   {/* <Grid container sx={{maxWidth:'100%'}}> */}

{/* <Grid item xs={12} md={12} > */}

   <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="light" >
   
   <Tab sx={{ width:150, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover':
    {color: '#000000',},}} label="Payroll Details" {...a11yProps(0)} />

<Tab sx={{ width:150, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover':
    {color: '#000000',},}} label="Bank Details" {...a11yProps(1)} />

<Tab sx={{ width:150, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover':
    {color: '#000000',},}} label="Pay Rate" {...a11yProps(2)} />

<Tab sx={{ width:150, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover':
    {color: '#000000',},}} label="Payslips" {...a11yProps(3)} />
  </Tabs>

  {/* </Grid> */}
  {/* </Grid> */}
  
  </Box>

<TabPanel value={value} index={0}>
<Payrolldetails/>
</TabPanel>

<TabPanel value={value} index={1}>
<Bankdetailtable/>

</TabPanel>

<TabPanel value={value} index={2}>
<PayRate/>
</TabPanel>

<TabPanel value={value} index={3}>
{/* <Customslip/> */}
{/* <Fortnightlyslip/> */}
<Payslipdropdown/>
</TabPanel>


</Container> 
);}