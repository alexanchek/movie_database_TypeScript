import React from 'react';
import { Box, Button, Grid } from '@mui/material';

import { getmovies } from '../../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { formFields, validationSchema } from './MoviesFormConfig';

import AppTextField from '../Fields/AppTextField';
import AppSelectField from '../Fields/AppSelectField';

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
                        /* field type may be textfield or selectfield to select the needful type of input */
                        <Grid item xs={12} sm={6} key={field.name}>
                            {field.type === 'textfield'? <AppTextField field={field} formik={formik} /> : null}
                            {field.type === 'selectfield'? <AppSelectField field={field} formik={formik} /> : null}
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