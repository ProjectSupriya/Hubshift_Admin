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
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { visuallyHidden } from '@mui/utils';
import {Button, Grid, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import PrimarySearchAppBar from '../Sidebar/appbar'



function createData(Shift, Starttime,Endtime ,Level,Jobtitle, Jobtype,Shiftrate ) {
  return {
    Shift,Starttime, Endtime,Level,Jobtitle, Jobtype,Shiftrate
  };
}

const rows = [
  createData('General','06:00 AM ','8:00 PM','5','Nurse','Casual','$50', ),

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
    id: 'ShiftName',
    numeric: false,
    disablePadding: true,
    label: 'Shift Name',
  },
  
  {
    id: 'StartTime',
    numeric: false,
    disablePadding: true,
    label: 'Start Time ',
  },
  {
    id: 'End Time',
    numeric: false,
    disablePadding: true,
    label: 'End Time',
  },
  {
    id: 'Level',
    numeric: false,
    disablePadding: true,
    label: 'level ',
  },
  

  {
    id: 'Job Title',
    numeric: true,
    disablePadding: false,
    label: 'Job Title',
  },

  {
    id: 'Job Type',
    numeric: true,
    disablePadding: false,
    label: 'Job Type',
  },

  {
    id: 'Shift Rate',
    numeric: true,
    disablePadding: false,
    label: 'Shift Rate ',
  },
  {
    id: 'Action ',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy,onRequestSort } =
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


export default function ConflictTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  function view() {
    navigate("/viewconflict1");
  }
  function edit() {
    navigate("/editshifts");
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

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 




  // Avoid a layout jump when reaching the last page with empty rows.
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

<Typography fontWeight='bold' fontSize='20px'> Shifts</Typography>


   <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <Link style={{textDecoration: 'none'}} to ='/addshifts'>

     <Button variant='contained' sx={{ backgroundColor:'#01c1eb', textTransform:'capitalize'}}>
       Add New
     </Button>

     </Link>
     {/* <AddcaseNote/> */}
    </Box>

    <Box mt={4} sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, border:"1px solid #01c1eb" }}>
     
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
                        //  padding="none"
                      >
                        {row.Shift}
                      </TableCell>
                      <TableCell align="center">{row.Starttime}</TableCell>
                      <TableCell align="center">{row.Endtime}</TableCell>
                      <TableCell align="center">{row.Level}</TableCell>
                      <TableCell align="center">{row.Jobtitle}</TableCell>
                      <TableCell align="center">{row.Jobtype}</TableCell>
                      <TableCell align="center">{row.Shiftrate}</TableCell>



                      <TableCell align="center" sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}> 
                        <EditIcon onClick={edit}/> 
                        <VisibilityIcon  onClick={view} style={{ color: "#9b59b6"}} />

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