import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( DayAM, EveningPM, NightShift, Saturday,Sunday,PublicHoliday) {
  return {  DayAM,EveningPM,NightShift, Saturday,Sunday,PublicHoliday};
}

const rows = [
  createData( '$31.53','$31.53','$31.53','$31.53','$31.53','$31.53'),
  
];

export default function PayrateTable2() {
  return (
    <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead sx={{ p:0}}>
          <TableRow>
           
            <TableCell align="center">DayAM</TableCell>
            <TableCell align="center">EveningPM</TableCell>
            <TableCell align="center">NightShift</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
            <TableCell align="center">PublicHoliday</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center">{row.DayAM}</TableCell>
              <TableCell align="center">{row.EveningPM}</TableCell>
              <TableCell align="center">{row.NightShift}</TableCell>
              <TableCell align="center">{row.Saturday}</TableCell>
              <TableCell align="center">{row.Sunday}</TableCell>
              <TableCell align="center">{row.PublicHoliday}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
