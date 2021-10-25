import { Box, Button, Grid, TextField } from '@mui/material';
import React, {} from 'react';

import { addmovie } from '../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { ERROR_REQUIRED, ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../services/errors/errorMessages';

const validationSchema = yup.object({
    
    movieName: yup.string().required(ERROR_REQUIRED),
    year: yup.string().min(4, 'Это год, только 4 цифры :)').max(4, 'Это год, только 4 цифры :)').matches(/^[0-9]+$/iu, ERROR_ONLY_NUMBERS).required(ERROR_REQUIRED),
    desc: yup.string().min(10, "Напишите поподробнее, пожалуйста").required(ERROR_REQUIRED),
    country: yup.string().matches(/^[а-яА-ЯA-Za-z]+$/iu, ERROR_ONLY_LETTERS).required(ERROR_REQUIRED),
    genre: yup.string().matches(/^[а-яА-ЯA-Za-z]+$/iu, ERROR_ONLY_LETTERS).required(ERROR_REQUIRED),
  })

const MoviesAddForm = () => {
    const dispatch = useDispatch();

    const uuid = '';
    const img = '';

    const formik = useFormik({
        initialValues: {
          movieName: "",
          year: "",
          genre: "",
          country: "",
          desc: ""
        },
        onSubmit: ({movieName, year, desc, country, genre}, { resetForm }) => {
            dispatch(addmovie({uuid, movieName, img, year, desc, country, genre}));
            resetForm();
        },
        validationSchema
      })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                name="movieName"
                required
                fullWidth
                id="firstName"
                label="Введите название фильма"
                autoFocus
                value={formik.values.movieName}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.movieName && Boolean(formik.errors.movieName)}
                helperText={formik.touched.movieName && formik.errors.movieName}
                // onChange={(e) => setMovieName(e.currentTarget.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="lastName"
                label="Введите год"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.year && Boolean(formik.errors.year)}
                helperText={formik.touched.year && formik.errors.year}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="lastName"
                label="Введите жанр"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.genre && Boolean(formik.errors.genre)}
                helperText={formik.touched.genre && formik.errors.genre}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                fullWidth
                id="email"
                label="Введите страну"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="outlined-multiline-static"
                label="Краткое описание"
                name="desc"
                multiline
                rows={7}
                value={formik.values.desc}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                error={formik.touched.desc && Boolean(formik.errors.desc)}
                helperText={formik.touched.desc && formik.errors.desc}
                />
            </Grid>
            
            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }
                }
            >
                Отправить
            </Button>
        </Box>
    );
};

export default MoviesAddForm;