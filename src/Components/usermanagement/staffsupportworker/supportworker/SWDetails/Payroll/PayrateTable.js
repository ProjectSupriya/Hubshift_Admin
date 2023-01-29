import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box} from '@mui/material';
 

export default function PayrateTable() {
  return (
    <>
    <Box>

    <table style={{ width:'500px',border: '1px solid', borderCollapse: 'collapse',}}>
  <tr>
    <th style={{border: '1px solid'}}>Base Rate: </th>
    <th style={{border: '1px solid'}}>$25.22</th>
  </tr>

  <tr>
    <th style={{border: '1px solid'}}>Loading: </th>
    <th style={{border: '1px solid'}}>25%</th>
  </tr>

  <tr>
    <th style={{border: '1px solid'}}>Award:</th>
    <th style={{border: '1px solid'}}>SCHADS</th>
  </tr>

  {/* <tr>
    <td style={{border: '1px solid'}}>Peter</td>
    <td style={{border: '1px solid'}}>Griffin</td>
  </tr>
  <tr>
    <td style={{border: '1px solid'}}>Lois</td>
    <td style={{border: '1px solid'}}>Griffin</td>
  </tr> */}
   </table>

   </Box>
    </>
  );
}
