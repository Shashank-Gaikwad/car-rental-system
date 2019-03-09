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
import ContactMail from '@material-ui/icons/ContactMail';
import Feedback from '@material-ui/icons/Feedback';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Help from '@material-ui/icons/Help';

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
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Bookings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Suppliers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
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
            <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Cars" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <ContactMail/>
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Questions" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <Feedback />
            </ListItemIcon>
            <ListItemText primary="Feedbacks" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
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