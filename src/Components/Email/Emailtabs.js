import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from '../Sidebar/appbar'
import Emailtemplate from "./Emailtemplates";
import Scheduled from "./Scheduled";
import History from "./History";


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

        <Container >

        <Grid container spacing={2}>

        <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
        </Grid>

        <Grid item xs={12} md={10}>
        <Box>
        <Typography fontWeight='bold' fontSize='20px'>Email</Typography>
        </Box>

      <Box mt={4}>
      
     
      <Tabs   value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab  className='Tabstyle' label="Blank Email" {...a11yProps(0)} />
          
          <Tab className='Tabstyle' label="Templates" {...a11yProps(1)} />

           
          <Tab className='Tabstyle' label="Scheduled" {...a11yProps(2)} />

           
          <Tab className='Tabstyle' label="History" {...a11yProps(3)} />
         </Tabs>
       
      </Box>
  

    <TabPanel value={value} index={0}>
     Blank Email
      </TabPanel>

      <TabPanel value={value} index={1}>
      <Emailtemplate/>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Scheduled/>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <History/>
      </TabPanel>


      </Grid>


      </Grid>

  
    </Container>
    </>
  );
}
