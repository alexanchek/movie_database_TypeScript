import React from 'react';
import { Box, Button, Grid } from '@mui/material';

import { useDispatch } from 'react-redux';
import { getbooks } from '../../../store/actions/dataBookActions';

import { useFormik } from 'formik';

import AppTextField from '../Fields/AppTextField';
import { formFields } from './BooksFormConfig';
import { validationSchema } from '../MoviesForm/MoviesFormConfig';

const BooksForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            year: "",
            country: "",
            genre: ""
        },
        onSubmit: (values) => {
            const data = {year: values.year, genre: values.genre, country: values.country};
            dispatch(getbooks(data));
        }, 
        validationSchema
    })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>      
                {formFields.map((field) => {
                    return (
                        <Grid item xs={12} sm={6} key={field.name}>
                            <AppTextField onBlur={true} field={field} formik={formik} required={false} />
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

export default BooksForm;