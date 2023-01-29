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
  FormLabel,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import Draggable from "react-draggable";
import UserDdown from "./User";
import SelectuserDdown from "./Selectuser";
import Date from "./date";
import Priority from "./priority";
import Status from "./status";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles((theme) => ({
  Modelbutton: {
    margin: "5px",
    height: "40px",
    width: "160px",
    padding: "0 30px",
    backgroundColor: "#05C3DD !important ", //important
    color: "#FFFFFF ",
  },
  btn: {
    backgroundColor: "#01C1EB !important",
    color: "#ffffff !important",
    fontSize: "18px",
    width: "150px",
    height: "50px",
    fontWeight: "600",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textTransform: "capitalize",
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

const Viewnote = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <Grid item xs={10} md={10}>
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
                <Typography
                  sx={{
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    padding: "5px",
                  }}
                >
                  User
                </Typography>
                <UserDdown />
              </Grid>

              <Grid xs={12} md={6}>
                <Typography
                  sx={{
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    padding: "5px",
                  }}
                >
                  Select user
                </Typography>
                <SelectuserDdown />
              </Grid>

              {/* <Grid item xs={6} md={6} mt={2} mb={3}>

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
                    *Type
                  </Typography>
                  <TypeDropdown />
                </Grid> */}

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
                      Title
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
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
                      Assigned To
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
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
                      Category
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
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
                <Typography
                  sx={{
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    padding: "5px",
                  }}
                >
                  Status
                </Typography>

                <Status />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontsize: "20px",
                    color: "#000000",
                    fontWeight: "700",
                    padding: "5px",
                  }}
                >
                  priority
                </Typography>
                <Priority />
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    marginLeft: '-15px'
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
                <Item
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 900,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      m: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: "black",
                        fontWeight: "600",
                        ml: -2,
                      }}
                    >
                      Attachments*
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={3}
                  sx={{
                    display: "flex",
                    // mt: 3,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      width: 900,
                      maxWidth: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      //   justifyContent: "space-between",
                      alignItems: "center",
                      m: 2,
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={0}>
                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <Button
                          sx={{
                            background: "#E0DCDC",
                            width: "150px",
                            color: "#000000",
                            fontWeight: "600",
                            "&:hover": {
                              background: "#E0DCDC",
                              transition: ".5s",
                              boxShadow: 10,
                            },
                          }}
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
                      Notes*
                    </Typography>
                    <TextField multiline rows={5} fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container >

                
                <Grid item xs={12} md={12} 
                sx={{mt:10,mb:6,display:'flex',justifyContent:'center',alignContent:'center'}}>
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

export default Viewnote;
