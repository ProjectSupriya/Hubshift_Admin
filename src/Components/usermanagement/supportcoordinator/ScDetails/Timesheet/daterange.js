import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Date Range"
          onChange={handleChange}
        
        >
          <MenuItem value={10}  sx={{m:1, borderRadius:"10px"}}>This month</MenuItem>
          <MenuItem value={20}  sx={{m:1, borderRadius:"10px"}}>This quarter to date</MenuItem>
          <MenuItem value={30} sx={{m:1, borderRadius:"10px"}}>Tax month</MenuItem>
          <MenuItem value={40} sx={{m:1, borderRadius:"10px"}}>Last month</MenuItem>
          <MenuItem value={50} sx={{m:1, borderRadius:"10px"}}>Last quarter</MenuItem>
          <MenuItem value={60} sx={{m:1, borderRadius:"10px"}}>Financial year</MenuItem>
          <MenuItem value={70} sx={{m:1, borderRadius:"10px"}}>Last Financial year</MenuItem>
          <MenuItem value={80} sx={{m:1, borderRadius:"10px"}}>Custom range</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}