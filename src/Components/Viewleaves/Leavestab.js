import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calender from "./Calender"
import List from "./List";

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
    
    <Box sx={{mt:5, width: '100%'}}>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
      
      <Grid item xs={12} md={12}>
      
      <Tabs   value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'100px',textTransform:'capitalize', '&:hover': {
            color: '#000000',},}}  label="List" {...a11yProps(0)} />
          
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'100px',textTransform:'capitalize', '&:hover': {
            color: '#000000', },}}  label="Calender" {...a11yProps(1)} />
         </Tabs>

        </Grid>

      </Box>

      <TabPanel value={value} index={0}>
     <List/>
      </TabPanel>

      <TabPanel value={value} index={1}>
     <Calender/>  
      </TabPanel>
      
    </Box>
    {/* </Container> */}
    </>
  );
}
