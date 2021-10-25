import * as React from 'react';
import { useState, useEffect } from 'react';
import LinkToSignUp from './LinkToSignUp';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signin, setError } from '../../../store/actions/authActions';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
// import { User } from '../../../store/types/authTypes';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { ERROR_ONLY_ENGLISH_AND_LETTERS, ERROR_REQUIRED } from '../../../services/errors/errorMessages';

const validationSchema = yup.object({
  password: yup.string().required(ERROR_REQUIRED).matches(/^[a-zA-Z0-9]+$/iu, ERROR_ONLY_ENGLISH_AND_LETTERS),
  email: yup.string().email("Это поле нужно заполнить").required(ERROR_REQUIRED)
})

const theme = createTheme();

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: "",
      email: ""
    },
    onSubmit: ({email, password}) => {
      dispatch(signin({ email, password }, () => setLoading(false)));
    },
    validationSchema
  })

  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Введите вашу почту"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              <LinkToSignUp text={`Don't have an account? Sign Up`}/> 
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;