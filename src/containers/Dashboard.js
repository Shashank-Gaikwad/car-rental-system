import React, { Component } from 'react'
import AdminDrawer from '../components/AdminDrawer';
import CustomerDrawer from '../components/CustomerDrawer';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <AdminDrawer /> */}
        <CustomerDrawer />
      </div>
    )
  }
}

export default Dashboard
