import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Radiobutton from "./Radiobutton"
 

export default function PayrateTable() {
  return (
    <>
    <Box>

    
    <TableContainer sx={{border:1}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="Center"> <Typography fontWeight='bold'> Total </Typography> </TableCell>
            <TableCell align="Center"> <Typography fontWeight='bold'> $124.34 </Typography> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            <TableCell align="Center"><Typography fontWeight='bold'>
            Include Brokerage/External:
              </Typography>  </TableCell>
            <TableCell align="Center"> <Radiobutton/> </TableCell>
          
          </TableRow>

          <TableRow>
            <TableCell align="Center"> <Typography fontWeight='bold'>
            Include NDIS:
              </Typography>  </TableCell>
            <TableCell align="Center"> <Radiobutton/> </TableCell>
          
          </TableRow>

          <TableRow>
            <TableCell align="Center"> <Typography fontWeight='bold'>
            Show Totals For:
              </Typography>  </TableCell>
            <TableCell align="Center"> Show Appointments and Total(Dropdown) </TableCell>
          
          </TableRow>

          <TableRow>
            <TableCell align="Center"> <Typography fontWeight='bold'>
            Show Exc From Billing:
              </Typography>  </TableCell>
            <TableCell align="Center"> <Radiobutton/> </TableCell>
          
          </TableRow>

          <TableRow>
            <TableCell align="Center"> <Typography fontWeight='bold'> Region: </Typography>  </TableCell>
            <TableCell align="Center"> National </TableCell>
          
          </TableRow>

          <TableRow>
            <TableCell align="Center">  <Typography fontWeight='bold'>  Grand Total:</Typography>
             </TableCell>
            <TableCell align="Center">  <Typography fontWeight='bold'> $144.34 (including Brokerage)</Typography>
               </TableCell>
          
          </TableRow>
          

        

        </TableBody>
      </Table>
    </TableContainer>

   </Box>
    </>
  );
}
