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
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,

 
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Usertype from "./Usertype";
import Choosestaff from "./Choosestaff";
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



const Editshift = () => {
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
                
                Edit Shift
                </Typography>
              </Grid>

              

             
              <Grid   xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    User Type
                    </Typography>
                    <Usertype/>
                  </Box>
                </Item>
              </Grid>

              <Grid   xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Choose Staff
                    </Typography>
                    <Choosestaff/>
                  </Box>
                </Item>
              </Grid>

              <Grid xs={12} md={12}>
                <Item elevation={0}>

                <Grid container>
   <Grid  xs={6} md={2}> <Typography fontWeight='bold'> Name: </Typography> </Grid>
    <Grid  xs={6} md={2} > <Typography> Sam Nova </Typography>  </Grid>

    <Grid  xs={6} md={2}> <Typography fontWeight='bold'> Email : </Typography>  </Grid>
    <Grid  xs={6} md={2} > <Typography> sam@nova.com </Typography>  </Grid>

    <Grid  xs={6} md={2}> <Typography fontWeight='bold'> Phone </Typography>  </Grid>
    <Grid  xs={6} md={2}> <Typography> 4324343434 </Typography>   </Grid>
               </Grid>

               <Divider sx={{mt:3 }}/>
            
                </Item>

                

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
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
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

export default Editshift;
