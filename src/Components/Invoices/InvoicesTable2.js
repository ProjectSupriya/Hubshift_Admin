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
import DownloadIcon from '@mui/icons-material/Download';
function createData(Item,Supportcode, Accountcode,Date,Qty,Price,Tax,Total,Status) {
  return {
    Item, Supportcode, Accountcode,Date, Qty,Price, Tax, Total, Status
  };
}

const rows = [
  createData('Assistance..','1234 ','3434', '11-July-2022','1','$30.00','$0.00','$30.00','Issued'),

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  
  return (
    <TableHead sx={{}}>
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
    
    <Box sx={{ width: "100%"}}>

 
      <Paper sx={{ mt:2,width: '100%', mb: 2, }}>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 550 }}
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
                        {row.Item}
                      </TableCell>
                      <TableCell align="center">{row.Supportcode}</TableCell>
                      <TableCell align="center">{row.Accountcode}</TableCell>
                      <TableCell align="center">{row.Date}</TableCell>
                      <TableCell align="center">{row.Qty}</TableCell>
                      <TableCell align="center">{row.Price}</TableCell>
                      <TableCell align="center">{row.Tax}</TableCell>
                      <TableCell align="center">{row.Total}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>

                      <TableCell align="center" >
                     {/* <Link href='/invoicedetails'> <VisibilityIcon /> </Link>  */}
                      <DownloadIcon/>
                      
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

  <Box sx={{ mt:3,display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <div>
   <Typography padding='5px'> Total: $30.00 </Typography>
   <Typography padding='5px'> GST: $0.00 </Typography>
   <Typography padding='5px'> Paid: $0.00 </Typography>
   <Typography padding='5px'> unPaid: $30.00 </Typography>
   <Typography padding='5px'> Grand Total (Inc GST):$30.00 </Typography>
   </div>
      </Box>

  <Box sx={{ mt:10,display:'flex', justifyContent:'flex-start', alignItems:"flex-start"}}>

   <div>
   <Typography padding='5px'> Comments: </Typography>
   <Typography padding='5px'> Terms: </Typography>

   </div>
  </Box>

    </>
  );
}
