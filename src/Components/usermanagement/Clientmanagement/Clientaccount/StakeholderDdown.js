import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width:"95%" }} >
      <InputLabel id="demo-select-small">Select</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Select"
        onChange={handleChange}
      >

    <MenuItem value={10}>GP (General Practice) </MenuItem>
    <MenuItem value={10}>Psychologist</MenuItem>
    <MenuItem value={10}>Physiotherapist</MenuItem>
      <MenuItem value={10}>OT</MenuItem>
      <MenuItem value={10}>Hospital</MenuItem>
      <MenuItem value={10}>Public Guardian</MenuItem>
      <MenuItem value={10}>Family</MenuItem>
      <MenuItem value={10}>Other</MenuItem>            
      </Select>
    </FormControl>
  );
}
