import React from 'react';
import { Box, Button, Grid } from '@mui/material';

import { addmovie } from '../../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { ERROR_REQUIRED, ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../../services/errors/errorMessages';
import { formFields } from './MoviesAddFormConfig';
import AppTextField from '../Fields/AppTextField';

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
                {formFields.map((field) => {
                    return (
                        <Grid item xs={12} sm={field.multi ? 12 : 6} key={field.label}>
                            <AppTextField field={field} formik={formik} required={true} onBlur={false}/>
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

export default MoviesAddForm;