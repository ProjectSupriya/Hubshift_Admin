import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Divider from '@mui/material/Divider';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Support Worker",
  "Support Cooardinator",
  "Service Provider",
  "Registered Nurse",
  "Client",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const theme = useTheme();
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
            {/* <Grid  spacing={0}> */}
            {/* <Grid item xs={12} md={12}> */}
                
                 
                  <FormControl sx={{ width:500, backgroundColor: "#fff" }}>
                   
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
                        Support Cooardinator
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="Supervisor"
                      >
                        Supervisor
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="Accountant"
                      >
                        Accountant
                      </MenuItem>
                   
                    </Select>
                  </FormControl>
                 
                   
              {/* </Grid> */}
            
            {/* </Grid> */}
          </Box>

       
  
      
   
  );
}
