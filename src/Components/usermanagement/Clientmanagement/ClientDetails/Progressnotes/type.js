import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
        label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Follow Up</MenuItem>
          <MenuItem value={20}>Shift Note</MenuItem>
          <MenuItem value={30}>General Info</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
