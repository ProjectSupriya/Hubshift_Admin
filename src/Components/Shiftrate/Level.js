import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: '100%' }} >
      {/* <InputLabel id="demo-select-small">Category</InputLabel>   */}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Select"
        onChange={handleChange}
      >
        
        <MenuItem value={10}>Level 1 </MenuItem>
        <MenuItem value={10}>Level 2 </MenuItem>
        <MenuItem value={10}>Level 3 </MenuItem>
        <MenuItem value={10}>Level 4 </MenuItem>
        <MenuItem value={10}>Level 5 </MenuItem>
        <MenuItem value={10}>Level 6 </MenuItem>
        <MenuItem value={10}>Level 7 </MenuItem>
        <MenuItem value={10}>Level 8 </MenuItem>
        <MenuItem value={10}>Level 9 </MenuItem>
        <MenuItem value={10}>Level 10 </MenuItem>











      
      </Select>
    </FormControl>
  );
}
