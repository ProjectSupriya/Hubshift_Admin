import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Usertype from './Usertype'
import Chooseuser from './Chooseuser'
import PayrollTable from './PayrollTable'
import { useNavigate } from "react-router-dom";
import Date from './Date';
import PrimarySearchAppBar from '../Sidebar/appbar';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#ffff' : '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',

  color: theme.palette.text.dark,

}));

export default function Timesheet() {
  const [status, setStatus] = React.useState(false)
  let navigate = useNavigate();

  function applyjob() {
    navigate("/timesheettable");
    console.log("navigate", navigate);
  }

  const buttongrid ={
    margin:"50px",display: 'flex', flexDirection: 'row', justifyContent: 'center' 
  }
  const buttonsty = {
    backgroundColor: "#01C1EB"
  }
  return (
    <>

      <PrimarySearchAppBar />


      <Container >
        <Grid container spacing={2}>

          <Grid item xs={2} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          </Grid>

          <Grid item xs={12} md={10}>

            <Grid container>

                  <Grid item xs={12} md={6}>

                    <Item
                      elevation={0}>
                      <Box
                       
                      >
                        <div>
                          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>User Type:</Typography>
                          <Usertype />
                        </div>
                      </Box>
                    </Item>

                  </Grid>

              
                <Grid item xs={12} md={6}>

                  <Item
                    elevation={0}>
                    <Box
                      
                    >
                      <div>
                        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Choose user:</Typography>
                        <Chooseuser />
                      </div>
                    </Box>
                  </Item>

                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box
                     
                    >
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>From Date</Typography>
                        <Date />
                      </div>
                    </Box>
                  </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Item
                    elevation={0}>
                    <Box>
                     
                  
                      <div>
                        <Typography style={{ fontSize: '16px', fontWeight: 600 }}>To Date</Typography>
                        <Date />
                      </div>
                    </Box>
                  </Item>
                </Grid>

               

          <Grid item xs={12} md={12} style={buttongrid}>
               
                  
              
                  <Button style={buttonsty} onClick={() => setStatus(!status)} variant="contained" >Show</Button>
                 </Grid>

              <Grid item xs={12} md={12} sx={{ mt: 5 }}>

                {
                  status ? <div> <PayrollTable /> </div> : null
                }

              </Grid>
           

            </Grid>

          </Grid>

        </Grid>

      </Container>


    </>
  );
}
