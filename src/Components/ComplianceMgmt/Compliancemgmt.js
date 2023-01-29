import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";

import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Date from "./date";
import PrimarySearchAppBar from "../Sidebar/appbar";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",

  color: theme.palette.text.dark,
}));

function createData(Total) {
  return {
    Total,
  };
}

const rows = [createData("$0.00")];

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
    id: "AccRef",
    numeric: false,
    disablePadding: true,
    label: "AccRef",
  },
  {
    id: "Client",
    numeric: false,
    disablePadding: true,
    label: "Client",
  },

  {
    id: "Date ",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },

  {
    id: "Service",
    numeric: false,
    disablePadding: false,
    label: "Service",
  },
  {
    id: "SchTime",
    numeric: true,
    disablePadding: false,
    label: "Sch Time",
  },
  {
    id: "ActualTime",
    numeric: true,
    disablePadding: false,
    label: "ActualTime",
  },

  {
    id: "MarkedTime",
    numeric: true,
    disablePadding: false,
    label: "Marked Time",
  },

  {
    id: "Marked Variance",
    numeric: false,
    disablePadding: false,
    label: "Marked Variance",
  },

  {
    id: "Distance",
    numeric: false,
    disablePadding: false,
    label: "Distance from START",
  },

  {
    id: "Distance1",
    numeric: false,
    disablePadding: false,
    label: "Distance from End",
  },

  {
    id: "Signed",
    numeric: false,
    disablePadding: false,
    label: "Signed",
  },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{backgroundColor:'#F0F0F0'}}>
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
  // const [dense, setDense] = React.useState(false);
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

    const buttonsty = {
      backgroundColor: "#01C1EB"
    }

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
            <Typography fontSize="22px" fontWeight="bold">
              {" "}
              Compliance Mgmt./Appointments - Compliance Reports{" "}
            </Typography>

            <Box sx={{ mt: 4, width: "100%" }}>
              <Paper elevation={0} sx={{ width: "100%", mb: 2 }}>
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
                              >
                                <TextField />
                              </TableCell>
                              <TableCell align="center">
                              
                                dropdown section
                              </TableCell>
                              <TableCell align="center">
                                {" "}
                                <Date />{" "}
                              </TableCell>
                              <TableCell align="center"> _ </TableCell>
                              <TableCell align="center"> _ </TableCell>
                              <TableCell align="center"> _ </TableCell>
                              <TableCell align="center"> _</TableCell>
                              <TableCell align="center">
                                <TextField placeholder="10" />
                              </TableCell>
                              <TableCell align="center">
                                <TextField placeholder="100" />
                              </TableCell>
                              <TableCell align="center">
                                <TextField placeholder="100" />
                              </TableCell>
                              <TableCell align="center">
                              
                                <Button variant="contained" style={buttonsty}>
                                
                                  Search
                                </Button>
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

            <Grid container>
              <Grid item xs={12} md={2}>
                <Item elevation={0}>
                  <Typography fontSize="16px" fontWeight="bold" padding='10px'>
                    Signature:
                  </Typography>
                </Item>
              </Grid>

              <Grid item xs={12} md={8}>
                <Item elevation={0}>
                  <Box>
                    <FormControl>
                      <RadioGroup
                        row
                     
                      >
                        <FormControlLabel
                          value="all"
                          control={<Radio />}
                          label="All"
                        />
                        <FormControlLabel
                          value="signed"
                          control={<Radio />}
                          label="Signed"
                        />
                        <FormControlLabel
                          value="not signed"
                          control={<Radio />}
                          label="not signed"
                        />
                       
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={2}>
                <Item elevation={0}>
                  <Typography fontSize="16px" fontWeight="bold" padding='10px'>
                    Status
                  </Typography>
                </Item>
              </Grid>

              <Grid item xs={12} md={8}>
                <Item elevation={0}>
                  <Box>
                    <FormControl>
                      <RadioGroup
                        row
                     
                      >
                        <FormControlLabel
                          value="all"
                          control={<Radio />}
                          label="All"
                        />
                        <FormControlLabel
                          value="Completed"
                          control={<Radio />}
                          label="Completed"
                        />
                        <FormControlLabel
                          value="notcompleted"
                          control={<Radio />}
                          label="Not Completed"
                        />
                       
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={2}>
                <Item elevation={0}>
                  <Typography fontSize="16px" fontWeight="bold" padding='10px'>
                  Distance:
                  </Typography>
                </Item>
              </Grid>

              <Grid item xs={12} md={8}>
                <Item elevation={0}>
                  <Box>
                    <FormControl>
                      <RadioGroup
                        row
                     
                      >
                        <FormControlLabel
                          value="all"
                          control={<Radio />}
                          label="All"
                        />
                        <FormControlLabel
                          value="outside"
                          control={<Radio />}
                          label="Outside Tolerance Range"
                        />
                        <FormControlLabel
                          value="Inside "
                          control={<Radio />}
                          label="Inside Tolerance Range"
                        />
                       
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Item>
              </Grid>

            </Grid>

            <Grid item xs={12} md={12}>
            <Divider/>

                <Item elevation={0}>
                  <Typography padding='10px' fontSize='16px'>
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip 

                  </Typography>
                </Item>
              </Grid>

          </Grid>
        </Grid>
      </Container>
    </>
  );
}
