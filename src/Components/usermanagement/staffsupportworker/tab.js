import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from '../../Dashboardappbar/appbar';
import Dashboard from './dashboard'
import Newrequest from './newrequest/newrequest'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Table from '../staffsupportworker/supportworker/Table'

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
  let navigate = useNavigate();

  function applyjob() {
    navigate("/oncall");
    console.log("navigate", navigate);
  }
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
      <Grid item xs={12} md={12} sx={{ display: "flex",
                justifyContent: "end",
                alignItems: "end", p:2}}>
                
     <Button onClick={applyjob} variant="contained" sx={{textTransform:"capitalize", backgroundColor:"#56CF5B4A"
     ,color:"#000000"}}>Check On-Call</Button>
    </Grid>
      <Grid item xs={12} md={12}>
      
      <Tabs   value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',
          textTransform:'capitalize', 
          '&:hover': {backgroundColor: '#ffffff',color: '#000000',},}}  label="Dashboard" {...a11yProps(0)} />
          
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',textTransform:'capitalize', '&:hover': {
           backgroundColor: '#ffffff',color: '#000000', },}}  label="New Request" {...a11yProps(1)} />
            <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'300px',textTransform:'capitalize', '&:hover': {
           backgroundColor: '#ffffff',color: '#000000', },}}  label="Support Worker" {...a11yProps(2)} />
            
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
      <Table/>
      </TabPanel>

    </Box>
    </Box>
    </Grid>
    </Grid>
    </Container>
    </>
  );
}
