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
          <MenuItem value={10}> 1 </MenuItem>
          <MenuItem value={10}> 2 </MenuItem>
          <MenuItem value={10}> 3  </MenuItem>
          <MenuItem value={10}> 4  </MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}