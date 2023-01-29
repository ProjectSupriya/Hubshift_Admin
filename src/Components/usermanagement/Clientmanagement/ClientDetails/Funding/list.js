import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import {
  DataGridPremium,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid-premium';
import Section2 from './section2'
// import Table from './table'

const rows = [
  {
        Entry: '#3434',
        SupportPurpose: 'CORE',
        StartDate: new Date(2019, 2, 22),
        EndDate: new Date(2019, 2, 22),
        InvoicedtoDate:'$0.00',
        SpendingCap:'$50,0000.00',
        id:0,
      },
      {
        Entry: '#3435',
        SupportPurpose: 'Assistance with daily life',
        StartDate: new Date(2019, 2, 22),
        EndDate: new Date(2019, 2, 22),
        InvoicedtoDate:'$0.00',
        SpendingCap:'$50,0000.00',
        id:1,
      },
];

const columns = [
  { field: 'Entry', headerName: 'Entry', width: 100 },
  {
    field: 'SupportPurpose',
    headerName: 'Support Purpose',
    width: 200,
  },
  {
    field: 'StartDate',
    headerName: 'Start Date',
    type: 'date',
    width: 150,
  },
  {
    field: 'EndDate',
    headerName: 'End Date',
    type: 'date',
    width: 150,
  },
  {
    field: 'InvoicedtoDate',
    headerName: 'Invoiced to Date',
    width: 150,
  },
  {
    field: 'SpendingCap',
    headerName: 'Spending Cap',
    width: 150,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ExcelExport() {
  return (
    
    <div style={{ height: 300, width: '100%' }}>

    <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <Link style={{textDecoration: 'none'}} to ='/addfunding'>
     <Button variant='contained' sx={{ backgroundColor:'#01c1eb', textTransform:'capitalize'}}>
       Add New
     </Button>
     </Link>
    </Box>

    <Typography sx={{fontSize:"16px", fontWeight:"600", pb:3}}>Statement Period: 01-Jun-2022 - 30-Jun-2022</Typography>
      <DataGridPremium
        rows={rows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
      <Typography sx={{fontSize:"16px", fontWeight:"600", pt:3, pb:2}}>Agreement Entry: #3434: CORE</Typography>
      <Section2/>
      <Typography sx={{fontSize:"16px", fontWeight:"600", pt:3, pb:2}}>Agreement Entry: #3435: Assistance with daily life</Typography>
      <Section2 />




    </div>
  );
}
