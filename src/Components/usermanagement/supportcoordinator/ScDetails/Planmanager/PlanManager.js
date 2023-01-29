import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Link } from '@mui/material';

function createData( Plan, Website, ABN, Name,Emaile,Phone,Mobile,Primary,Additional) {
  return {  Plan,Website,ABN, Name,Emaile,Phone,Mobile,Primary,Additional};
}

const rows = [
  createData( 'Dan Jackson','www.abc.com','12346','Shane Edden','shangmail.com','123467890','123467890','fina@.com','_'),
  
];

export default function PlanManager() {
  return (

    <Box sx={{mt:5,width:1000}}>
    <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead sx={{ p:0}}>

          <TableRow>
           
            <TableCell align="center">Plan Manager Name</TableCell>
            <TableCell align="center">Website</TableCell>
            <TableCell align="center">ABN</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Emaile</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Primary invoice email</TableCell>
            <TableCell align="center"> Additional email</TableCell>
            <TableCell align="center"> Action </TableCell>



           


          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="center">{row.Plan}</TableCell>
              <TableCell align="center">{row.Website}</TableCell>
              <TableCell align="center">{row.ABN}</TableCell>
              <TableCell align="center">{row.Name}</TableCell>
              <TableCell align="center">{row.Emaile}</TableCell>
              <TableCell align="center">{row.Phone}</TableCell>
              <TableCell align="center">{row.Mobile}</TableCell>
              <TableCell align="center">{row.Primary}</TableCell>
              <TableCell align="center">{row.Additional}</TableCell>

              <TableCell align="center" sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
             <Link href=''> <VisibilityIcon/> </Link>
             <Link href='/editplanmanager'> <EditIcon/> </Link>
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
