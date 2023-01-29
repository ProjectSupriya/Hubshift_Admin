import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import EditIcon from '@mui/icons-material/Edit';
import Status from "./status";
import DeleteIcon from '@mui/icons-material/Delete';

function createData(InvoiceNumber,FromDate,ToDate, Client,Referrer,Funding,Billing,Total) {
  return {
    InvoiceNumber,FromDate, ToDate, Client, Referrer,Funding, Billing, Total
  };
}

const rows = [
  createData('112','7-Jun-2022','8-Jun-2022 ','Jane Ryan', 'James Floyd','NDIS Managed','NDIS','$110',),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [ 
  {
    id: 'InvoiceNumber',
    numeric: false,
    disablePadding: true,
    label: 'Invoic Number',
   
  },
  {
    id: 'FromDate',
    numeric: false,
    disablePadding: true,
    label: 'FromDate',
   
  },
  {
    id: 'ToDate',
    numeric: false,
    disablePadding: true,
    label: 'Support Code:',
   
  },
  {
    id: 'Client',
    numeric: false,
    disablePadding: true,
    label: 'Client',
  },
  {
    id: 'Referrer',
    numeric: true,
    disablePadding: false,
    label: 'Referrer/Plan Manager',
  },

  {
    id: 'Funding',
    numeric: false,
    disablePadding: false,
    label: 'Funding Type',
  },
  {
    id: 'Billing',
    numeric: false,
    disablePadding: false,
    label: 'BillingType',
  },

  {
    id: 'Total',
    numeric: false,
    disablePadding: false,
    label: 'Total',
  },

 
  {
    id: 'Status',
    numeric: false,
    disablePadding: false,
    label: 'Status:',
  },

  {
    id: 'Action',
    numeric: false,
    disablePadding: false,
    label: 'Action:',
  },
];

function EnhancedTableHead(props) {
  const {  order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  
  return (
    <TableHead >
      <TableRow>
        
        {headCells.map((headCell) => (
          
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
         
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
<>
    

    
    <Box sx={{mt:4, width: 1000}}>

      
      
      <Paper sx={{ width: '100%', mb: 2,border:"1px solid #01c1eb" }}>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    
                    <TableRow >
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                      >
                        {row.InvoiceNumber}
                      </TableCell>
                      <TableCell align="center">{row.FromDate}</TableCell>
                      <TableCell align="center">{row.ToDate}</TableCell>
                      <TableCell align="center">{row.Client}</TableCell>
                      <TableCell align="center">{row.Referrer}</TableCell>
                      <TableCell align="center">{row.Funding}</TableCell>
                      <TableCell align="center">{row.Billing}</TableCell>
                      <TableCell align="center">{row.Total}</TableCell>
                      <TableCell align="center"> <Status/> </TableCell>

                      <TableCell align="center">
                      <EditIcon/>  
                      <DeleteIcon color='error'/> 
                
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>

   
    </>
  );
}
