import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
//   const theme = useTheme();
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    
          <Box>
            

                <Item
                  sx={{
                    textAlign: "left",
                    m: 0,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                  }}
                  elevation={0}
                >
                  <Box sx={{backgroundColor: "#fff",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  maxWidth: "100%",
                  ml:0,}}>
                 
                  <FormControl sx={{ width:2000, backgroundColor: "#fff" }}>
                   
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      
                      onChange={handleChange}
                    >
                     
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="SupportCooardinator"
                      >
                        Homecare
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="Supervisor"
                      >
                        Community Access
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="Accountant"
                      >
                        SIL/SDA
                      </MenuItem>
                   
                    </Select>
                  </FormControl>
                  </Box>
                 
                </Item>
                
             
          </Box>
  
  );
}
