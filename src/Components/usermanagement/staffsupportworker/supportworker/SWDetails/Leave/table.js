import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( TotalLeaves, ApprovedLeaves, AvailableBalance, LeavePending) {
  return {  TotalLeaves,ApprovedLeaves,AvailableBalance, LeavePending };
}

const rows = [
  createData( 18,4,12,2),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead sx={{backgroundColor:"#e4e4e4", p:0}}>
          <TableRow>
           
            <TableCell align="center">Total Leaves</TableCell>
            <TableCell align="center">Approved Leaves</TableCell>
            <TableCell align="center">Available Balance</TableCell>
            <TableCell align="center">Leave Pending</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center">{row.TotalLeaves}</TableCell>
              <TableCell align="center">{row.ApprovedLeaves}</TableCell>
              <TableCell align="center">{row.AvailableBalance}</TableCell>
              <TableCell align="center">{row.LeavePending}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
