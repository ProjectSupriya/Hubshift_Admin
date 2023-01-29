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

} from "@mui/material";
import PrimarySearchAppBar from "../../../.././Sidebar/appbar";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));



const EditPlanManager = () => {

  // const theme = useTheme();
  // const classes = useStyles(theme);

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

            <Grid container>

              <Grid item xs={12} md={7}>
                <Typography
                  fontSize="22px" fontWeight='bold'

                >
                  Edit Plan Manager
                </Typography>
              </Grid>

              <Grid mt={1} item xs={12} md={7}>

                <Typography fontSize="18px" fontWeight='bold'>

                  Business Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}

                >
                  <Box
                    sx={{

                    }}
                  >
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      Plan Manager Name
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
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      Website
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Item elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      ABN
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid mt={8} container>

                <Grid item xs={12} md={7}>

                  <Typography fontSize="18px" fontWeight='bold'


                  >
                    Primary Contact
                  </Typography>
                </Grid>

              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      First Name
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
                    <Typography fontSize="18px" fontWeight='bold'

                    >
                      last Name
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container>
                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}

                  >
                    <Box

                    >
                      <Typography fontSize="18px" fontWeight='bold'


                      >
                        Email
                      </Typography>
                      <TextField fullWidth id="fullWidth" />
                    </Box>
                  </Item>
                </Grid>

              </Grid>

              <Grid item xs={12} md={6}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      Phone
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
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      Mobile
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid mt={8} item xs={12} md={7}>

                <Typography fontSize="16px" fontWeight='bold'


                >
                  Invoice Details
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item
                  elevation={0}

                >
                  <Box

                  >
                    <Typography fontSize="16px" fontWeight='bold'

                    >
                      Primary Invoice Email
                    </Typography>
                    <TextField fullWidth id="fullWidth" />
                  </Box>
                </Item>
              </Grid>

              <Grid container spacing={4}>

                <Grid item xs={12} md={8}>
                  <Item
                    elevation={0}

                  >
                    <Box

                    >
                      <Typography fontSize="16px" fontWeight='bold'

                      >
                        Add Additional Email
                      </Typography>
                      <TextField fullWidth id="fullWidth" />
                    </Box>

                  </Item>
                </Grid>

                <Grid item xs={12} md={4}>

                  <Button variant="contained" sx={{ marginTop: '45px', width: 120, backgroundColor: '#01C1EB !important' }}>
                    Add
                  </Button>

                </Grid>

              </Grid>

              <Grid item xs={12} md={12} sx={{ mt: 10, mb: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained" sx={{ width: 120, backgroundColor: '#01C1EB !important' }}>
                  Create
                </Button>
              </Grid>


            </Grid>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPlanManager;
