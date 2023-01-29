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
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from "react-router-dom";
import {Button, Link} from '@mui/material';
import { Edit } from '@material-ui/icons';
import VisibilityIcon from '@mui/icons-material/Visibility';

function createData(Title,DueDate, Priority, AttachedDocument, Note,AssignedBy,Status) {
  return {
    Title,DueDate, Priority, AttachedDocument, Note,AssignedBy,Status
  };
}

const rows = [
  createData('Get X-Ray details','8-Sep-2022','Medium', 'Task-file-3', 'A','Ann Lee - Physiotherapist', 'Completed'),
  createData('Submit Reports','7-Sep-2022', 'Medium','Task-file 2', 'A','David Thomas - OT','Pending'),
  createData('Get these medical tests done','6-Sep-2022','High','Task-file 1', 'A','Cesar Ran - GP','Canceled'), 
  createData('Get X-Ray details','8-Sep-2022','Medium', 'Task-file-3', 'A','Ann Lee - Physiotherapist', 'Completed'),
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
    id: 'Note',
    numeric: false,
    disablePadding: true,
    label: 'Note',
  },
  {
    id: 'AssignedBy',
    numeric: false,
    disablePadding: true,
    label: 'Assigned By',
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
  const {  order, orderBy,  onRequestSort } =
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

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

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
    navigate("/clientedittask");
    console.log("navigate", navigate);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
  
    {/* <PrimarySearchAppBar/> */}
   <Container style={{ paddingBottom:"10px", paddingLeft:"0px", paddingRight:"0px"}}>  

   <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>

   <Link style={{textDecoration: 'none'}} to href='/clientaddtask'>

   <Button variant='contained' sx={{m:2, backgroundColor:'#01c1eb !important'}}>
  Add Task
   </Button>

</Link>
   </Box>


    <Box sx={{ width: '100%' }}>
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
                        {row.Title}
                      </TableCell>
                      <TableCell align="center">{row.DueDate}</TableCell>
                      <TableCell align="center">{row.Priority}</TableCell>
                      <TableCell align="center">{row.AttachedDocument}</TableCell>
                      <TableCell align="center">{row.Note}</TableCell>
                      <TableCell align="center">{row.AssignedBy}</TableCell>
                      <TableCell align="center" >{row.Status}</TableCell>
                      <TableCell align="center" sx={{p:4, display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                      <Edit onClick={applyjob} style={{ color: "#9b59b6", fontSize:'25px' }} />
                      <Link href='/clientviewtask'> <VisibilityIcon/> </Link>  
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
   
    </Container>
    </>
  );
}
