import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from '../../Dashboardappbar/appbar';
import Dashboard from './Dashboard/Dashboard'
import Newrequest from './newrequest/newrequest'
import ServiceProvider from './serviceprovider/Table'

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
    
    <PrimarySearchAppBar/>
    <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
    <Grid container spacing={2}>
 
  <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid>
  <Grid item xs={12} md={10} >
  <Box sx={{ flexGrow: 2, mb:3 }}>
 
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderColor: 'divider'}}>
      
      <Grid item xs={12} md={12}>
      
      <Tabs   value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',
          textTransform:'capitalize', 
          '&:hover': {backgroundColor: '#ffffff',color: '#000000',},}}  label="Dashboard" {...a11yProps(0)} />
          
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',textTransform:'capitalize', '&:hover': {
           backgroundColor: '#ffffff',color: '#000000', },}}  label="New Request" {...a11yProps(1)} />
            <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',textTransform:'capitalize', '&:hover': {
           backgroundColor: '#ffffff',color: '#000000', },}}  label="Service Provider" {...a11yProps(2)} />
            
         </Tabs>

        </Grid>

      </Box>

      <TabPanel value={value} index={0}>
     <Dashboard/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Newrequest/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ServiceProvider/>
      </TabPanel>

    </Box>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </>
  );
}
