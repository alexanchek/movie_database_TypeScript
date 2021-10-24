import { HashRouter as Router, Switch } from 'react-router-dom'
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PublicRoute from './components/auth/PublicRoute';
import PrivateRoute from './components/auth/PrivateRoute';

import MovieAppBar from './components/MovieAppBar/MovieAppBar';
import BookDatabase from './components/Pages/BookDatabase';
import BookDatabaseAdd from './components/Pages/BookDatabaseAdd';
import MovieDatabase from './components/Pages/MovieDatabase';
import MovieDatabaseAdd from './components/Pages/MovieDatabaseAdd';
import Login from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';

import { Box, CircularProgress, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { RootState } from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getTheUserById, setLoading } from './store/actions/authActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists
  useEffect(() => {
    dispatch(setLoading(true));
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if(user) {
        // dispatch(setLoading(true));
        await dispatch(getTheUserById(user.uid));
        // if(!user.emailVerified) {
        //   // dispatch(setNeedVerification());
        // }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return (
      <CircularProgress color="secondary" />
    )
  }

  return (
    <>
      <Router>
        <CssBaseline />

        <MovieAppBar/>
        <Switch>
          <React.Fragment>
            <Container>
              <Box
                  sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',}}>
                  <PublicRoute component={Login} exact path="/login"/>
                  <PublicRoute component={SignUp} exact path="/signup"/>

                  <PrivateRoute component={MovieDatabase} exact path="/"/>
                  <PrivateRoute component={MovieDatabase} exact path="/movies"/>
                  <PrivateRoute component={MovieDatabaseAdd} exact path="/movies-add"/>
                  <PrivateRoute component={BookDatabase} exact path="/books"/>
                  <PrivateRoute component={BookDatabaseAdd} exact path="/books-add"/>
                  
                  {/* <Route component={PageNotFound} exact path=""/> */}
              </Box>
            </Container>
          </React.Fragment>
        </Switch>
      </Router>

      <Footer description={'Собираю фильмы, прикалываюсь, ну всё такое'} title={'Сашкина база данных'}/>
    </>
  );
}

export default App;