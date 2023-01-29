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
  Stack,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../Sidebar/appbar";
import UserDdown from "./User";
import SelectuserDdown from "./Selectuser";
import Date from "./date";
import Priority from "./priority";
import Status from "./status";
import Category from "./category";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#01C1EB !important",
    width: "150px",
    height: "50px",
  },

  fileupload: {
    border: "1px solid black",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  fileupload1: {
    backgroundColor: "#E0DCDC !important",
    width: "150px",
    color: "#000000 !important",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));

const Input = styled("input")({
  display: "none",
});

const Addnote = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2} sx={{}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>
            <Grid mt={3} container>
              <Grid item xs={7} md={7} mt={0}>
                <Typography
                  fontSize="22px"
                  sx={{
                    textAlign: "left",
                    color: "#000000",
                    fontWeight: "bold",
                    p: 0,
                  }}
                >
                  Add Notes
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    mt: 4,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    marginLeft: "-1px",
                  }}
                >
                  <Typography fontWeight="bold" fontSize="20px">
                    Client Name :
                  </Typography>
                  <Typography fontWeight="bold" fontSize="20px">
                    Jane Ryan :
                  </Typography>
                </Item>
              </Grid>

              <Grid xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      User
                    </Typography>
                    <UserDdown />
                  </Box>
                </Item>
              </Grid>

              <Grid xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Select user
                    </Typography>
                    <SelectuserDdown />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Title
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Assigned To
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid xs={12} md={12}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Category
                    </Typography>
                    <Category />
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
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 1500,
                      maxWidth: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontsize: "20px",
                        color: "#000000",
                        fontWeight: "700",
                        p: 0,
                      }}
                    >
                      DueDate
                    </Typography>
                    <Date />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Status
                    </Typography>

                    <Status />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      priority
                    </Typography>
                    <Priority />
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
                    Billing Type:
                  </Typography>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="anyone"
                      control={<Radio />}
                      label="Billable"
                    />
                    <FormControlLabel
                      value="private"
                      control={<Radio />}
                      label="Non-Billable"
                    />
                  </RadioGroup>
                </Item>
              </Grid>

              {/* Attach Document */}

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Box>
                    <Typography fontWeight="bold" fontSize="16px">
                      Attachments*
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Box className={classes.fileupload}>
                    <Stack
                      mt={2}
                      direction="row"
                      alignItems="center"
                      spacing={0}
                    >
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button
                          className={classes.fileupload1}
                          variant="contained"
                          component="span"
                        >
                          Choose File
                        </Button>
                      </label>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                        />
                      </label>
                    </Stack>

                    <Typography mt={3}>Drag and Drop Attachment</Typography>
                  </Box>
                </Item>
              </Grid>
              {/* Attach Document end Here */}

              <Grid item xs={12} md={12}>
                <Item elevation={0}
                
                >
                  <Box
                   
                  >
                    <Typography fontWeight="bold" fontSize="16px">
                     
                 
                      Notes*
                    </Typography>
                    <TextField multiline rows={5} fullWidth id="fullWidth" />
                  </Box>
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

export default Addnote;
