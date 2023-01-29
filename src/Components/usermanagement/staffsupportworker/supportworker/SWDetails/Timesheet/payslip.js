import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Check, Clear, Visibility } from '@material-ui/icons';
import Generate from './generate'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';

function createData(periodsarting, periodending, basepay, hourspaid, grossearning, superpayments,Net,detail) {
  return {
    periodsarting, periodending, basepay, hourspaid, grossearning, superpayments,Net,detail,
    history: [
      {
       name: 'Jane Ryan', 
       periodending:'21-Jul-2022',
       basepay:'21-Jul-2022',
       hourspaid:'$30.75',
       grossearning:'8',
       Net:'$100.67',
       superpayments:'$30.50',
       detail:'$43.45'
      },
      {
        name: 'Jane Ryan', 
       periodending:'21-Jul-2022',
       basepay:'21-Jul-2022',
       hourspaid:'$30.75',
       grossearning:'8',
       Net:'$100.67',
       superpayments:'$30.50',
       detail:'$43.45'
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
                 {row.periodsarting}
               </TableCell>
               <TableCell align="center">{row.periodending}</TableCell>
               <TableCell align="center">{row.basepay}</TableCell>
               <TableCell align="center">{row.hourspaid}</TableCell> 
               <TableCell align="center">{row.grossearning}</TableCell> 
               <TableCell align="center">{row.Net}</TableCell> 
               <TableCell align="center">{row.superpayments}</TableCell> 
               <TableCell align="center" sx={{ display: 'flex', flexDirection: 'row',flexWrap: 'nowrap', 
               justifyContent: 'space-around',pb:5 }}> 
               <Generate/>
                </TableCell> 
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
               Client
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                    <TableCell component="th" scope="row">
                {historyRow.name}
              </TableCell>
              <TableCell align="center" >{historyRow.periodending}</TableCell>
              <TableCell align="center" >{historyRow.basepay}</TableCell>
              <TableCell align="center" >{historyRow.hourspaid}</TableCell> 
              <TableCell align="center" >{historyRow.grossearning}</TableCell> 
              <TableCell align="center" >{historyRow.Net}</TableCell> 
              <TableCell align="center" >{historyRow.superpayments}</TableCell> 
              <TableCell align="center">{historyRow.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
         '11-Jul-2022 ',
         '21-Jul-2022',
         '$30.75',
         24,
         '$1234.67',
         '$30.50',
         '$43.45',
         
       ),
    
       createData(
         '11-Jul-2022 ',
         '21-Jul-2022',
         '$30.75',
         24,
         '$1234.67',
         '$30.50',
         '$143.45',
         
       ),
    
];

export default function CollapsibleTable() {
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end',}}>
   <Link style={{textDecoration: 'none'}} to =''>

     <Button  sx={{ textTransform:"capitalize", m:1}}>
      View All
     </Button>

     </Link>
    </Box>
   
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Period Starting</TableCell>
           <TableCell align="center">Period Ending</TableCell>
           <TableCell align="center">Base Pay Rate(per hour)</TableCell>
           <TableCell align="center">Hours Paid</TableCell>
           <TableCell align="center">Gross Earning</TableCell>
           <TableCell align="center">Net Payment </TableCell>
           <TableCell align="center">Super Payments  </TableCell> 
           <TableCell align="center">Action  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}