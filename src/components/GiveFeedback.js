import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ContactMailRounded from '@material-ui/icons/ContactMailRounded';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
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

  const ratings = [
    {
      value: '5',
      label: '5',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '1',
      label: '1',
    },
  ];
  

export class GiveFeedback extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  render() {
    const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactMailRounded />
        </Avatar>
        <Typography component="h1" variant="h5">
          Give Feedback
        </Typography>
        <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
        <TextField
            id="name"
            name="name"
            label="Name"
            className={classes.textField}
            margin="normal"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
          <TextField
            id="email"
            name="emil"
            label="Email"
            className={classes.textField}
            margin="normal"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
          <TextField
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number"
            className={classes.textField}
            margin="normal"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth >
            <TextField
            id="description"
            name="description"
            label="Description"
            multiline
            rows="2"
            className={classes.textField}
            margin="normal"
            />
          </FormControl>

          <TextField
          id="rating"
          select
          label="Ratings"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Give Ratings"
          margin="normal"
        >
          {ratings.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </main>
  );
  }
}

GiveFeedback.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(GiveFeedback);
