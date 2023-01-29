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
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function createData(appointmentdate, supporttype,itemname,team, client, location, starttime, endtime, duration,category,type,Routinesandtasks, status, action) {
  return {
   
    appointmentdate,
    supporttype,
   itemname,team, client,
    location,
    starttime,
    endtime,
    duration,category,
    type,Routinesandtasks,
    status,
    action,
  };
}

const rows = [
  createData('01 - Jun - 2022', 'Core','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted' ),
  createData('02 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Jane Ryan', 'Sydney', '08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('03 - Jun - 2022', 'Capital Building','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Jackie Paula', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted' ),
  createData('04 - Jun - 2022', 'Core','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Norry Dan', 'Sydney', '08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('05 - Jun - 2022', 'Core','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Helen Miner', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted' ),
  createData('06 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am' ,'60 mins','Homecare', 'On Call','','Pending'),
  createData('07 - Jun - 2022', 'Core','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney', '08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('08 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Pending' ),
  createData('09 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted' ),
  createData('10 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am' ,'09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('11 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('12 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am' ,'09:00 am','60 mins','Homecare', 'On Call','','Accepted'),
  createData('13 - Jun - 2022', 'Capital','Assistance in Supported Independent Living - Standard - Weekday Daytime','A', 'Paddy Claire', 'Sydney','08:00 am','09:00 am','60 mins','Homecare', 'On Call','','Accepted' ),
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
    id: 'appointmentdate',
    numeric: false,
    disablePadding: true,
    label: 'Appointment Date',
  },
  
  {
    id: 'supporttype',
    numeric: false,
    disablePadding: false,
    label: 'support Type',
  },
  {
    id: 'itemname',
    numeric: false,
    disablePadding: false,
    label: 'Item Name',
  },
  {
    id: 'team',
    numeric: false,
    disablePadding: false,
    label: 'Team',
  },
  {
    id: 'client',
    numeric: false,
    disablePadding: false,
    label: 'Client',
  },
  {
    id: 'location',
    numeric: false,
    disablePadding: false,
    label: 'Location',
  },
  {
    id: 'starttime',
    numeric: true,
    disablePadding: false,
    label: 'Start Time',
  },
  {
    id: 'endtime',
    numeric: true,
    disablePadding: false,
    label: 'End Time',
  },
  {
    id: 'duration',
    numeric: false,
    disablePadding: false,
    label: 'Duration',
  },
  {
    id: 'category',
    numeric: false,
    disablePadding: false,
    label: 'Category',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'Routinesandtasks',
    numeric: false,
    disablePadding: false,
    label: 'Routine & Task',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
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



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        
        <TableContainer>
          <Table
            sx={{ minWidth: 750}}
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
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                     
                      tabIndex={-1}
                      key={row.name}
                      
                    >
                      
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.appointmentdate}
                      </TableCell>
                      <TableCell align="center">{row.supporttype}</TableCell>
                      <TableCell align="center">{row.client}</TableCell>
                      <TableCell align="center">{row.team}</TableCell>
                      <TableCell align="center">{row.client}</TableCell>
                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.starttime}</TableCell>
                      <TableCell align="center">{row.endtime}</TableCell>
                      <TableCell align="center">{row.duration}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.Routinesandtasks}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell sx={{display:'flex', flexDirection:'row', p:3, justifyContent:'center', alignItems:'center' }} align='center'>
                        
                        <RemoveRedEyeIcon sx={{color:'#9B59B6'}}/> &nbsp;&nbsp;
                        <ModeEditIcon/>&nbsp;&nbsp;

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
  );
}
