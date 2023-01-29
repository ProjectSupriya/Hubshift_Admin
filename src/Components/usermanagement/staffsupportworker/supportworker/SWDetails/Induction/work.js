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
  createData(1,'	WHS folder ',''),
  createData(2,'	WHS procedures ',''),
  createData(3,'	Incident reporting',''),
  createData(4,'	Risk assessments',''),
  createData(5,'	Manual handling',''),
  createData(6,'	Infection control',''),
  createData(7,'	Food handling',''),
  createData(8,'	Self care and stress management (Employee assistance program)',''),
  createData(9,'	Maintenance log',''),
  createData(10,'	Hazard log',''),
  createData(11,'	First aid kit',''),
  createData(12,'	Evacuation',''),
  createData(13,'	Locks',''),
  createData(14,'	Personal alarms (if any)',''),
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