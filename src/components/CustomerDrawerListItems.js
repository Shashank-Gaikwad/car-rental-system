import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import MailIcon from '@material-ui/icons/Mail';
import Feedback from '@material-ui/icons/Feedback';
import AddCircle from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Help from '@material-ui/icons/Help';
import Security from '@material-ui/icons/Security';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircle />
      </ListItemIcon>
      <ListItemText primary="Book a Car" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Bookings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Security />
      </ListItemIcon>
      <ListItemText primary="Update Password" />
    </ListItem>
    
    {/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
);

export const primaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
            <NotificationsIcon/>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Ask Question" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <Feedback/>
            </ListItemIcon>
            <ListItemText primary="Give Feedback" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    <ListItem button>
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItem> */}
  </div>
);