import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import SensorsIcon from '@mui/icons-material/Sensors';
import ShortsVideoIcon from '../assets/youtube-shorts-logo-15251 (1).png';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
export const mainListItems = (
  <React.Fragment>
               <ListItemButton component={Link} to="/dashboard/devices">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homes"/>
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/devices">
                <ListItemIcon >
                  <img src={ShortsVideoIcon} alt="Device"  style={{ width: '24px', height: '24px' , opacity : 0.5}} />
                </ListItemIcon>
                <ListItemText primary="Shorts" />
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/devices">
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Subscripstions"/>
              </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
export const LastListItems = (
  <React.Fragment>
      <ListSubheader component="div" inset>
      Setting
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary="Update User" />
    </ListItemButton>
    <ListItemButton component={Link} to="/dashboard/logout">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItemButton>
  </React.Fragment>
);