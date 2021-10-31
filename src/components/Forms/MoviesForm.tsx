import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

import { getmovies } from '../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../services/errors/errorMessages';

interface ILabel {
    year: string,
    genre: string,
    country: string
}

const validationSchema = yup.object({
    year: yup.string().min(4, 'Это год, только 4 цифры :)').max(4, 'Это год, только 4 цифры :)').matches(/^[0-9]+$/iu, ERROR_ONLY_NUMBERS),
    genre: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS),
    country: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS)
})

const formFields =  
    [
        {name: 'year', label: 'Введите год'},
        {name: 'genre', label: 'Введите жанр'},
        {name: 'country', label: 'Введите страну'}
    ]

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
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
                {formFields.map((field) => {
                    return (
                        <Grid item xs={12} sm={6} key={field.name}>
                            <TextField
                            name={field.name}
                            fullWidth
                            id={field.name}
                            label={field.label}
                            autoFocus
                            value={formik.values[field.name as keyof ILabel]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched[field.name as keyof ILabel] && Boolean(formik.errors[field.name as keyof ILabel])}
                            helperText={formik.touched[field.name as keyof ILabel] && formik.errors[field.name as keyof ILabel]} />
                        </Grid>
                    )
                })} 
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