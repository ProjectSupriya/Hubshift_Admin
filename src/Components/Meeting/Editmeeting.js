import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../Sidebar/appbar";
import { Box, Button, Checkbox, FormControlLabel, Link, Radio, RadioGroup, TextField } from '@mui/material';
import Date from './date'
import DropDown from "./Country"
import Map from '../assets/map2.png'
import Table from './Table'
// import './Styling/Goal.css';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',

  color: theme.palette.text.dark,

}));
// const Input = styled("input")({
//   display: "none",
// });

const radiogroupsty = {
  marginLeft: '-20px',
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
}

const buttongrid = {
  marginTop: '30px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const buttonsty = {
  backgroundColor: "#01C1EB"
}

export default function ColumnsGrid() {

  return (
    <>

      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "20px", paddingBottom: "10px" }}>
        <Grid container spacing={2}>

          <Grid item xs={2} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          </Grid>

          <Grid item xs={12} md={10}>

            <Grid container spacing={2}>

              <Grid item xs={12} md={12} >
                <Item
                  elevation={0}>

                  <Typography sx={{ fontWeight: "bold", fontSize: "25px", pb: 2 }}>Edit Meeting</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pb: 2 }}>Client Meeting</Typography>


                  <Grid mt={2} container spacing={1}>

                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>Client Name:</Typography>
                      &nbsp;&nbsp;
                      <Typography sx={{ color: "#000", fontSize: "16px" }}>Jack Cherry</Typography>
                    </Grid>

                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>NDIS Number:</Typography>
                      &nbsp;&nbsp;
                      <Typography sx={{ color: "#000", fontSize: "16px" }}>3423444</Typography>
                    </Grid>

                  </Grid> <br />

                  <Grid mt={2} container spacing={1}>

                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>NDIS Zone: </Typography>
                      &nbsp;&nbsp;
                      <Typography sx={{ color: "#000", fontSize: "16px" }}>NSW </Typography>
                    </Grid>

                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "16px" }}>Catalogue:</Typography>
                      &nbsp;&nbsp;
                      <Typography sx={{ color: "#000", fontSize: "16px" }}>June 2022</Typography>
                    </Grid>

                    <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={4}>
                      <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "20px" }}>Status:</Typography>
                      &nbsp;&nbsp;
                      <Typography sx={{ color: "#000", fontSize: "20px" }}>New</Typography>
                    </Grid>

                    <Grid sx={{ mt:2,display: 'flex', flexDirection: 'row', alignItems: 'center' }} item xs={12} md={12}>



                      <Typography padding='5px' fontSize='16px' fontWeight='bold'>Meeting type:</Typography>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >

                        <FormControlLabel value="anyone" control={<Radio />} label="Video Conferencing" />
                        <FormControlLabel value="private" control={<Radio />} label="Audio Conferencing" />
                        <FormControlLabel value="private" control={<Radio />} label="Chat " />
                        <FormControlLabel value="private" control={<Radio />} label="meet" />



                      </RadioGroup>



                    </Grid>

                  </Grid> <br />

                </Item>

              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Due Date</Typography>
                      <Date />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Time:</Typography>
                      <TextField
                        // label="Title"
                        id="outlined-size-small"
                      />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Meeting Location:</Typography>
                      <TextField
                        // label="Title"
                        id="outlined-size-small"
                      />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                  <Typography
                    sx={{ textAlign: "center", textDecoration: "underline" }}
                  >
                    Can’t find your residential address above?
                  </Typography>
                </Link>
              </Grid>


              <Grid sx={{ p: 1, mt: 5 }} container >

                <Grid item xs={12} md={12}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox />
                      <Typography>Enter Residential Address manually</Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Address lane 1:</Typography>
                        <TextField
                          // label="Title"
                          id="outlined-size-small"
                        />
                      </div>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Address lane 1:</Typography>
                        <TextField
                          // label="Title"
                          id="outlined-size-small"
                        />
                      </div>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>City/Town:</Typography>
                        <TextField
                          // label="Title"
                          id="outlined-size-small"
                        />
                      </div>
                    </Box>
                  </Item>
                </Grid>

                <Grid container>

                  <Grid item xs={12} md={6}>

                    <Item
                      elevation={0}>
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Country</Typography>
                          <DropDown />
                        </div>
                      </Box>
                    </Item>

                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Pastcode</Typography>
                        <TextField
                          // label="Title"
                          id="outlined-size-small"
                        />
                      </div>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Country</Typography>
                        <TextField
                          // label="Title"
                          id="outlined-size-small"
                        />
                      </div>
                    </Box>
                  </Item>
                </Grid>

              </Grid>

              <Grid item xs={12} md={12}>

                <img
                  src={Map}
                  alt=""
                  style={{ objectFit: "contain", mt: 0, width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Duration</Typography>
                      <TextField
                        // label="Title"
                        id="outlined-size-small"
                      />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <Typography style={{ fontSize: '16px', fontWeight: 600 }}>Time Zone</Typography>
                      <TextField
                        // label="Title"
                        id="outlined-size-small"
                      />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>

                <Table />

              </Grid>

              <Grid item xs={12} md={12}>

                <Item
                  elevation={0}
                  sx={radiogroupsty}


                >

                  <Typography padding='10px' fontSize='16px' fontWeight='bold'>Reminder:</Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >

                    <FormControlLabel value="anyone" control={<Radio />} label="5 minutes" />
                    <FormControlLabel value="private" control={<Radio />} label="10 minutes" />

                  </RadioGroup>

                </Item>

              </Grid>

              <Grid item xs={12} md={12} style={buttongrid}>
                <Button variant='contained' style={buttonsty}> Save</Button>
              </Grid>




            </Grid>
          </Grid>
        </Grid>
      </Container>


    </>
  );
}
