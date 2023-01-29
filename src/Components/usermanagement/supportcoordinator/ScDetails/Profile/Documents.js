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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputBase from '@mui/material/InputBase';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { visuallyHidden } from '@mui/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Divider, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function createData(serialno , DocumentName, DocumentPath, UploadedOn, ValidTill, Risk , ) {
  return {
    serialno , DocumentName, DocumentPath,UploadedOn, ValidTill, Risk , 
  };
}

const rows = [
  createData('1','FirstAidCertificate', 'SW/Folder/First', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('2','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('3','FirstAidCertificate', 'SW/Folder/First', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('4','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('5','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('6','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('7','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('8','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('9','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),
  createData('10','FirstAidCertificate', 'SW/Folder/First ', '22-Jun-2022,5:45 PM','01-01-2030', '4',),









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
    id: '#',
    numeric: false,
    disablePadding: true,
    label: '#',
  },
  {
    id: 'Document Name',
    numeric: false,
    disablePadding: true,
    label: 'Document Name',
  },
  {
    id: 'Document Name',
    numeric: false,
    disablePadding: true,
    label: 'Document Path',
  },
  {
    id: 'Uploaded On',
    numeric: false,
    disablePadding: true,
    label: 'Uploaded On',
  },
  {
    id: 'Valid On',
    numeric: false,
    disablePadding: true,
    label: 'Valid On ',
  },
  {
    id: 'Risk Assessment Level',
    numeric: false,
    disablePadding: true,
    label: 'Risk Assessment Level',
  },
 
  {
    id: 'Action',
    numeric: false,
    disablePadding: true,
    label: 'Action',
  },

  // {
  //   id: 'Action',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Action',
  // },
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


export default function Documents() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  function viewNotes() {
    navigate("/view");
    console.log("navigate", navigate);
  }

  function editNotes() {
    navigate("/editnote");
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>


   <Container style={{paddingTop:"0px", paddingBottom:"0px", paddingLeft:"0px", paddingRight:"0px"}}>

   <Box sx={{mt:8,display:'flex', justifyContent:'space-between'}}>
   <Typography fontSize='25px' fontWeight='bold'> Documents</Typography>

   <Link style={{}} to =''>

     <Button variant="text" sx={{ color:'#01c1eb'}}>
     DOWNLOAD ZIP
     </Button>

    </Link>
    </Box>

    <Box mt={2} sx={{ width: '100%',width:950,}}>
      <Paper sx={{ width: '100%', border:"1px solid #01c1eb" }}>
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
                        {row.serialno}
                      </TableCell>
                      <TableCell align="center">{row.DocumentName}</TableCell>
                      <TableCell align="center">{row.DocumentPath}</TableCell>
                      <TableCell align="center">{row.UploadedOn}</TableCell>
                      <TableCell align="center">{row.ValidTill}</TableCell>
                      <TableCell align="center">{row.Risk}</TableCell>
                      {/* <TableCell align="center" sx={{p:4, display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                      <Visible/> </TableCell> */}
                      <TableCell align="center" sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                        
                        <VisibilityIcon onClick={viewNotes} style={{ color: "#02bd9d", fontSize:'25px' }} />
                        <DeleteIcon/>
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
    <Divider sx={{ mt: 10,mb:6, bgcolor: 'black' }} variant="middle" />

    <Box>
                <Typography fontWeight='bold'> Self-service </Typography>

                <Typography mt={1}>Turn on self-service to allow employees to view their pay slips,
                  manage their personal details and apply for leave.
                </Typography>

                <Typography fontWeight='bold'>Turn on self-service for this employee?</Typography>

                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Yes" />
                    <FormControlLabel value="male" control={<Radio />} label="No" />
                   
                  </RadioGroup>

                </FormControl>

    </Box>
   
    </Container>
    </>
  );
}