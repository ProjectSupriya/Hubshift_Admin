import * as React from "react";
import PropTypes from "prop-types";
import { styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import PrimarySearchAppBar from "../Sidebar/appbar";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Stack, Typography,TextField, InputAdornment } from "@mui/material";
import Group from "./group"
import Nsw from "./Nsw"
import SearchIcon from '@mui/icons-material/Search';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.dark,
}));

function createData(
  supportnum,
  supportname,
  Registration,
  Category,
  Unit,
  NSW
 
) {
  return {
    supportnum,
    supportname,
    Registration,
    Category,
    Unit,
    NSW
   
   
  };
}

const rows =

 [createData("01_002_0107_1_1","Assistance With Self-Care Activities - Standard - Weekday Night","Daily personal Activities","Assistance with Daily Life(Includes SIL)","H","$64.14"),

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
  return order === "desc"
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
    id: "supportnum",
    numeric: false,
    disablePadding: true,
    label: "Support Item Number",
  },
  {
    id: "supportname",
    numeric: false,
    disablePadding: true,
    label: "Support Item Name",
  },
  {
    id: "Registration",
    numeric: false,
    disablePadding: true,
    label: "Registration Group Name",
  },
  {
    id: "Category",
    numeric: false,
    disablePadding: true,
    label: "Support Category Name",
  },

  {
    id: "Unit",
    numeric: false,
    disablePadding: true,
    label: "Unit",
  },

  {
    id: "NSW",
    numeric: false,
    disablePadding: true,
    label: "NSW",
  },
  
];

const Input = styled("input")({
  display: "none",
});

const buttonsty = {
  backgroundColor: "#01C1EB ",
  // width: "150px",
};

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      sx={{ backgroundColor:"#e4e4e4",m:2}}
    >
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <PrimarySearchAppBar />

      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>

          <Grid item xs={12} md={10}>
            <Typography fontWeight="bold" fontSize="20px">
              NDIA Rates
            </Typography>

            <Grid container mt={15}>

            <Grid item xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    
                    <TextField fullWidth id="fullWidth" placeholder='Search Item Number or Name'
                    InputProps={{
                      startAdornment: <InputAdornment position="start"> <SearchIcon/> </InputAdornment>,
                    }}

                    />
                  </Box>
                </Item>
              </Grid>

            <Grid item xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    <Group />
                  </Box>
                </Item>
              </Grid>

              <Grid item xs={12} md={4}>
                <Item elevation={0}>
                  <Box>
                    {/* <Typography fontWeight="bold" fontSize="16px">
                    Selected States
                    </Typography> */}

                    <Nsw />
                  </Box>
                </Item>
              </Grid>

            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Box>
                <Stack mt={2} direction="row" alignItems="center" spacing={0}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button
                      style={buttonsty}
                      variant="contained"
                      component="span"
                    >
                      <AddIcon/> File Upload
                    </Button>
                  </label>
                </Stack>
              </Box>

              {/* <AddcaseNote/> */}
            </Box>

            <Box sx={{ mt: 3, width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2,}}>
                
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-labelledby="tableTitle">
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
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => {
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow>

                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                align="center"
                              >
                                {row.supportnum}
                              </TableCell>

                              <TableCell align="center">{row.supportname}</TableCell>

                              <TableCell align="center"> {row.Registration}</TableCell>
                               
                              <TableCell align="center">{row.Category}</TableCell>

                              <TableCell align="center">{row.Unit}</TableCell>
                              <TableCell align="center"> {row.NSW} </TableCell>
                             
                            
                            

                              

                            </TableRow>
                          );
                        })}
                      {emptyRows > 0 && (
                        <TableRow>
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
