import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import Stepper from './stepper'
import { Visibility } from '@material-ui/icons';
import sound from '../../../assets/sound.png'
import Weektab from './weektab'
import Team from './team'

function createData(Dateandtime,Service,Team, Tasks, Status) {
  return {
    Dateandtime,Service,Team, Tasks, Status
  };
}

const rows = [
  createData('1-Jun-2022<br/>4:00 PM - 5:00 PM','Assistance in Supported Independent Living - Standard - Weekday Evening','A',<Stepper/>,'Started'),
  createData('1-Jun-2022<br/>4:00 PM - 5:00 PM','Assistance in Supported Independent Living - Standard - Weekday Evening','B',<Stepper/>,'Started'),
 
 
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
    id: 'Dateandtime',
    numeric: true,
    disablePadding: true,
    label: 'Date & time',
   
  },
 
  {
    id: 'Service',
    numeric: false,
    disablePadding: false,
    label: 'Service',
  },
  {
    id: 'Team',
    numeric: false,
    disablePadding: false,
    label: 'Team',
  },
  {
    id: 'Tasks',
    numeric: false,
    disablePadding: false,
    label: 'Tasks',
  },
  {
    id: 'Status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'Action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy,  onRequestSort } =
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
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);

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

 

 
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
<>
    
    <Box fullwidth>
    <Weektab/>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{backgroundColor:"#F4F4F4"}}>
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
                  
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    
                    <TableRow >
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        // padding="none"
                      >
                        {row.Dateandtime}
                      </TableCell>
                      <TableCell align="center">{row.Service}</TableCell>
                      <TableCell align="center"><Team/></TableCell>
                      <TableCell align="center"><Stepper/></TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                      <TableCell align="center">
                      <img src={sound} alt=""/>
                      <Visibility  style={{ color: "#9b59b6", fontSize:'25px' }} />
                     
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
       
      </Paper>
      
    </Box>
    </>
  );
}
