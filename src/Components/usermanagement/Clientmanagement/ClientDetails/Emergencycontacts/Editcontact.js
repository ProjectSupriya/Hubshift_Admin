import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Paper,
  styled,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,

} from "@mui/material";
import PrimarySearchAppBar from "../../../.././Sidebar/appbar";
import Relationship from './RelationshipDdown'
import CountryDdown from './Country'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const Editemergency = () => {

  const Btnboxstyle = {
    marginTop: '50px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const Btnstyle = {
    margin: '20px',
    backgroundColor: "#05C3DD  ",
    height: "50px",
    width: "150px",
  }

  return (
    <>
      <PrimarySearchAppBar />
      <Container>
        <Grid container spacing={2} sx={{}}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>

            <Grid container>

              <Grid item xs={12} md={7}>
                <Typography
                  fontSize="22px" fontWeight='bold'

                >
                  Edit Emergency Contact
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Emergency Contact Name*
                    </Typography>
                    <TextField fullWidth id="fullWidth" required />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}>
                  <Box >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      priority
                    </Typography>

                    <Relationship />

                  </Box>
                </Item>

                <Box sx={{ display: 'flex', justifyContent: "flex-start", alignItems: 'flex-start' }}>
                  <FormGroup row >
                    <FormControlLabel sx={{ p: 2 }} control={<Checkbox />} label="Is a primary contact" />
                    <FormControlLabel sx={{ p: 2 }} control={<Checkbox />} label="Emergency contact" />
                  </FormGroup>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Contact Number
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box
                    sx={{

                    }}
                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Alternate Contact Number
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>



              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Address line 1
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Address line 2
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box
                    sx={{

                    }}
                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      City/Town
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box
                    sx={{

                    }}
                  >
                    <Typography fontSize="16px" fontWeight="bold"
                      sx={{

                      }}
                    >
                      Province/State/County
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>


              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}>
                  <Box >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Country


                    </Typography>

                    <CountryDdown />

                  </Box>
                </Item>


              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box
                    sx={{

                    }}
                  >
                    <Typography fontSize="16px" fontWeight="bold"

                    >
                      Postcode
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>


              <Grid item md={12} xs={12}>

                <Box style={Btnboxstyle} >


                  <Button
                    style={Btnstyle}

                    variant="contained"
                    type="submit"
                  >
                    Cancel
                  </Button>

                  <Button
                    style={Btnstyle}

                    variant="contained"
                    type="submit"
                  >
                    Save
                  </Button>

                </Box>
              </Grid>



            </Grid>

          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Editemergency;
