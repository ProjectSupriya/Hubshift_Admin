import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Client from "./Client";
import Itemname from "./Invoicedropdown/Itemname";
import Supporttype from "./Invoicedropdown/Supporttype";
import Fundingsource from "./Invoicedropdown/Fundingsource";
import Region from "./Invoicedropdown/Region";
import Supportworker from "./Invoicedropdown/Supportworker";
import Jobtype from "./Invoicedropdown/Jobtype";
import Supportcoordinator from "./Invoicedropdown/Supportcoordinator";
import Serviceprovider from "./Invoicedropdown/Serviceprovider";
import Qualification from "./Invoicedropdown/Qualification";
import Experience from "./Invoicedropdown/Experience";
import Level from "./Invoicedropdown/Level";
import StartTime from "./Invoicedropdown/starttime";
import EndTime from "./Invoicedropdown/endtime";
import Invoice1table from "./Invoice1table";


import Date from "./Date";
import PrimarySearchAppBar from "../Sidebar/appbar";
import {
  Checkbox,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Button,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",

  color: theme.palette.text.dark,
}));

export default function Timesheet() {
  const buttongrid = {
    margin: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
  const buttonsty = {
    backgroundColor: "#01C1EB",
  };

  return (
    <>
      <PrimarySearchAppBar />

      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>


          <Grid item xs={12} md={10}>
            <Grid container>

            <Grid item xs={12} md={12}>
                <Item elevation={0}>
                <Box> <Typography fontSize='22px' fontWeight='bold'> Invoices</Typography> </Box>

                </Item>

            </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Support Type
                      </Typography>
                      <Supporttype />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Item Name
                      </Typography>
                      <Itemname />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Client{" "}
                      </Typography>
                      <Client />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
                        Appointment Date{" "}
                      </Typography>
                      <Date />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Funding Source
                      </Typography>
                      <Fundingsource />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Region
                      </Typography>
                      <Region />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Support worker
                      </Typography>
                      <Supportworker />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Job type
                      </Typography>
                      <Jobtype />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Support Coordinator
                      </Typography>
                      <Supportcoordinator />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Service Provider
                      </Typography>
                      <Serviceprovider />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Qualification
                      </Typography>
                      <Qualification />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Experience
                      </Typography>
                      <Experience />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <div>
                      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Level
                      </Typography>
                      <Level />
                    </div>
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={12}
                      >
                        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                          Start - End Times :{" "}
                        </Typography>
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        <StartTime />
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <EndTime />
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <Checkbox />{" "}
                        <Typography>&nbsp;&nbsp;Next day (Overnight</Typography>
                      </Grid>
                    </Grid>{" "}
                    <br />
                  </Box>
                </Item>
              </Grid>

              <Grid item md={12}>
                <Item elevation={0}>
                  <Box>
                    <Grid container spacing={1}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={5}
                      >
                        <Grid container spacing={1}>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            item
                            xs={12}
                            md={5}
                          >
                            <Typography
                              sx={{ fontWeight: "bold", color: "#000" }}
                            >
                              KM To:
                            </Typography>
                          </Grid>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            item
                            xs={12}
                            md={4}
                          >
                            <TextField size="small" fullWidth />
                            &nbsp;&nbsp;
                            <Typography> KM</Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={5}
                      >
                        <Grid container spacing={1}>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            item
                            xs={12}
                            md={4}
                          >
                            <Typography
                              sx={{ fontWeight: "bold", color: "#000" }}
                            >
                              KM With:
                            </Typography>
                          </Grid>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                            item
                            xs={12}
                            md={4}
                          >
                            <TextField size="small" fullWidth />
                            &nbsp;&nbsp;
                            <Typography>KM</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  
                    <Grid container spacing={1}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={2}
                      >
                        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                          Duration:{" "}
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={2}
                      >
                        <TextField size="small" fullWidth />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography sx={{ color: "#000" }}>
                          {" "}
                          120 mins
                        </Typography>
                      </Grid>
                    </Grid>
                   
                    <Grid container spacing={1}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={2}
                      >
                        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                          Accounts :{" "}
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={8}
                      >
                        <Typography href="#" sx={{ color: "#0C8AFF" }}>
                          {" "}
                          Add Settings
                        </Typography>
                      </Grid>
                    </Grid>
                   
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={12}>
                        <Item
                          elevation={0}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            alignItems: "center",
                            pl: 0,
                          }}
                        >
                          <Typography fontWeight="bold">
                            Flexible with Time :
                          </Typography>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="No"
                              control={<Radio />}
                              label="No"
                            />
                            <FormControlLabel
                              value="Yes"
                              control={<Radio />}
                              label="Yes"
                            />
                          </RadioGroup>
                        </Item>
                      </Grid>
                    </Grid>
                   
                    <Grid container spacing={1}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={2}
                      >
                        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                          Tasks:
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={10}
                      >
                        <TextField fullWidth id="fullWidth" />
                      </Grid>
                    </Grid>
                    
                    <Grid mt={3} container spacing={1}>
                      <Grid
                        sx={{
                    
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={2}
                      >
                        <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                          Notes:
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        item
                        xs={12}
                        md={10}
                      >
                        <TextField
                          multiline
                          rows={4}
                          fullWidth
                          id="fullWidth"
                        />
                      </Grid>
                    </Grid>
   
                  </Box>

                  <Divider sx={{mt:5}}/>
                </Item>
              </Grid>

              <Grid mt={3}item md={12}>
                    <Invoice1table/>
                    </Grid>

              <Grid item md={12} style={buttongrid}>
                <Button variant="contained" style={buttonsty}> Generate Invoice </Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
