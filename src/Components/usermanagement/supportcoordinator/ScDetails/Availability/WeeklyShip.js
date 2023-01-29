import { Checkbox, Grid, Typography, Box,TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  
    input: {
      height: 30,
      width: 60,
    },


    weeklyShift:{
        paddingLeft:'70px',
        [theme.breakpoints.down('sm')]: {
          paddingLeft:'0px',
          
      },
    },

 
  }));
  

const WeeklyShip = () => {
    const classes = useStyles();
  return (
    <>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox />
              <Typography fontSize="13px" fontWeight="bold">
                Default availability is set to 7 days, 6 am - 10 pm
              </Typography>
            </Box>
          </Grid>

          <Grid container  mt={6}
          
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Grid item xs={12} sm={12} md={1}>
              <Box>
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
              <Box>
                <Typography fontSize="12px" fontWeight="bold">
                  Mon
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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
              <Box>
                <Typography fontSize="12px" fontWeight="bold">
                  Tue
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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
              <Box>
                <Typography fontSize="12px" fontWeight="bold">
                  Thu
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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
              <Box>
                <Typography fontSize="12px" fontWeight="bold">
                  Fri
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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
              <Box>
                <Typography fontSize="12px" fontWeight="bold">
                  Sat
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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

                <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
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
        </Grid>
      </div>
    </>
  );
};

export default WeeklyShip;
