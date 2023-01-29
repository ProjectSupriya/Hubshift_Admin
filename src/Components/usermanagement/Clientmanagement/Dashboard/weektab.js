import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Settings } from '@material-ui/icons';

export default function AccessibleTabs1() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex",
    justifyContent: "end",
    alignItems: "end"}}>
      <Tabs
        onChange={handleChange}
        value={value}
        backgroundColor='primary'
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
       
      >
        <Tab label="Today" />
        <Tab label="Week" />
        <Tab label="Month" />
        <Tab label="Quarter" />
        <Button className='settingbtn' size='small'><Settings/> Settings</Button>
      </Tabs>
    </Box>
  );
}