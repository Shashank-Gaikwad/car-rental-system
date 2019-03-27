import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import AddBox from '@material-ui/icons/AddBox';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  textField: {
      width: '60%'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  menu: {
    width: 200,
  },
  fab: {
    // marginLeft: '50%',
    marginTop: theme.spacing.unit * 4,
  },
});

const capacity = [
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
  ];

class AddCar extends Component {
  

//   handleChange = name => event => {
//     this.setState({ [name]: event.target.value });
//   };
  
  render(){
    const { classes } = this.props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <AddBox />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Add New Car
        </Typography>
        <TextField
          required
          id="ID"
          label="ID"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="company"
          label="Company"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="modelNumber"
          label="Model"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          type="file"
          id="carImage"
          label="Car Image"
          className={classes.textField}
          margin="normal"
        />
        {/* <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {capacity.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <TextField
          required
          id="seatingCapacity"
          label="Seating Capacity"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="pricePerHour"
          label="Price Per Hour"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          multiline
          rows="2"
          id="description"
          label="Description"
          className={classes.textField}
          margin="normal"
        />

{/* <Button variant="contained" color="primary" className={classes.button}> */}
    <Fab color="primary" className={classes.fab}>
        <SaveIcon />
    </Fab>
      {/* </Button> */}
        
      </Paper>
    </main>
  );
      }
}

AddCar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCar);