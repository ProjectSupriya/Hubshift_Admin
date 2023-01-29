import React from "react";
import {
  Container,
  Grid,
  Typography,
  styled,
  Paper,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import PrimarySearchAppBar from "../Sidebar/appbar";
import Date from "./Date";
import Profittable from "./Profittable"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));

const buttonsty = {
  backgroundColor: "#01C1EB",
};

const Boxstyle = {
  padding:'5px',
  borderRadius:'15px',
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#D9D9D9",
}

const Boxstyle1 = {
  // padding:'5px',
  display: "flex",
  flexDirection: "row",

}

const ProfitBrokerage = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Grid container spacing={2}>
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
                  Profit/Brokerage
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Item elevation={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <Typography
                            padding="5px"
                            fontSize="16px"
                            fontWeight="bold"
                          >
                            Dates:
                          </Typography>

                          <Date />
                        </div>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Button variant="contained" style={buttonsty}>
                     
                        ABA File
                      </Button>
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Button variant="contained" style={buttonsty}>
                    
                        Lock All
                      </Button>
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Button variant="contained" style={buttonsty}>
                      
                        Itemise Transactions
                      </Button>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                  <Box style={Boxstyle}>
                   
                  
                    <Avatar />
                    <Typography padding="8px" variant="boday1">
                      Medicare Statement
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle}>
                    <Avatar />
                    <Typography padding="8px" variant="boday1">
                      Medicare Statement
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle}>
                    <Avatar  />
                    <Typography padding="8px" variant="boday1">
                      Medicare Statement
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle}>
                    <Avatar  />
                    <Typography padding="8px" variant="boday1">
                      Medicare Statement
                    </Typography>
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle1}>
                <Typography padding="8px" variant="boday1">
                1: Upload XML File
                    </Typography>
                    <Button style={buttonsty} variant="contained">Go</Button>
                    
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle1}>
                <Typography padding="8px" variant="boday1">
                2: Import Charges
                    </Typography>
                    <Button style={buttonsty} variant="contained">Go</Button>
                    
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle1}>
                <Typography padding="8px" variant="boday1">
                3: Import Charges
                    </Typography>
                    <Button style={buttonsty} variant="contained">Go</Button>
                    
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={3}>
                <Item elevation={0}>
                <Box style={Boxstyle1}>
                <Typography padding="8px" variant="boday1">
                4: Import Items
                    </Typography>
                    <Button style={buttonsty} variant="contained">Go</Button>
                    
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={12}>
                <Profittable/>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfitBrokerage;
