import * as React from 'react';
import Box from '@mui/material/Box';
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          displayEmpty
          onChange={handleChange}
        >
         <MenuItem value=""> <em>1 Month</em> </MenuItem>
          <MenuItem value={10}>2 Month</MenuItem>
          <MenuItem value={20}>3 Month</MenuItem>
          <MenuItem value={30}>4 Month</MenuItem>
          <MenuItem value={10}>5 Month</MenuItem>
          <MenuItem value={20}>6 Month</MenuItem>
          <MenuItem value={30}>7 Month</MenuItem>
          <MenuItem value={10}>8 Month</MenuItem>
          <MenuItem value={20}>9 Month</MenuItem>
          <MenuItem value={30}>10 Month</MenuItem>
          <MenuItem value={10}>11 Month</MenuItem>
          <MenuItem value={20}>12 Month</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
