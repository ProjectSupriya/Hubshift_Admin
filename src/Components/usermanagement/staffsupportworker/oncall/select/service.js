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
    <FormControl sx={{ m: 1, width:"100%" }} size="small">
      <InputLabel id="demo-select-small">Select</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Select"
        onChange={handleChange}
      >
        
        <MenuItem value={10}>Weekday Daytime</MenuItem>
        <MenuItem value={20}>Weekday Evening</MenuItem>
        <MenuItem value={30}>Weekday Night</MenuItem>
        <MenuItem value={40}>Saturday</MenuItem>
        <MenuItem value={50}>Sunday</MenuItem>
        <MenuItem value={60}>Public Holiday</MenuItem>
      </Select>
    </FormControl>
  );
}
