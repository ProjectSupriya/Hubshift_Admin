import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Date from "./Date";
import Invoicedsupplier from "./Invoicedsupplier";
import Client from "./Client";
import Generateinnvoicetable from "./Generateinnvoicetable";
import Fundingtype from "./Fundingtype";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",

  color: theme.palette.text.dark,
}));



const buttongrid = {
  marginTop: '30px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const buttonsty = {
  backgroundColor: "#01C1EB"
}

export default function ColumnsGrid() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>

          <Box mt={6} paddingLeft="18px">
            <Typography fontSize="16px" fontWeight="bold">
              NDIS Provider:
            </Typography>

            <Typography mt={1} fontSize="16px" fontWeight="bold">
              Invoice Number: <span> 123</span>
            </Typography>
          </Box>

          <Divider />

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Invoice Date:
                </Typography>
              </Item>
            </Grid>
            {/* sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} */}
            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <Date />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Invoiced By (Supplier):
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <Invoicedsupplier />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Client:
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <Client/>
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Funding Type:
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <Fundingtype />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Referrer/Plan Manager:
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      // label="Title"
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid item md={12}>
            <Generateinnvoicetable />
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Comments:
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={2}>
              <Item elevation={0}>
                <Typography fontSize="16px" fontWeight="bold">
                  Terms:
                </Typography>
              </Item>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item elevation={0}>
                <Box>
                  <div>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      id="outlined-size-small"
                    />
                  </div>
                </Box>
              </Item>
            </Grid>
          </Grid>

          <Grid container>

            <Grid item xs={12} md={12}>
              <Item elevation={0}>
              
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                   
                    <Typography color ='text.primary' fontSize="16px" fontWeight="bold">
                    Set Invoice status to:
                </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Issued"
                      control={<Radio />}
                      label="Issued"
                    />
                    <FormControlLabel
                      value="Paid"
                      control={<Radio />}
                      label="Paid"
                    />
                    <FormControlLabel
                      value="Locked"
                      control={<Radio />}
                      label="Locked"
                    />
                     <FormControlLabel
                      value="Deleted"
                      control={<Radio />}
                      label="Deleted"
                    />
                    
                  </RadioGroup>
                  <FormLabel id="demo-radio-buttons-group-label">
                   
                    <Typography color ='text.primary' fontSize="16px" fontWeight="bold">
                    Set appointment status to:
                </Typography>
                <Typography color ='text.primary' fontSize="16px" fontWeight="bold">
                Invoiced NDIS
                </Typography>
                 
                  </FormLabel>
                </FormControl>

              </Item>
            </Grid>

          </Grid>

          <Grid container>

           <Grid item xs={12} md={12} style={buttongrid}>
           <Link style={{textDecoration:'none'}} href="/invoiceprofile"> <Button variant="contained" style={buttonsty}> Generate Invoice </Button> </Link>
          </Grid>
           </Grid>

        </Grid>
      </Container>
    </>
  );
}
