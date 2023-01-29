import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import TableTab from './tabletab';
import RegularTable from './Regulartable';
import OnCall from './OncallTab2';
import { withStyles } from '@material-ui/core/styles';
import Tab2 from './Tab2';
import RegularTab from './RegularTab';
import OncallTab from "./OncallTab";
import { Button } from '@mui/material';


const CustomTab = withStyles({
  root: {
    backgroundColor: 'grey',
    margin: '5px',
  },
  selected: {
    backgroundColor: 'white',
    color: 'black',

  },
})(Tab);
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
        // sx={{ p: 3 }}
        <Box >
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

    <Container style={{ paddingTop: "10px", paddingBottom: "0px" }}>
      
        {/* <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
  </Grid> */}

        {/* <Box
          sx={{
            flexGrow: 1,
            mt: 5,


          }}
        > */}
          <Grid container>
          <Grid item xs={12} md={6}>
          <Box sx={{mt:10, }}>

            <Tabs indicatorColor={""} value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secoundary'>

              <Tab sx={{
                width: 100, backgroundColor: '#ececec', color: '#000000', margin: '1px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                  color: '#000000',
                },
              }} label="All" {...a11yProps(0)} />

              <Tab sx={{
              width: 100, backgroundColor: '#ececec', color: '#000000', margin: '1px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                color: '#000000',
              },
            }} label="Ragular" {...a11yProps(1)} />
            
            <Tab sx={{
              width: 100, backgroundColor: '#ececec', color: '#000000', margin: '1px', borderRadius: 1, textTransform: 'capitalize', '&:hover': {
                color: '#000000',
              },
            }} label="OnCall" {...a11yProps(2)} />

            </Tabs>
           
          </Box>
          </Grid>

         {/* <Grid item xs={12} md={6}>
          <Box sx={{mt:10,display: 'flex', justifyContent: 'flex-end',float:'left'}}>
            <Button variant='contained'> Add New</Button>
            </Box> 
          </Grid> */}

         </Grid>


          <TabPanel value={value} index={0}>
            {/* <All/> */}
            {/* <Tab2/> */}
            <TableTab />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <RegularTab />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <OncallTab />
          </TabPanel>

        {/* </Box> */}
    </Container>
  );
}