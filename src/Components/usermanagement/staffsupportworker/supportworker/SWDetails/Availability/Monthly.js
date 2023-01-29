import { Grid,Typography,Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import MonthDropDown from './MonthDropDown';

function createData(Days, all,first,second,third,fourth,fifth) {
    return {Days, all,first,second,third,fourth,fifth  };
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const rows = [
    createData('Sunday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('Monday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('Tuesday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('Wednesday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('thursday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('Friday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),

    createData('Saturday',  <Checkbox {...label}/>,<Checkbox {...label}/>,
    <Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>,<Checkbox {...label}/>),
  
   
  ];

const Monthly = () => {
    return (
        <>
         <div>
         <Grid container>

         <Grid item xs={12} sm={12} md={12}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop:4,
                        marginBottom:8
                      }}
                    >
                      <Checkbox />
                      <Typography fontSize="13px" fontWeight="bold">
                        Default availability is set to 15 days, 6 am - 10 pm
                      </Typography>
                    </Box>
        </Grid>


         <Grid item xs={2} sm={2} md={2}>
            <Box>
         
           <MonthDropDown/>

            </Box>
          </Grid>

         <Grid item xs={10} sm={10} md={10}>

     <TableContainer component={Paper} sx={{}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{border:1}}>Days</TableCell>
            <TableCell sx={{border:1}} align="right">All</TableCell>
            <TableCell sx={{border:1}} align="right">1st</TableCell>
            <TableCell sx={{border:1}} align="right">2nd</TableCell>
            <TableCell sx={{border:1}} align="right">3rd</TableCell>
            <TableCell sx={{border:1}} align="right">4th</TableCell>
            <TableCell sx={{border:1}} align="right">5th</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
            //   key={row.Days}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >
              <TableCell sx={{border:1}} component="th" scope="row">
                {row.Days}
              </TableCell>
              <TableCell sx={{border:1}} align="right">{row.all}</TableCell>
              <TableCell sx={{border:1}} align="right">{row.first}</TableCell>
              <TableCell sx={{border:1}} align="right">{row.second}</TableCell>
              <TableCell sx={{border:1}} align="right">{row.third}</TableCell>
              <TableCell sx={{border:1}} align="right">{row.fourth}</TableCell>
              <TableCell sx={{border:1}} align="right">{row.fifth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   

         </Grid>

         </Grid>
         </div>   
        </>
    );
};

export default Monthly;