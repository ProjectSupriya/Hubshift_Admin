import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Documents from './document'
import Appbar from './appbar'
import Profile from './profile'

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
   <Appbar/>
    <Container>
   <Typography sx={{ mb:8,fontWeight:'700',color:'#00527E',fontSize:'40px'}}>Client Details</Typography></Container>
   
   <Container sx={{mt:10, mb:10}}>


    <Box sx={{ width: '100%'}}>
    <Paper sx={{ width: '100%',borderRadius:'50px', mb: 2 }}  elevation={10} >
      <Box sx={{p:2, borderBottom: 1, borderColor: 'divider', borderTopLeftRadius:'30px',borderTopRightRadius:'30px', backgroundColor: '#008ED9'}}>
      <Grid item xs={12} md={4} >
      <Tabs  value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit" indicatorColor="main">
          <Tab sx={{ fontSize:'20px', color: '#ffffff', m: 1, borderRadius:1, width:'210px',textTransform:'capitalize'}}  label=" Profile" {...a11yProps(0)} />
          
          <Tab sx={{fontSize:'20px',color: '#ffffff', m: 1, borderRadius:1, width:'210px',textTransform:'capitalize'}}  label=" Documents" {...a11yProps(1)} />
          
        </Tabs>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
     <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
     <Documents/>
        
      </TabPanel>  
      </Paper>
    </Box>
    </Container>
    </>
  );
}
