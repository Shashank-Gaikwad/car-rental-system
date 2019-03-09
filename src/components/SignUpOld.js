import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
      },
      button: {
        margin: theme.spacing.unit
      },
      grow: {
        flexGrow: 1
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 1200
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20
      },
});

function SignUp(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Sign Up
        </Typography>
        <TextField
          id="username"
          label="User Name"
          placeholder="Enter user name"
          className={classes.textField}
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <TextField
        id="birthdate"
        label="Birth Date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
          id="address"
          label="Address"
          placeholder="Enter Address"
          className={classes.textField}
          multiline
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <TextField
          id="email"
          label="Email"
          placeholder="Enter Email"
          className={classes.textField}
          type="email"
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
      <TextField
          id="contact"
          label="Contact No"
          placeholder="Enter Contact No"
          className={classes.textField}
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <TextField
          id="password"
          label="Password"
          placeholder="Enter Password"
          className={classes.textField}
          type="password"
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <TextField
          id="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          className={classes.textField}
          type="password"
          margin="normal"
          fullWidth
          onChange={e => {
            this.setState({
              username: e.target.value
            });
          }}
        />
        <Button
          onClick={() => {
            this.props.login(this.state);
          }}
          variant="contained"
          color="primary"
          className={classes.button}>
          Sign Up
        </Button>
      </Paper>
    </div>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
