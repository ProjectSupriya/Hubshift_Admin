import { Grid,FormControl,Typography,Select,MenuItem } from '@mui/material';
import React from 'react';

const QuarterlyDropDown = () => {
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
                    
                      Quarterly
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
                        <MenuItem value={1}>1st Quarterly</MenuItem>
                        <MenuItem value={1}>2nd Quarterly</MenuItem>
                        <MenuItem value={1}>3rd Quarterly</MenuItem>
                        <MenuItem value={1}>4th Quarterly</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </Grid>
         </div>  
        </>
    );
};

export default QuarterlyDropDown;