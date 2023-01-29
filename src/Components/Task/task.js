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
import PrimarySearchAppBar from "../Sidebar/appbar";
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from "react-router-dom";
import Status from './status';
import { Button, Grid, Link, Typography } from '@mui/material';

function createData(Title, User, Category,Task ,DueDate , Priority, AttachedDocument,Billing, Note) {
  return {
    Title, User, Category,Task, DueDate, Priority, AttachedDocument,Billing,Note
  };
}

const rows = [
  createData('a','Myself','Homecare','Exercise','20-06-22','Low', 'Task-file-3','$', 'A'),
  createData('b','Myself','Homecare','Exercise','20-06-22','Medium', 'Task-file-3','$', 'A'),
  createData('c','Myself','Homecare','Exercise', '20-06-22','Hight','Task-file-3','$', 'A'), 
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
    id: 'Title',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'user',
    numeric: false,
    disablePadding: true,
    label: 'User',
  },
  {
    id: 'Category',
    numeric: false,
    disablePadding: true,
    label: 'Category',
  },
  {
    id: 'routinetasks',
    numeric: false,
    disablePadding: true,
    label: 'Routine & Tasks',
  },
  
  {
    id: 'DueDate',
    numeric: false,
    disablePadding: true,
    label: 'DueDate',
  },

  {
    id: 'Priority',
    numeric: false,
    disablePadding: true,
    label: 'Priority',
  },
  {
    id: 'AttachedDocument',
    numeric: false,
    disablePadding: true,
    label: 'Attached Document',
  },
  {
    id: 'billing',
    numeric: false,
    disablePadding: true,
    label: 'Billing',
  },

  {
    id: 'Note',
    numeric: false,
    disablePadding: true,
    label: 'Note',
  },

  {
    id: 'Status',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
  
  {
    id: 'Action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
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
    navigate("/viewtask1");
    console.log("navigate", navigate);
  }


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
  
    <PrimarySearchAppBar/>

   <Container>

   <Grid container spacing={2}>


<Grid item xs={2} md={2} sx={{display: { xs: 'none', md: 'flex' }}}> 
 </Grid>

 <Grid item xs={12} md={10}>

 <Typography fontWeight='bold' fontSize='20px'>Task</Typography>

   
   <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>

   
   

   <Link style={{textDecoration: 'none'}} to href='/addtask1'>

     <Button variant='contained' sx={{m:2, backgroundColor:'#01c1eb !important'}}>
       Add Task
     </Button>

     </Link>
     {/* <AddcaseNote/> */}
  </Box>
    
    <Box sx={{ mt:3,width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, border:"1px solid #01c1eb" }}>
      <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>
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
                        //  padding="none"
                      >
                        {row.Title}
                      </TableCell>
                      <TableCell align="center">{row.User}</TableCell>
                      <TableCell align="center">{row.Category}</TableCell>
                      <TableCell align="center">{row.Task}</TableCell>
                      <TableCell align="center">{row.DueDate}</TableCell>
                      <TableCell align="center">{row.Priority}</TableCell>
                      <TableCell align="center">{row.AttachedDocument}</TableCell>
                      <TableCell align="center">{row.Billing}</TableCell>
                      <TableCell align="center">{row.Note}</TableCell>
                      <TableCell align="center" ><Status/></TableCell>
                      <TableCell align="center" sx={{p:4, display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                      <VisibilityIcon onClick={applyjob} style={{ color: "#02bd9d", fontSize:'25px' }} />
                      <Link style={{textDecoration: 'none'}} to href ='/edittask1'>
                        <ModeEditIcon/>
                        </Link>
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

    </Grid>
    </Grid>
    
    </Container>
    </>
  );
}
