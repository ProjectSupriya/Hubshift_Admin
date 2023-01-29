import { Grid,FormControl,Typography,Select,MenuItem } from '@mui/material';
import React from 'react';

const MonthDropDown = () => {
    const [age, setAge] = React.useState("");
 
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <>
          <div>
          <Grid item xs={8} md={12} mt={4}>
       
                    <FormControl sx={{  }} size="small">
                      <Typography>
                    
                        Month: August
                      </Typography>
                      <Select
                        variant="outlined"
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Jen</MenuItem>
                        <MenuItem value={2}>Feb</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </Grid>
         </div>  
        </>
    );
};

export default MonthDropDown;