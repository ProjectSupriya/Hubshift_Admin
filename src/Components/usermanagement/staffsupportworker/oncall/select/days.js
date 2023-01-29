import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={days}
        getOptionLabel={(option) => option.title}
        // defaultValue={[days[5]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="SelectedOptions"
            placeholder="Select"
          />
        )}
      />
     
     
    </Stack>
  );
}


const days = [
  { title: 'All' },
  { title: 'Sunday' },
  { title: 'Monday' },
  { title: 'Tuesday' },
  { title: 'Wednesday' },
  { title: 'Thursday' },
  { title: "Friday" },
  { title: 'Saturday' },
  
];