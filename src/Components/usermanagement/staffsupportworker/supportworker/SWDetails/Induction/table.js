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
  createData(1,'Organisational chart',''),
  createData(2,'Organisation values and mission',''),
  createData(3,'Code of Conduct',''),
  createData(4,'Position Description and duties list',''),
  createData(5,'Probation process (if applicable)',''),
  createData(6,'Employee Contribution and Development process (ECD) (if applicable)',''),
  createData(7,'Explain performance management process',''),
  createData(8,'Buddy Shifts Review and complete:',''),
  createData(9,'Induction Form ',''),
  createData(10,'Induction checklist',''),
  
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