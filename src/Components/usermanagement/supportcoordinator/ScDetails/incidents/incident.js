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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import Container from "@mui/material/Container";
import Add from './add';
import { useNavigate } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Edit } from '@material-ui/icons';
import Delete from './delete'; 

function createData( Id, IncidentDate, ReportedDate, ReportedTo, Client, Severity) {
  return {
    Id, IncidentDate, ReportedDate, ReportedTo, Client, Severity
  };
}

const rows = [
  createData( 1,'12 06 2022','12 06 2022','Hannah Chan','Jane Ryan','Low'),
  createData( 2,'12 06 2022','12 06 2022','Hannah Chan','Jane Ryan','High'),
  createData( 3,'12 06 2022','12 06 2022','Hannah Chan','Jane Ryan','Medium'),
  createData( 4,'12 06 2022','12 06 2022','Hannah Chan','Jane Ryan','Low'),
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
    id: 'Id',
    numeric: true,
    disablePadding: true,
    label: '#',
  },
  {
    id: 'IncidentDate',
    numeric: true,
    disablePadding: true,
    label: 'Incident Date',
  },
  {
    id: 'ReportedDate',
    numeric: true,
    disablePadding: false,
    label: 'Reported Date',
  },
  {
    id: 'ReportedTo',
    numeric: false,
    disablePadding: false,
    label: 'Reported To',
  },
  {
    id: 'Client',
    numeric: false,
    disablePadding: false,
    label: 'Client',
  },
  {
    id: 'Severity',
    numeric: false,
    disablePadding: false,
    label: 'Severity',
  },
  {
    id: 'action',
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
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
            sx={{ flex: '1 1 100%', mb:5 }}
            variant="h6"
            id="tableTitle"
            component="div"
           
          >
          
          </Typography>
        )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add Customer">
          <Add/>
         
        </Tooltip>
      )}
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Id) => {
    const selectedIndex = selected.indexOf(Id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Id);
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

  let navigate = useNavigate();

  function applyjob() {
    navigate("/scviewincident");
    console.log("navigate", navigate);
  }
  function applyjob1() {
    navigate("/sceditincident");
    console.log("navigate", navigate);
  }

  const isSelected = (Id) => selected.indexOf(Id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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

  return (

    <>
      
     
    <Container>
      
       <Box  sx={{ width: '100%', pt:2 }}>
       <EnhancedTableToolbar numSelected={selected.length} />
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
                .slice(page, rowsPerPage, page,  rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow>

                    <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        
                        
                      >
                        {row.Id}
                      </TableCell>
                     
                     <TableCell align="center">{row.IncidentDate}</TableCell> 
                      <TableCell align="center">{row.ReportedDate}</TableCell>
                      <TableCell align="center">{row.ReportedTo}</TableCell>
                      <TableCell align="center">{row.Client}</TableCell>
                      <TableCell align="center">{row.Severity}</TableCell>
                      <TableCell align="center" sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                        
                      <VisibilityIcon onClick={applyjob} style={{ color: "#02bd9d", fontSize:'25px' }} />
                      <Edit onClick={applyjob1} style={{ color: "#000", fontSize:'25px' }} />
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
