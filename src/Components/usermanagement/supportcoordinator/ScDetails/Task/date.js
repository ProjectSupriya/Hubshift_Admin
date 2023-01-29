import * as React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
           
        
     
      <DatePicker
        placeholder="DD/MM/YYYY"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField fullWidth id="fullWidth" {...params} />}
      />
    </LocalizationProvider>
  );
}
