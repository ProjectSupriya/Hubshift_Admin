import React from "react";
import {
  useTheme,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  styled,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,

} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Select from './Select'
import Leave from "./Leavestab"

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



const Addquater = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

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
            <Grid mt={3} container>

              <Grid item xs={12} md={12} mb={3}>
                <Typography fontSize="22px" fontWeight="bold">
                
                View Leaves
                </Typography>
              </Grid>

              <Grid xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Leave status
                    </Typography>
                    <Select/>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={4}>  
              <Item elevation={0}>
                  <Box> 
                 
                <Typography textAlign='center' fontWeight="bold" fontSize="16px">
                Leave Period
                </Typography>
                <Typography textAlign='center' fontSize="16px">
                  {"< July 2022 >" }
                </Typography>
                </Box>


                </Item>
              </Grid>

              <Grid xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    Leave category
                    </Typography>
                    <Select/>
                  </Box>
                </Item>
              </Grid>

          
              <Grid item xs={12} md={4}>
              <Item elevation={0}>

              <Box> 

              <FormGroup>
              <FormControlLabel labelPlacement="End" control={<Checkbox defaultChecked />} label="Hide location labels" />
              <FormControlLabel labelPlacement="End" control={<Checkbox defaultChecked />} label="Hide employees without events"/>
              <FormControlLabel labelPlacement="End" control={<Checkbox defaultChecked />} label="Show unavailabilities" />
              </FormGroup>  

              </Box>
              </Item> 

              </Grid>

              <Grid xs={12} md={4}>
                <Item elevation={0}>
                  <Box >
                    <Typography fontWeight="bold" fontSize="16px">
                    User
                    </Typography>
                    <Select/>
                  </Box>
                </Item>
              </Grid>

              <Grid xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                    location
                    </Typography>
                    <Select/>
                  </Box>
                </Item>
              </Grid>

              <Leave/>


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

export default Addquater;
