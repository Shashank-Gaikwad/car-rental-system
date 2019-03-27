import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  grid: {
    width: '60%',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class BookingForm extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reserve Car
        </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <DatePicker
            margin="normal"
            label="Hire Date"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
          <DatePicker
            margin="normal"
            label="Return Date"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </FormControl>
          
          
          <FormControl margin="normal" required fullWidth>
          <TimePicker
            margin="normal"
            label="Pickup Time"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
          <TimePicker
            margin="normal"
            label="Return Time"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Need a driver ?"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirm
          </Button>
          </form>
        </Grid>
      </MuiPickersUtilsProvider>
      </Paper>
    </main>
    );
  }
}

BookingForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingForm);