import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../store/actions/authActions';

import MovieAppDrawer from '../Drawer/MovieAppDrawer';
import Links from './links.json';

interface IMovieAppBar {
}

const MovieAppBar: React.FC<IMovieAppBar> = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {authenticated
          ? <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          : null }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Сашкина база
          </Typography>

          {/* {user 
          ? <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Привет, {user?.firstName}!
            </Typography> 
          : null} */}

          { authenticated
          ? <Button color="inherit" onClick={signOutHandler}>Выйти</Button>
          : null}
        </Toolbar>
      </AppBar>

      {authenticated
      ? <MovieAppDrawer open={drawerOpen} setDrawerOpen={setDrawerOpen} Links={Links}/>
      : null }
    </Box>
  );
}

export default MovieAppBar;