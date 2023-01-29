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

const Tab2 = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <div style={{}}>
            <Box sx={{float: 'right' }}>
                <Tabs indicatorColor={""} value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secoundary'>
                    <CustomTab label="Today" {...a11yProps(0)} />
                    <CustomTab label="Week" {...a11yProps(1)} />
                    <CustomTab label="Month" {...a11yProps(2)} />
                    <CustomTab label="Quarter" {...a11yProps(3)} />
                </Tabs>
            </Box>

            <Box sx={{}}>

                <TabPanel value={value} index={0}>
                    <TableTab/>
                </TabPanel>
                 
                 {/* Regular table */}

                <TabPanel value={value} index={1}>
                     
                </TabPanel>

                <TabPanel value={value} index={2}>
                 
                 
                </TabPanel>
            </Box>
        </div>
        </>
    );
};

export default Tab2;