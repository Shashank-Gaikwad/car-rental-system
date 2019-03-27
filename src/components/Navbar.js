import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter, Redirect} from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'left',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  link: {
    marginLeft: 10,
    marginRight: 10,
  }
};


function Navbar(props) {
  const { classes } = props;
  console.log('props received - ',classes)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Car Rental System
          </Typography>
          <Button color="inherit" className={classes.link} onClick={() =>{this.props.history.push('/dashboard')} }>About Us</Button>
          <Button color="inherit" href="/ContactUs" className={classes.link}>Contact Us</Button>
          <Button color="inherit" href="/SignUp" className={classes.link}>Sign Up</Button>
          <Button color="inherit" href="/SignIn" className={classes.link}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navbar));