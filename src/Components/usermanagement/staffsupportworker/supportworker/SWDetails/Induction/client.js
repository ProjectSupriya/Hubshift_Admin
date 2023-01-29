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
  createData(1,'Clients folders ',''),
  createData(2,'Profile',''),
  createData(3,'Communication plan  ',''),
  createData(4,'Lifestyle support plan',''),
  createData(5,'Routines',''),
  createData(6,'Family agreements',''),
  createData(7,'Health care plans (including specific plans for each chronic health condition and oral care)',''),
  createData(8,'Medication (including daily, psychotropic approvals & PRN)',''),
  createData(9,'Allergies',''),
  createData(10,'Risk plans',''),
  createData(11,'Individual emergency profile',''),
  createData(12,'Behaviour management assessment and support plans',''),
  createData(13,'Restrictive practices authorisations',''),
  createData(14,'Mobility, transport and falls management plans',''),
  createData(15,'Nutrition and swallowing checklist',''),
  createData(16,'Meal time management plans',''),
  createData(17,'Other health plans',''),
  createData(18,'Clients rights & responsibilities',''),
  createData(19,'Ethics and duty of care vs Dignity of risk',''),
  createData(20,'Confidentiality',''),
  createData(21,'Child protection',''),
  createData(22,'Children’s Standards',''),
  createData(23,'Safe Work Method Statements (SWMS)',''),
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