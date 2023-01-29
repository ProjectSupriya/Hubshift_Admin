import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from '../Sidebar/appbar'
import { Container } from '@mui/material';
import NDIS from "./InvoiceNdis"
import Client from "./InvoiceClient"
import Generateinvoice from "./Generateinvoice"



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

  <Container>

  <Grid container spacing={2}>


<Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
</Grid>

<Grid item xs={12} md={10}>
    
    <Paper sx={{ width: '100%',borderRadius:'10px', mb: 2, mt:5}}  elevation={0} >
  <Grid item xs={12} md={12} >

  {/* <Grid item  md={12}>

<Item elevation={0}>
  
  <Box> <Typography fontSize='22px' fontWeight='bold'> Invoices</Typography> </Box>
  
  </Item>
  </Grid> */}

    <Box sx={{ width: '100%'}}>
    
      <Box sx={{ borderColor: 'divider'}}>
      <Grid item xs={12} md={12} >
      
      <Tabs   value={value} onChange={handleChange}  aria-label="basic tabs example" textColor="inherit"  indicatorColor="light" >
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'100px',textTransform:'capitalize', '&:hover': {
            color: '#000000',},}}  label="NDIS" {...a11yProps(0)} />
          
          <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'100px',textTransform:'capitalize', '&:hover': {
            color: '#000000', },}}  label="Client" {...a11yProps(1)} />

            <Tab sx={{backgroundColor: '#808080', color: '#ffffff', m: 1, borderRadius:1, width:'100px',textTransform:'capitalize', '&:hover': {
            color: '#000000', },}}  label="Generate Invoice" {...a11yProps(2)} />
         </Tabs>

        </Grid>

      </Box>

      <TabPanel value={value} index={0}>
      <NDIS/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Client/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Generateinvoice/>
      </TabPanel>
      </Box>

    </Grid>
    </Paper>

    </Grid>
    </Grid>

    </Container>
   
   
    </>
  );
}
