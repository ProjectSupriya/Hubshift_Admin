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
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { visuallyHidden } from '@mui/utils';
import { Phone, VideoCall } from '@material-ui/icons';
import { Button } from "@mui/material";
import Meetingdetails from './meetingdetails'
import { Link } from 'react-router-dom';


function createData(name, Email, Phone,Category, Onboardingcomplete, Details, Riskassessment,Schedulemeeting, 
  Status, Communication, Meetingdetails) {
    return {
      name, Email, Phone,Category, Onboardingcomplete, Details, Riskassessment,
      Schedulemeeting, Status, Communication, Meetingdetails
    };
  }

const rows = [
  createData('Tom Arren','tomarren@gmail.com','1234567890','Homecare','25%','View Details','Pending',<Phone/>,'Pending',
  'Informed client via Email',<Meetingdetails/>),
  createData('Tom Arren','tomarren@gmail.com','1234567890','Homecare','25%','View Details','Pending',<VideoCall/>,'Pending',
  'Informed client via Email',<Meetingdetails/>),
 
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
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Name",
    },
    {
      id: "Email",
      numeric: false,
      disablePadding: true,
      label: "User Type",
    },
    {
      id: "Phone",
      numeric: false,
      disablePadding: true,
      label: "Phone",
    },
    {
      id: "Category",
      numeric: false,
      disablePadding: true,
      label: "Category",
    },
    {
      id: "Onboardingcomplete",
      numeric: true,
      disablePadding: true,
      label: "Onboardingcomplete",
    },
    {
      id: "Details",
      numeric: true,
      disablePadding: true,
      label: "Details",
    },
    {
      id: "Riskassement",
      numeric: true,
      disablePadding: true,
      label: "Risk Assement",
    },
    {
      id: "Schedulemeeting",
      numeric: true,
      disablePadding: true,
      label: "Schedule meeting",
    },
    {
      id: "Status",
      numeric: false,
      disablePadding: true,
      label: "Status",
    },
    {
      id: "Communication",
      numeric: false,
      disablePadding: true,
      label: "Communication",
    },
    {
      id: "Meetingdetails",
      numeric: false,
      disablePadding: true,
      label: "Meeting Details",
    },
    {
      id: "action",
      numeric: true,
      disablePadding: true,
      label: "Action",
    },
  ];

function EnhancedTableHead(props) {
  const {  order, orderBy,  onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  
  return (
    <TableHead sx={{backgroundColor:"#e4e4e4"}}>
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
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = ( property) => {
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

 

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
<>
    
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%' }} elevation={10}>
      <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search><hr style={{color:"#01c1eb"}}/>
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

                  return (
                    
                    <TableRow
                            >
                              <TableCell component="th"  scope="row" align="center">
                                {row.name}
                              </TableCell>

                              <TableCell align="center">
                                {row.Email} <br />
                              </TableCell>
                              <TableCell align="center">
                                {row.Phone} <br />
                              </TableCell>
                              <TableCell align="center">{row.Category}</TableCell>
                              <TableCell align="center">{row.Onboardingcomplete}</TableCell>
                              <TableCell align="center">
                              <Link style={{textDecoration: 'none'}} to ='/viewevaluationdetails'>{row.Details}</Link>
                              </TableCell>
                              <TableCell align="center">{row.Riskassessment}</TableCell>
                              <TableCell align="center">
                              <Link style={{textDecoration: 'none'}} to ='/schedulemeeting'>{row.Schedulemeeting}</Link>
                              </TableCell>
                              <TableCell align="center">{row.Status}</TableCell>
                              <TableCell align="center">{row.Communication}</TableCell>
                              <TableCell align="center">{row.Meetingdetails}</TableCell>
                              <TableCell className='actioncell' paddingBottom='10px' align="left">
                                <Button className='aprvbtn'> Approve</Button>&nbsp;&nbsp;&nbsp;
                                <Button className='rjtbtn'>Reject</Button>
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
    </>
  );
}
