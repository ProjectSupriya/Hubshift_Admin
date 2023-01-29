import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Link} from "@mui/material";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 1000;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
   
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            float: 'right',
            right:8 ,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
export default function AddRoutine() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
      <Typography fontweight="bold" sx={{color:'#01C1EB'}}>Add Routine and Task</Typography> 
      </span>
      <BootstrapDialog 
      maxWidth={'xl'} //------- 'sm'   'md'   'lg'   'xl'
      sx={{maxWidth: '200%'}}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography sx={{fontWeight:'bold', fontSize:'15px'}}> 
          Client Name: jane Ryan
        </Typography>
        </BootstrapDialogTitle>
        <DialogContent >

            {/* <Box sx={{display:'flex', mt:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}> */}

            <Box sx={{display:'flex', justifyContent:'start',}}>
            <Typography sx={{fontWeight:'bold', fontSize:'15px'}} gutterBottom >Appointment Date </Typography> &nbsp;
        
            {/* </Box> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

           

            </Box>
          
            <Box sx={{display:'flex', mt:1, flexDirection:'row', justifyContent:'start', alignItems:'center'}}>
            <Typography sx={{fontWeight:'bold', fontSize:'15px'}} gutterBottom >Add Routine  </Typography> &nbsp;
         
            </Box>
            <Box sx={{ border:1, width: 600,height:'52px' }}>
                                        
                <Typography padding='12px'>Exercise</Typography>
                </Box>
        </DialogContent>

        <DialogActions sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link href="/addtask">
          <Button sx={{
                  background: "#008ED9 !important",
                  fontSize: "18px",
                  width: 150,
                  color: "#fff",
                  fontWeight: "500",
                }} autoFocus onClick={handleClose}>
            Add Task
          </Button>
          </Link>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
