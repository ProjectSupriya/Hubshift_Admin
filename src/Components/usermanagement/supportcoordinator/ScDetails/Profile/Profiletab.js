import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Profile from './Profile';
import Documents from './Documents';
import ChangePassword from './ChangePassword'

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

export default function Profiletab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <Container>
  

        <Box mt={5} style={{ borderBottom: 1, borderColor: 'divider'}}>
    
        
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="inherit" indicatorColor="light" >
              <Tab sx={{
               width:230, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                  color: '#000000',
                },
              }} label="Dashborad" {...a11yProps(0)} />

              <Tab sx={{
               width:230, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                  color: '#000000',
                },
              }} label="Documents" {...a11yProps(1)} />

              <Tab sx={{
               width:230, backgroundColor: '#ececec', color: '#000000', margin: '2px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                  color: '#000000',
                },
              }} label="New Password" {...a11yProps(2)} />

              

            
            </Tabs>

         

        </Box>


        <TabPanel value={value} index={0}>
         {/* profile */}
         <Profile/>
        </TabPanel>

        <TabPanel value={value} index={1}>
        {/* Documents */}
        <Documents/>
        </TabPanel>

        <TabPanel value={value} index={2}>
         {/* Change Password  */}
         <ChangePassword/>
        </TabPanel>

      
        
     
      </Container>
    </>
  );
}