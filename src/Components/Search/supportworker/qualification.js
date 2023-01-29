import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";

export default function CheckboxLabels() {
  return (
    <Box sx={{ display: 'flex' }}>
     <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormGroup>
      <Typography sx={{color:"#000000", fontWeight:"bold", mt:1}}>Qualification:</Typography>
    </FormGroup>
    </FormControl>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Domestic" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Oncology" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Manual Handling" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Russian" />     
    </FormGroup>
    </FormControl>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Personal Care" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Spinal" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Meal Delivery" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Car washing" />     
    </FormGroup>
    </FormControl>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="RN" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="DSQ Card" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Blue Card" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Police Check" />     
    </FormGroup>
    </FormControl>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Stat Dec" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Hair Dressing" />    
    </FormGroup>
    </FormControl>
    </Box>
  );
}
