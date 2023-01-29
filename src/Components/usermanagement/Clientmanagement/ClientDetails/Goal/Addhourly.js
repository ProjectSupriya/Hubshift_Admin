import * as React from 'react';
import PrimarySearchAppBar from "../../../../Sidebar/appbar";
import { Grid,Container,Typography,Box,TextField,Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Styling/Goal.css';



  function createData(Days, all,first,second,third,fourth,fifth) {
    return {Days, all,first,second,third,fourth,fifth  };
  }


  const rows = [
    createData('7:00am',<AddCircleOutlineIcon/>),

    createData('8:00am'),

    createData('9:00am'),

    createData('10:00am'),

    createData('11:00am'),

    createData('12:00am'),

   
  ];

const Addhourly = () => {
  
      
    return (
        <>
            <Container style={{paddingTop:"20px", paddingBottom:"0px"}}>

            <PrimarySearchAppBar/> 
            
            <Grid container spacing={2}>

            <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> </Grid>

            <Grid item xs={12} md={10}>
             <Typography mb={1} fontSize="25px" fontWeight="bold">Hourly Task</Typography>

            <TableContainer component={Paper} >

                <Table sx={{ minWidth: 650, }} aria-label="simple table">

        <TableHead>

        
          <TableRow >
        
            <TableCell sx={{border:1}}>Time</TableCell>
            <TableCell sx={{border:1}} align="right">Monday</TableCell>
            <TableCell sx={{border:1}} align="right">Tousday</TableCell>
            <TableCell sx={{border:1}} align="right">Wednesday</TableCell>
            <TableCell sx={{border:1}} align="right">Thursday</TableCell>
            <TableCell sx={{border:1}} align="right">Friday</TableCell>
            <TableCell sx={{border:1}} align="right">Saturday</TableCell>
            <TableCell sx={{border:1}} align="right">Sunday</TableCell>
         
          </TableRow>
        </TableHead>

        <TableBody>
  
          {rows.map((row) => (
            <TableRow >
              <TableCell sx={{border:1}} component="th" scope="row">
                {row.Days}
              </TableCell>
              <TableCell sx={{border:1}} align="right">

                <Box className="Addhourlytable"
                >
                  <Link href="/goaladdhourlytask" color="inherit"><Typography>Walk</Typography></Link>   
                    <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                </Box> 
              </TableCell>

              <TableCell sx={{border:1}} align="right">

                <Box className="Addhourlytable">
                <Typography>Breakfask</Typography> 
                <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
              </Box> 
             </TableCell>

              <TableCell sx={{border:1}} align="right">

              <Box className="Addhourlytable">
                    <Typography>Medicine</Typography> 
                    <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                  </Box> 
               </TableCell>
              <TableCell sx={{border:1}} align="right">
              <Box className="Addhourlytable">

                    <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                  </Box> 
                  </TableCell>
              <TableCell sx={{border:1}} align="right">

              <Box className="Addhourlytable">

                    <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                  </Box> 
                  </TableCell>
              <TableCell sx={{border:1}} align="right">

              <Box className="Addhourlytable">
                    <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                  </Box> 
                  </TableCell>
              <TableCell sx={{border:1}} align="right">

              <Box className="Addhourlytable">   
                  <AddCircleOutlineIcon sx={{color:'#05C3DD '}}/>
                  </Box> 
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
                 </Table>

            </TableContainer>
            </Grid>
            
            </Grid>

         

            </Container>
        </>
    );
};

export default Addhourly;