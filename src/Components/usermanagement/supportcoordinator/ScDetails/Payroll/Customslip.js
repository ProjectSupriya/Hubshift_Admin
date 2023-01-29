import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FromDate from './fromdate';

function createData(clientname, periodstarting, periodending, basepayrateperhour,hourspaid, grossearning, netpayment,superpayments, action) {
  return {
    clientname,
    periodstarting,
    periodending,
    basepayrateperhour,
    hourspaid,
    grossearning,
    netpayment,
    superpayments,
    action,
  };
}

const rows = [
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022' ,'$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022', '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022', '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022', '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022', '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022','21-Jul-2022' , '$30',30, '$1234.67', '$196.50', '$143.45'),
  createData('Jane Ryan', '11-Jul-2022', '21-Jul-2022', '$30',30, '$1234.67', '$196.50', '$143.45'),
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
    id: 'clientname',
    numeric: true,
    disablePadding: true,
    label: 'Client Name',
  },
  {
    id: 'periodstarting',
    numeric: false,
    disablePadding: false,
    label: 'Period Starting',
  },
  {
    id: 'periodending',
    numeric: true,
    disablePadding: false,
    label: 'Period Ending',
  },
  {
    id: 'basepayrateperhour',
    numeric: false,
    disablePadding: false,
    label: 'Base Pay Rate (Per Hour)',
  },
  {
    id: 'hourspaid',
    numeric: true,
    disablePadding: false,
    label: 'Hours Paid',
  },
  {
    id: 'grossearning',
    numeric: true,
    disablePadding: false,
    label: 'Gross Earning',
  },
  {
    id: 'netpayment',
    numeric: false,
    disablePadding: false,
    label: 'Net Payment',
  },
  {
    id: 'superpayments',
    numeric: false,
    disablePadding: false,
    label: 'Super Payment',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
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

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      

  
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let navigate = useNavigate();
  function editbankdetails() {
    navigate("/editbankdetails");
    console.log("navigate", navigate);
  }
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

   {/* <Box>
      <Payslipdropdown/>
   </Box> */}

  <Box sx={{mt:8,display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
  <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start'}}>
  <Typography style={{fontSize:'16px', fontWeight:600}}>From Date:</Typography>
    <FromDate/> 
    </Box>
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start'}}>
  <Typography style={{fontSize:'16px', fontWeight:600}}>To Date:</Typography>
    <FromDate/> 
    </Box>
  </Box>
   
      
   <Box sx={{display:'flex', flexDirection:'row', justifyContent:'end', pt:4}}>
   <Typography style={{fontWeight:600, color:'#4d8ef8'}}>Download All</Typography>
   </Box>
    <Box sx={{ width:1000, mt:5 }}>
      <Paper sx={{  mb: 2,width:'100%'}}>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 650}}
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
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                    
                      <TableCell 
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align='center'
                      >
                        {row.clientname}
                      </TableCell>
                      <TableCell align="center">{row.periodstarting}</TableCell>
                      <TableCell align="center">{row.periodending}</TableCell>
                      <TableCell align="center">{row.basepayrateperhour}</TableCell>
                      <TableCell align="center">{row.hourspaid}</TableCell>
                      <TableCell align="center">{row.grossearning}</TableCell> 
                      <TableCell align="center">{row.netpayment}</TableCell> 
                      <TableCell align="center">{row.superpayments}</TableCell> 
                      <TableCell align="center"><FileDownloadIcon onClick={editbankdetails}/></TableCell>
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
    </>
  );
}
