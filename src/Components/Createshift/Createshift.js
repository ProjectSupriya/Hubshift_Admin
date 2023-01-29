import React from "react";
import {
  useTheme,
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  styled,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,

 
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Shiftname from "./Shiftname";
import Level from "./Level";
import Date from "./date";
import Shifttable from "./Shifttable";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#01C1EB !important",
    width: "150px",
    height: "50px",
  },

  
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const AddNew = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2} >
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>
            <Grid mt={3} container>

              <Grid item xs={12} md={7} mb={3}>
                <Typography fontSize="22px" fontWeight="bold">
                
                Create Shift to publish
                </Typography>
              </Grid>

            
              <Grid   xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Shift Name
                    </Typography>
                    <Shiftname/>
                  </Box>
                </Item>
              </Grid>

              <Grid   xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Level 
                    </Typography>
                    <Level/>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
              <Item elevation={0} >

                 
                  <Box>
                    
                <Typography fontWeight="bold" fontSize="16px">       
                Shift End Time
                    </Typography>
                    <Date />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                 
                  <Box>
                    
                <Typography fontWeight="bold" fontSize="16px">       
                Shift End Time
                    </Typography>
                    <Date />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Shift Rate
                    </Typography>
                    <TextField fullWidth id="fullWidth" placeholder="$50" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    marginLeft: "-15px",
                  }}
                >
                  <Typography padding="10px" fontWeight="bold">
                  Weekend:
                  </Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Location "
                      control={<Radio />}
                      label="Location Based"
                    />
                    <FormControlLabel
                      value="Shift"
                      control={<Radio />}
                      label="Shift Based"
                    />
                  </RadioGroup>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
              <Item elevation={0}>
                  <Box>

                <Shifttable/>
                </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    marginLeft: "-15px",
                  }}
                >
                  <Typography padding="10px" fontWeight="bold">
                  Shift Allocation
                  </Typography>
                  <RadioGroup
                    row
                  >
                    <FormControlLabel
                      value="Enable "
                      control={<Radio />}
                      label="Enable "
                    />
                    <FormControlLabel
                      value="Disable"
                      control={<Radio />}
                      label="Disable "
                    />
                  </RadioGroup>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    marginLeft: "-15px",
                  }}
                >
                  <Typography padding="10px" fontWeight="bold">
                  Publish To:
                  </Typography>
                  <RadioGroup
                    row
                  >
                    <FormControlLabel
                      value="All"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="Specific"
                      control={<Radio />}
                      label="Specific "
                    />

                   <FormControlLabel
                      value="Shortlist"
                      control={<Radio />}
                      label="Shortlist "
                    />

                   <FormControlLabel
                      value="Agency"
                      control={<Radio />}
                      label="Agency "
                    />

                  </RadioGroup>
                </Item>
              </Grid>

              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    mt: 10,
                    mb: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Button variant="contained" className={classes.btn}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddNew;
