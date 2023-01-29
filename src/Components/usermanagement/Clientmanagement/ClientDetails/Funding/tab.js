import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import List from './list'
import Chart from './chart'




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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <>
    <Container style={{paddingTop:"20px",  paddingBottom:"10px"}}>
    <Grid container spacing={2}>
  <Box
      sx={{
        flexGrow: 1,

      }}
    >


    <Box mt={5} style={{ borderBottom: 1, borderColor: 'divider'}}>
    
        
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="light" >
      <Tab className="Tabstyle"
      
     
      label="List" {...a11yProps(0)} />

      <Tab className="Tabstyle" 
     
       label="Chart" {...a11yProps(1)} />

    
    </Tabs>

 

</Box>


<TabPanel value={value} index={0}>
<List/>
</TabPanel>
<TabPanel value={value} index={1}>
 <Chart/>
</TabPanel>
</Box> 
</Grid>
</Container> 
</>
);}