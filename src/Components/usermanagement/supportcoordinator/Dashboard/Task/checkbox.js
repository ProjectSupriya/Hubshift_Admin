import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocationOn from '@mui/icons-material/LocationOn';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Repeat every day" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Repeat on week days" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Repeat every year" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="On location" />
      <FormControlLabel control={<LocationOn sx={{p:1, color:'blue'}}/>} label="Select location" />
    </FormGroup>
  );
}
