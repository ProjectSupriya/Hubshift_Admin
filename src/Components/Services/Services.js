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
import { visuallyHidden } from '@mui/utils';
import { Button, Grid, Link, Typography } from '@mui/material';

function createData(Support, Itemnum, Itemname ,Unit ,National , Remote, Veryremote) {
  return {
    Support, Itemnum, Itemname,Unit, National, Remote, Veryremote
  };
}

const rows = [
  createData('Core','01_801_0115_1_1','Assistance in Supported Independent Living','Hour','$62.17','$87.04', '$93.26',),
  createData('Core','01_801_0115_1_1','Assistance in Supported Independent Living','Hour','$62.17','$87.04', '$93.26',),
  createData('Core','01_801_0115_1_1','Assistance in Supported Independent Living','Hour','$62.17','$87.04', '$93.26',),


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
    id: 'Support',
    numeric: false,
    disablePadding: true,
    label: 'Support Types',
  },
  {
    id: 'ItemNo',
    numeric: false,
    disablePadding: true,
    label: 'Item No.',
  },
  {
    id: 'Item Name',
    numeric: false,
    disablePadding: true,
    label: 'Item Name & Description',
  },
 
  
  {
    id: 'Unit',
    numeric: false,
    disablePadding: true,
    label: 'Unit',
  },

  {
    id: 'National',
    numeric: false,
    disablePadding: true,
    label: 'National',
  },
  {
    id: 'Remote',
    numeric: false,
    disablePadding: true,
    label: 'Remote ',
  },
  {
    id: 'Veryremote',
    numeric: false,
    disablePadding: true,
    label: 'Veryremote',
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
          <TableCell style={{padding:'7px'}}
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

 <Typography fontWeight='bold' fontSize='20px'>Services</Typography>

   
   <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>


   <Link style={{textDecoration: 'none'}} to href='/addservices'>

     <Button variant='contained' sx={{m:2, backgroundColor:'#01c1eb !important'}}>
       Add Services
     </Button>

     </Link>
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
                        align="center"
                      >
                        {row.Support}
                      </TableCell>
                      <TableCell align="center">{row.Itemnum}</TableCell>
                      <TableCell align="center">{row.Itemname}</TableCell>
                      <TableCell align="center">{row.Unit}</TableCell>
                      <TableCell align="center">{row.National}</TableCell>
                      <TableCell align="center">{row.Remote}</TableCell>
                      <TableCell align="center">{row.Veryremote}</TableCell>
                     
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
