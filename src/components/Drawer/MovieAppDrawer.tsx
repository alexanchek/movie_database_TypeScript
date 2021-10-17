import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IDrawer } from '../../types/Components/IDrawer';

const AppDrawer: React.FC<IDrawer> = ({open, setDrawerOpen, Links}) => {
  const handleClick = () => {
    setDrawerOpen(false);
  }

  const renderDrawer = () => {
    return (
      <Drawer anchor='left' open={open} onClose={() => setDrawerOpen(false)}>
        <List>
          {Links.map(({label, link}, index) => (
            <NavLink to={link} onClick={handleClick} key={label}>
                <ListItem button key={label}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </NavLink>
          ))}
        </List>
    </Drawer>
    )
  }

    return (
      <>
        {renderDrawer()}
      </>
    );
};

export default AppDrawer;