import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Date, Item,Code,QTY, Price, Total) {
  return { Date, Item,Code,QTY, Price, Total};
}

const rows = [
  createData('Total invoiced between 01-Jun-2022 - 30-Jun-2022:', '','','','','$0.00'),
  createData('Total invoiced till 30-Jun-2022:', '','','','','$0.00'),
  createData('Funds Remaining:', '','','','','$0.00'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Date}
              </TableCell>
              <TableCell align="right">{row.Item}</TableCell>
              <TableCell align="right">{row.Code}</TableCell>
              <TableCell align="right">{row.QTY}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
