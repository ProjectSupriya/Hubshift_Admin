// import React from 'react';
import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  TextField,
  FormControl,
  RadioGroup,
  Container,
  Select,
  FormControlLabel,
  Radio,
  MenuItem,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
// import QuarterlyDropDown from "./QuarterlyDropDown";
import Divider from "@mui/material/Divider";
// import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../../../../../Sidebar/appbar";

const useStyles = makeStyles((theme) => ({
  input: {
    height: 30,
    width: 60,
  },
}));

function createData(Days, all, first, second, third, fourth, fifth) {
  return { Days, all, first, second, third, fourth, fifth };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const rows = [
  createData("Sunday"),

  createData("Monday"),

  createData("Tuesday"),

  createData("Wednesday"),

  createData("thursday"),

  createData("Friday"),

  createData("Saturday"),
];

const Viewall = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <PrimarySearchAppBar />

      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={2} md={2} sx={{ display: { xs: "none", md: "flex" } }}>
            {" "}
          </Grid>
          <Grid item sm={10} xs={10} md={10} mt={12}>
            <Paper elevation={0} sx={{ paddingLeft: "20px",}}>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Grid container>
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
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Quarterly"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 4,
                        marginBottom: 8,
                      }}
                    >
                      <Checkbox />
                      <Typography fontSize="13px" fontWeight="bold">
                        Default availability is set to 15 days, 6 am - 10 pm
                      </Typography>
                    </Box>
                  </Grid>
           
           {/* jan Month*/}
                 
             <Grid container sx={{display:'flex',justityContent: 'center',alignItems: "center"}}>

           <Grid item xs={12} md={10}>
                 
            <Box style={{display:'flex',justityContent: 'center',alignItems: "center", flexDirection: 'column',backgroundColor:'#CAF5FF'}}>

              <Box sx={{  width: '100%', maxWidth: 360,}}>
               <Typography mb={2} fontSize="25px" fontWeight="bold" textAlign="center"> 1stQuarterly</Typography>
               <Divider variant="middle" />
                </Box>
        
             <Box sx={{display:'flex',flexDirection: 'row',justityContent: 'center',mt:2,}}>
               <Typography padding='15px' fontWeight="bold" fontSize="30px">Jabuary</Typography>    
            </Box>
            </Box>

            </Grid>

            <Grid item xs={12} md={10} >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ border: 1 }}>Days</TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              All
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              1st
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              2nd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              3rd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              4th
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              5th
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                            //   key={row.Days}
                            //   sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                            >
                              <TableCell
                                sx={{ border: 1 }}
                                component="th"
                                scope="row"
                              >
                                {row.Days}
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {show ? (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 1,
                                      }}
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
                                  ) : null}
                                  <Checkbox
                                    {...label}
                                    onClick={() => setShow(true)}
                                  />
                                </div>
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

            </Grid>
             </Grid>

           {/* Feb Month */}

             <Grid container sx={{display:'flex',justityContent: 'center',alignItems: "center",mt:8}}>

           <Grid item xs={12} md={10}>
                 
            <Box style={{display:'flex',justityContent: 'center',alignItems: "center", flexDirection: 'column',backgroundColor:'#CAF5FF'}}>

              <Box sx={{  width: '100%', maxWidth: 360,}}>
               <Typography mb={2} fontSize="25px" fontWeight="bold" textAlign="center"> 2ndQuarterly</Typography>
               <Divider variant="middle" />
                </Box>
        
             <Box sx={{display:'flex',flexDirection: 'row',justityContent: 'center',mt:2,}}>
               <Typography padding='15px' fontWeight="bold" fontSize="30px">February</Typography>    
            </Box>
            </Box>

            </Grid>

            <Grid item xs={12} md={10} >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ border: 1 }}>Days</TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              All
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              1st
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              2nd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              3rd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              4th
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              5th
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                            //   key={row.Days}
                            //   sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                            >
                              <TableCell
                                sx={{ border: 1 }}
                                component="th"
                                scope="row"
                              >
                                {row.Days}
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {show ? (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 1,
                                      }}
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
                                  ) : null}
                                  <Checkbox
                                    {...label}
                                    onClick={() => setShow(true)}
                                  />
                                </div>
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

            </Grid>
             </Grid>

             <Grid container sx={{display:'flex',justityContent: 'center',alignItems: "center",mt:8}}>

            <Grid item xs={12} md={10}>
                 
            <Box style={{display:'flex',justityContent: 'center',alignItems: "center", flexDirection: 'column',backgroundColor:'#CAF5FF'}}>

              <Box sx={{  width: '100%', maxWidth: 360,}}>
               <Typography mb={2} fontSize="25px" fontWeight="bold" textAlign="center"> 3rdQuarterly</Typography>
               <Divider variant="middle" />
                </Box>
        
             <Box sx={{display:'flex',flexDirection: 'row',justityContent: 'center',mt:2,}}>
               <Typography padding='15px' fontWeight="bold" fontSize="30px">March</Typography>    
            </Box>
            </Box>

             </Grid>

            <Grid item xs={12} md={10} >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ border: 1 }}>Days</TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              All
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              1st
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              2nd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              3rd
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              4th
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">
                              5th
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                            //   key={row.Days}
                            //   sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                            >
                              <TableCell
                                sx={{ border: 1 }}
                                component="th"
                                scope="row"
                              >
                                {row.Days}
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {show ? (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 1,
                                      }}
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
                                  ) : null}
                                  <Checkbox
                                    {...label}
                                    onClick={() => setShow(true)}
                                  />
                                </div>
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                              <TableCell sx={{ border: 1 }} align="right">
                                <Checkbox {...label} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

            </Grid>

             </Grid>

                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Viewall;
