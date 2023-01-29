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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import { Button, Link } from '@mui/material';
function createData(Name,Item,Supportcode, Accountcode,Date,Qty,Price,Tax,Total,Status) {
  return {
    Name,Item, Supportcode, Accountcode, Accountcode,Date, Qty,Price, Tax, Total, Status
  };
}

const rows = [
  createData('Jane Ryan','Assistance..','1234 ','3434', '11-July-2022','1','$30.00','$0.00','$30.00','Issued'),
  createData('Jane Ryan','Assistance..','1234 ','3434', '11-July-2022','1','$30.00','$0.00','$30.00','Issued'),
  createData('Jane Ryan','Assistance..','1234 ','3434', '11-July-2022','1','$30.00','$0.00','$30.00','Issued'),

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
    id: 'Clientname',
    numeric: false,
    disablePadding: true,
    label: 'Client Name:',
   
  },
  {
    id: 'Item',
    numeric: false,
    disablePadding: true,
    label: 'Item:',
   
  },
  {
    id: 'SupportCode ',
    numeric: false,
    disablePadding: true,
    label: 'Support Code:',
   
  },
  {
    id: 'AccountCode',
    numeric: false,
    disablePadding: true,
    label: 'Account Code:',
  },
  {
    id: 'Date',
    numeric: true,
    disablePadding: false,
    label: 'Date:',
  },

  {
    id: 'Qty',
    numeric: false,
    disablePadding: false,
    label: 'Qty:',
  },
  {
    id: 'Price',
    numeric: false,
    disablePadding: false,
    label: 'Price:',
  },

  {
    id: 'Tax',
    numeric: false,
    disablePadding: false,
    label: 'Tax%:',
  },

  {
    id: 'Total',
    numeric: false,
    disablePadding: false,
    label: 'Total:',
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
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
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
  const [dense, setDense] = React.useState(false);
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

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
<>
    
<Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   

    <Button sx={{ backgroundColor: "#01C1EB !important "}} variant='contained'>Generate All Payslips</Button>
    <Link style={{textDecoration: 'none'}} >
     <Button>
     Download  All
     </Button>

     </Link>
    </Box>
    
    <Box sx={{mt:4, width: 1000}}>

      
      
      <Paper sx={{ width: '100%', mb: 2,border:"1px solid #01c1eb" }}>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 650 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
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
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    
                    <TableRow >
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        // padding="none"
                      >
                        {row.Name}
                      </TableCell>
                      <TableCell align="center">{row.Item}</TableCell>
                      <TableCell align="center">{row.Supportcode}</TableCell>
                      <TableCell align="center">{row.Accountcode}</TableCell>
                      <TableCell align="center">{row.Date}</TableCell>
                      <TableCell align="center">{row.Qty}</TableCell>
                      <TableCell align="center">{row.Price}</TableCell>
                      <TableCell align="center">{row.Tax}</TableCell>
                      <TableCell align="center">{row.Total}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>

                      <TableCell align="center" >
                     <Link href='/invoicedetails1'> <VisibilityIcon /> </Link> 
                      <DownloadIcon/>
                      
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
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

    <Box sx={{ mt:3,display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <div>
   <Typography padding='5px'> Total: $30.00 </Typography>
   <Typography padding='5px'> GST: $0.00 </Typography>
   <Typography padding='5px'> Paid: $0.00 </Typography>
   <Typography padding='5px'> unPaid: $30.00 </Typography>
   <Typography padding='5px'> Grand Total (Inc GST):$30.00 </Typography>
   </div>
      </Box>
    </>
  );
}
