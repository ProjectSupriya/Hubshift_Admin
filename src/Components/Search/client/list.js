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
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { Edit } from '@material-ui/icons';

function createData(ClientName, DOB, Suburb, GeoRegion, Postcode, CaseManager, Referrer, Status) {
  return {
    ClientName, DOB, Suburb, GeoRegion, Postcode, CaseManager, Referrer, Status
  };
}

const rows = [
  createData('Jane Ryan', '12-Jun-1980','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1981','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1982','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1983','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1984','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1985','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1986','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1987','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1988','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1989','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1983','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1982','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1981','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1980','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
  createData('Jane Ryan', '12-Jun-1983','Melbourne', 'Parkville', '3010', 'Luca Birrell','Logan Lyell','Active'),
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
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Client Name',
  },
  {
    id: 'DOB',
    numeric: true,
    disablePadding: false,
    label: 'DOB',
  },
  {
    id: 'Suburb',
    numeric: false,
    disablePadding: true,
    label: 'Suburb',
  },
  {
    id: 'GeoRegion',
    numeric: false,
    disablePadding: true,
    label: 'Geo. Region',
  },
  {
    id: 'Postcode',
    numeric: true,
    disablePadding: true,
    label: 'Postcode',
  },
  {
    id: 'CaseManager',
    numeric: true,
    disablePadding: true,
    label: 'Case Manager',
  },
  {
    id: 'Referrer',
    numeric: false,
    disablePadding: true,
    label: 'Referrer',
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
  const {  order, orderBy,  onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{backgroundColor:"#e4e4e4" }}>
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
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
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
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow >
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="1px"
                      >
                        {row.ClientName}
                      </TableCell>
                      <TableCell align="center">{row.DOB}</TableCell>
                      <TableCell align="center">{row.Suburb}</TableCell>
                      <TableCell align="center">{row.GeoRegion}</TableCell>
                      <TableCell align="center">{row.Postcode}</TableCell>
                      <TableCell align="center">{row.CaseManager}</TableCell>
                      <TableCell align="center">{row.Referrer}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                      <TableCell sx={{p:4, display: 'flex', flexDirection: 'row',flexWrap: 'nowrap',
                       justifyContent: 'space-around' }}><Edit/><DeleteIcon sx={{color:"red"}}/></TableCell>
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
