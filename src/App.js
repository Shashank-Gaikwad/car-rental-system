import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Dashboard from './containers/Dashboard'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddCar from './components/AddCar';
import Policies from './components/Policies';
import AskQuery from './components/AskQuery';
import GiveFeedback from './components/GiveFeedback';
import UpdatePassword from './components/UpdatePassword';
import MyBookingsTable from './components/MyBookings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/About" component={AboutUs}/>
            <Route exact path="/Policies" component={Policies}/>
            <Route exact path="/ContactUs" component={ContactUs}/>
            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/AddCar" component={AddCar}/>
            <Route exact path="/AskQuery" component={AskQuery}/>
            <Route exact path="/Feedback" component={GiveFeedback}/>
            <Route exact path="/UpdatePassword" component={UpdatePassword}/>
            <Route exact path="/MyBookings" component={MyBookingsTable}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
