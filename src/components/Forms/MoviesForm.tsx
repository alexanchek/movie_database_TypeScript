import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

import { getmovies } from '../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../services/errors/errorMessages';

const validationSchema = yup.object({
    year: yup.string().min(4, 'Это год, только 4 цифры :)').max(4, 'Это год, только 4 цифры :)').matches(/^[0-9]+$/iu, ERROR_ONLY_NUMBERS),
    genre: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS),
    country: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS)
})

const MoviesForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            year: "",
            country: "",
            genre: ""
        },
        onSubmit: (values) => {
            const data = {year: values.year, genre: values.genre, country: values.country};
            dispatch(getmovies(data));
        }, 
        validationSchema
    })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                name="year"
                fullWidth
                id="year"
                label="Введите год фильма"
                autoFocus
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.year && Boolean(formik.errors.year)}
                helperText={formik.touched.year && formik.errors.year}

                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                type="text"
                fullWidth
                id="genre"
                label="Введите жанр"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.genre && Boolean(formik.errors.genre)}
                helperText={formik.touched.genre && formik.errors.genre}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                type="text"
                fullWidth
                id="country"
                label="Введите страну"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
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

export default MoviesForm;