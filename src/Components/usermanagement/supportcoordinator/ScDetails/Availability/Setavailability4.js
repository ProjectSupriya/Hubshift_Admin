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
  Checkbox,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Navbar/appbar";
import Quarterly from "./Quarterly";

const useStyles = makeStyles((theme) => ({
  paperBorder: {
    border: "1px solid black",
    paddingLeft: '20px',
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
    paddingLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',

    },
  },
  btn: {

    width: '130px',
    padding: '0 30px',
    backgroundColor: "#05C3DD !important ", //important
    color: "#ffffff !important",

  }
}));



const Setavailability4 = () => {

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <>

      <PrimarySearchAppBar />

      {/* <div> */}
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={0}>



          <Grid item xs={2} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}> </Grid>

          <Grid item sm={10} xs={10} md={10} mt={8}>

            <Paper className={classes.paperBorder}>

              <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid Container >
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
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                 

                  {/* <Quarterly /> */}

                </Grid>
               
              </Box>
              <Quarterly />

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

export default Setavailability4;
