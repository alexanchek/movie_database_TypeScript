import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { ERROR_REQUIRED, ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../../services/errors/errorMessages';
import { formFields } from './BooksAddFormConfig';
import AppTextField from '../Fields/AppTextField';
import { addBook } from '../../../store/actions/dataBookActions';

const validationSchema = yup.object({
    bookName: yup.string().required(ERROR_REQUIRED),
    desc: yup.string().min(10, "Напишите поподробнее, пожалуйста").required(ERROR_REQUIRED),
    genre: yup.string().matches(/^[а-яА-ЯA-Za-z]+$/iu, ERROR_ONLY_LETTERS).required(ERROR_REQUIRED),
  })

const BooksAddForm = () => {
    const dispatch = useDispatch();
    const uuid = '';
    const img = '';
    const createdAt = '';

    const formik = useFormik({
        initialValues: {
          bookName: "",
          genre: "",
          author: "",
          desc: ""
        },
        onSubmit: ({bookName, desc, genre, author}, { resetForm }) => {
            dispatch(addBook({uuid, bookName, desc, author, img, createdAt, genre}));
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

export default BooksAddForm;