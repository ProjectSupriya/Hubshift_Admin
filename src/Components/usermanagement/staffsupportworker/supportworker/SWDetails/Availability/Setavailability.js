import {
  Grid,
  Paper,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Container,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  List,
  ListItem,
  TextField,
  Button
} from "@mui/material";
import React from "react";
import Leftbar from "../Navbar/Leftbar";
import Navbar from "../Navbar/Navbar";
import { makeStyles } from "@material-ui/core";
import DropDown from "../AgreementLetter/countrydropdown";
import PrimarySearchAppBar from "../Navbar/appbar";

const useStyles = makeStyles((theme) => ({
  paperBorder: {
    border: "1px solid black",
    paddingLeft:'20px',
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
  weeklyShift:{
      paddingLeft:'100px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft:'0px',
        
    },
  },
  btn: {
   
    width: '130px',
    padding: '0 30px',
    backgroundColor: "#05C3DD !important ", //important
    color: "#ffffff !important",
   
}
}));

const styles = (theme) => ({
  input: {
    height: 20,
    maxWidth: '100%',
  },
});

const Setavailability = () => {
  // const { classes } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <>
      {/* <Navbar /> */}
      <PrimarySearchAppBar/>

      {/* <div> */}
      <Container style={{paddingTop:"0px", paddingBottom:"0px"}}>
        <Grid container spacing={0}>

          {/* <Grid item sm={4} xs={4}>
            <Leftbar />
          </Grid> */}

          <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> </Grid>
           
          <Grid item sm={10} xs={10} md={10} mt={8}>
            {/* Set Availability  */}

            <Paper className={classes.paperBorder}>
              {/* <Container> */}
              {/* justifyContent: "flex-start" */}
              <Box style={{ display:'flex',justifyContent:'center'  }}> 
                  <Grid Container>
                    <Grid item md={12} xs={12}>
                      <Typography fontSize="20px" fontWeight="bold">
                        Support Coordinator
                      </Typography>
                    </Grid>

                    <Grid item xs={8} md={12} mt={4}>
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
                          //  SelectProps={{ autoWidth: true }}

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

                    <Grid item xs={12} md={12} mt={4}>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Typography>Roster Type:</Typography>}
                            label=""
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Weekly"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Fortnightly"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Monthly"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={8} md={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <Checkbox />
                        <Typography>
                          Default availability is set to 7 days, 6 am - 10 pm{" "}
                        </Typography>
                      </Box>
                    </Grid>

                <Grid container mt={6}>

                      <Grid item xs={12} sm={12} md={2}>
                    
                            <Box > 
                              <Typography fontSize="13px" fontWeight="bold">
                                Day
                              </Typography>
                              <Typography mt={2} fontSize="13px" fontWeight="bold">
                                Time
                              </Typography>

                            </Box>
                            </Grid>
                            {/* Mon Shift */}
                    <Grid item xs={12} sm={12} md={3}>
                            <Box >
                            
                           
                              <Typography fontSize="12px" fontWeight="bold">
                                Mon
                              </Typography>

                            <Box
                                sx={{ display: "flex", flexDirection: "row", mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                     </Grid>
                            {/* Tue Shift */}
                     <Grid item xs={12} sm={12} md={3}>
                            <Box >
                            
                           
                              <Typography fontSize="12px" fontWeight="bold">
                                Tue
                              </Typography>

                              <Box
                                sx={{ display: "flex", flexDirection: "row",mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                    </Grid>
                            {/* Web Shift */}
                    <Grid item xs={12} sm={12} md={3}>
                            <Box>
                            
                            
                              <Typography fontSize="12px" fontWeight="bold">
                                Web
                              </Typography>

                              <Box
                                sx={{ display: "flex", flexDirection: "row",mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                    </Grid>

                      
                    
              </Grid>
              
                <Grid container mt={2} className={classes.weeklyShift}>

                <Grid item xs={12} sm={12} md={3}>
                            <Box >
                            
                           
                              <Typography fontSize="12px" fontWeight="bold">
                                Thu
                              </Typography>

                            <Box
                                sx={{ display: "flex", flexDirection: "row", mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                     </Grid>
                            {/* Mon Shift */}
                    <Grid item xs={12} sm={12} md={3}>
                            <Box >
                            
                           
                              <Typography fontSize="12px" fontWeight="bold">
                                Fri
                              </Typography>

                            <Box
                                sx={{ display: "flex", flexDirection: "row", mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                     </Grid>
                            {/* Tue Shift */}
                     <Grid item xs={12} sm={12} md={3}>
                            <Box >
                            
                           
                              <Typography fontSize="12px" fontWeight="bold">
                                Sat
                              </Typography>

                              <Box
                                sx={{ display: "flex", flexDirection: "row",mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                    </Grid>
                            {/* Web Shift */}
                    <Grid item xs={12} sm={12} md={3}>
                            <Box>
                            
                            
                              <Typography fontSize="12px" fontWeight="bold">
                                Sun
                              </Typography>

                              <Box
                                sx={{ display: "flex", flexDirection: "row",mt:1 }}
                              >
                                <TextField
                                  variant="outlined"
                                  label="Start"
                                  defaultValue="9:00"
                                  id="outlined-required"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                ></TextField>

                                <TextField
                                  required
                                  id="outlined-required"
                                  label="end Time"
                                  defaultValue="7:00"
                                  InputProps={{
                                    className: classes.input,
                                  }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </Box>
                            </Box>
                    </Grid>

                      
                    
              </Grid>

              <Grid item xs={12} md={12} mt={20} mb={10}
            sx={{
              display:'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
       
            <Button className={classes.btn}>Save</Button>

            </Grid>

                  </Grid>
                </Box>
              {/* </Container> */}
            </Paper>

            <Box
              sx={{
                mt: 10,
                mb: 10,
                paddingLeft: "20px",
                backgroundColor: "#D3D3D3",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography paddingLeft={0} fontSize="25px" fontWeight="600">
                Note:
              </Typography>

              <Typography>
                {" "}
                <Checkbox />
                Default availability is set to 7 days, 6 am - 10 pm{" "}
              </Typography>

              <Typography>
                This timing gets updated as per shift name
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>
      {/* </div> */}
    </>
  );
};

export default Setavailability;
