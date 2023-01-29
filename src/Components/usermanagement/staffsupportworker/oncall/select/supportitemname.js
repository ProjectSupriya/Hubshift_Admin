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
        
        <MenuItem value={10}>01_002_0107_1_1	Assistance With Self-Care Activities - Standard - Weekday Night</MenuItem>
        <MenuItem value={20}>01_002_0107_1_1_T	Assistance With Self-Care Activities - Standard - Weekday Night - TTP</MenuItem>
        <MenuItem value={30}>01_004_0107_1_1	Assistance With Personal Domestic Activities</MenuItem>
      </Select>
    </FormControl>
  );
}
