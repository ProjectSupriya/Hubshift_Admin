import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "../Navbar/appbar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from "react-router-dom";


function createData(ClientId, Name, Email, Phone, ContractStatus, AppointmentDetails, CreatedOn) {
  return {
    ClientId, Name, Email, Phone, ContractStatus, AppointmentDetails, CreatedOn
  };
}

const rows = [
  createData(1234,'Jane Ryan','janeryan@gmail.com', 1234567890,'Active', '27-Jun-2022 4 PM - 5 PM','26-Jun-2022 02:00 pm'),
  createData(3244,'Emma Watson','janeryan@gmail.com', 8956231452,'Inctive', '','6-Jun-2022 02:00 pm'),
  createData(3443,'Elle Claire','janeryan@gmail.com', 2345678901,'Active', '7-Jun-2022 4 PM - 5 PM','16-Jun-2022 02:00 pm'),
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
    id: 'ClientId',
    numeric: true,
    disablePadding: true,
    label: 'Client Id',
    
  },
  {
    id: 'Name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'Email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'Phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone',
  },

  {
    id: 'ContractStatus',
    numeric: false,
    disablePadding: false,
    label: 'Contract Status',
  },
  
  {
    id: 'AppointmentDetails',
    numeric: true,
    disablePadding: false,
    label: 'Appointment Details',
  },
  {
    id: 'CreatedOn',
    numeric: true,
    disablePadding: false,
    label: 'Created On',
  },
  {
    id: 'Action',
    numeric: true,
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
    <TableHead sx={{backgroundColor:"#e4e4e4", borderTop:"1px solid #01c1eb", }}>
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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  let navigate = useNavigate();

  function applyjob() {
    navigate("/viewclient");
    console.log("navigate", navigate);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
  
    <PrimarySearchAppBar/>
   <Container style={{paddingTop:"20px", paddingBottom:"10px"}}>
   <Grid container spacing={2}>

 <Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
 </Grid>
 <Grid item xs={12} md={10}>
    
    <Box sx={{ width: '100%' }}>
    <Typography sx={{fontSize:'40px', textAlign:"left", pb:5}}>Clients</Typography>
      <Paper sx={{ width: '100%', mb: 2, border:"1px solid #01c1eb" }}>
      <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here???"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
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
                        //  padding="none"
                      >
                        {row.ClientId}
                      </TableCell>
                      <TableCell align="center">{row. Name}</TableCell>
                      <TableCell align="center">{row.Email}</TableCell>
                      <TableCell align="center">{row.Phone}</TableCell>
                      <TableCell align="center">{row.ContractStatus}</TableCell>
                      <TableCell align="center">{row.AppointmentDetails}</TableCell>
                      <TableCell align="center">{row.CreatedOn}</TableCell>
                      <TableCell align="center" sx={{p:4, display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                      <VisibilityIcon onClick={applyjob} style={{ color: "#02bd9d", fontSize:'25px' }} />
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
    </Grid>
    </Grid>
    </Container>
    </>
  );
}
