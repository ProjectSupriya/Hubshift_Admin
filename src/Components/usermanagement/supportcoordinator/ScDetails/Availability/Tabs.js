import * as React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@material-ui/core";
import Fortnightly from "./Fortnightly";
import WeeklyShip from "./WeeklyShip";
import Monthly from "./Monthly";
import Quarterly from "./Quarterly";


const useStyles = makeStyles((theme) => ({
  paperBorder: {
  },
  text: {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "20px",
    fontWeight: "bold",
  },
  input: {
    height: 30,
    width: 60,
  },
  test: {
    color: "red",
    fontSize: "10px",
  },
  weeklyShift: {
    paddingLeft: "70px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
    },
  },
  btn: {
    width: "130px",
    padding: "0 30px",
    backgroundColor: "#05C3DD !important ", //important
    color: "#ffffff !important",
  },
}));



const ShipTabs = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState("0");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      

      
      <Container style={{paddingTop:"0px", paddingBottom:"0px"}}>
        <Grid container spacing={2}  sx={{}}>

         
  
       
          <Grid item sm={12} xs={12} md={12} mt={12}>
            {/* Set Availability  */}
            {/* <Container> */}
            <Paper  elevation={0} className={classes.paperBorder}>
              {/* <Container> */}
              {/* justifyContent: "flex-start" */}
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Grid Container>
                  
                  <Grid item xs={8} md={12}>
                    <FormControl sx={{ width: "50vw" }} size="medium">
                      <Typography
                        sx={{
                          textAlign: "left",
                          ml: 1,
                          fontsize: "20px",
                          color: "#000000",
                          fontWeight: "700",
                          p: 0,
                        }}
                      >
                        Shift Name
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
                        <MenuItem value={1}>General</MenuItem>
                        <MenuItem value={2}>Night</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} mt={2}>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={
                            <Typography fontSize="13px" fontWeight="bold">
                              {" "}
                              Roster Type:
                            </Typography>
                          }
                        />
                        <div>

                          <TabContext value={value}>
                            <div>
                              <TabList
                                onChange={handleTabChange}
                                aria-label="lab API tabs example"
                              >
                                <Tab
                                  icon={<Radio />}
                                  value="0"
                                  iconPosition="start"
                                  label="weekly"
                                />
                                <Tab
                                  icon={<Radio />}
                                  value="1"
                                  iconPosition="start"
                                  label="Fortnightly"
                                />
                                <Tab
                                  icon={<Radio />}
                                  value="2"
                                  iconPosition="start"
                                  label="Monthly"
                                />
                                <Tab
                                  icon={<Radio />}
                                  value="3"
                                  iconPosition="start"
                                  label="Quarterly"
                                />
                              </TabList>
                            </div>
                            <TabPanel value="0">

                            <Grid item xs={12} sm={12} md={12} mt={4}>
                              <WeeklyShip /> 

                              </Grid> 
                            </TabPanel>
                            <TabPanel value="1">

                            <Grid item xs={12} sm={12} md={12} mt={4}>
                              
                              <Fortnightly />
                              </Grid>
                            </TabPanel>

                            <TabPanel value="2" >
                              <Monthly/>
                            </TabPanel>

                            <TabPanel value="3" >
                              <Quarterly/>
                            </TabPanel>
                            
                          </TabContext>

                        </div>
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={12}
                    mt={20}
                    mb={10}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button className={classes.btn}>Save</Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>

            
            {/* </Container> */}
          </Grid>
       

        </Grid>
        </Container>
    </>
  );
};

export default ShipTabs;
