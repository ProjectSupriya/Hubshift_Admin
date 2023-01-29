import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from './select'

function createData(Srno, Title, Select) {
  return {Srno, Title, Select};
}

const rows = [
  createData(1,'	HR Grievances',''),
  createData(2,'	WHS ',''),
  createData(3,'	Manual handling ',''),
  createData(4,'	Infection control',''),
  createData(5,'	Medication management',''),
  createData(6,'	Epilepsy management',''),
  createData(7,'	Nutrition and meal preparation',''),
  createData(8,'	Compliment and complaint',''),
  createData(9,'	Continuous improvement',''),
  createData(10,'	What if manual',''),
 
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Sr.No</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Srno}
            >
              <TableCell align="left" component="th" scope="row">
                {row.Srno}
              </TableCell>
              <TableCell align="left">{row.Title}</TableCell>
              <TableCell align="left"><Select/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}