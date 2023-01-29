import { useEffect, useState } from "react";
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
// import Divider from '@mui/material/Divider';
import Fortnightlyslip from "./Fortnightlyslip";
import Customslip from './Customslip';
import Monthlyslip from "./Monthlyslip"

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



export default function FullWidthGrid() {
  const theme = useTheme();
  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [car, setCar] = useState(getInitialState);

  const [ferrariContentVisible, setFerrariContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);

  useEffect(() => {
    car === "ferrari"
      ? setFerrariContentVisible(true)
      : setFerrariContentVisible(false);
    car === "benz" ? setBenzContentVisible(true) : setBenzContentVisible(false);
    car === "audi" ? setAudiContentVisible(true) : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "select your dream car")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (

         
          <Box>
            
                
                 
                  <FormControl sx={{ mt:2,width:400, backgroundColor: "#fff" }} size="small">
                  <InputLabel id="demo-select-small">Select</InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={car} onChange={handleOnChange}
                      // onChange={handleChange}
                    >
                     
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="ferrari"
                      >
                        Custom
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                        }}
                        value="benz"
                      >
                        Fortnightly
                      </MenuItem>
                      <MenuItem
                        sx={{
                          m: 1,
                          borderRadius: "10px",
                          "&:hover": { backgroundColor: "#CCE8F7" },
                          
                        }}
                        value="audi"
                        
                      >
                        Monthly
                      </MenuItem>
                   
                    </Select>
                  </FormControl>

                  {ferrariContentVisible && <Customslip />}
                  {benzContentVisible && <Fortnightlyslip />}
                   {audiContentVisible && <Monthlyslip />}
                 
                   
              
          </Box>

       
  
      
   
  );
}
