import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Selecttemplate from "./Selecttemplate";
import Preview from "./Preview";

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

        <Container >

    <Grid container spacing={2}>


     <Grid item xs={12} md={12}>
       

      <Box mt={4}>
      
     
      <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab  className='Tabstyle' label="Select" {...a11yProps(0)} />
          
          <Tab className='Tabstyle' label="Email Info" {...a11yProps(1)} />

          <Tab className='Tabstyle' label="Preview" {...a11yProps(2)} />

         </Tabs>
       
      </Box>
  

    <TabPanel value={value} index={0}>
    <Selecttemplate/>
      </TabPanel>

      <TabPanel value={value} index={1}>
      Email Info
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Preview/>
      </TabPanel>

      </Grid>


      </Grid>

  
    </Container>
    </>
  );
}
