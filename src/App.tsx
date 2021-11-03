import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';

import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { RootState } from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getTheUserById, setLoading } from './store/actions/authActions';
import Routes from './routes/Routes';

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
      <CssBaseline />

      <Routes />

      <Footer description={'Собираю фильмы, прикалываюсь, ну всё такое'} title={'Сашкина база данных'}/>
    </>
  );
}

export default App;