import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, NativeSelect, TextField } from '@mui/material';

import { getmovies } from '../../../store/actions/dataMovieActions';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { formFields, selectGenreFields, validationSchema, ILabel } from './MoviesFormConfig'

const MoviesForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            year: "",
            country: "",
            genre: ""
        },
        onSubmit: (values) => {
            console.log(values);
            const data = {year: values.year, genre: values.genre, country: values.country};
            console.log(data);
            // dispatch(getmovies(data));
        }, 
        validationSchema
    })

    const textField = (field: {name: string, label: string}) => {
        return (
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
        );
    }

    const selectField = (field: {name: string, label: string, subfields?: any[]}) => {
                return (
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Age
                        </InputLabel>
                        <NativeSelect
                            defaultValue={'Фантастика'}
                            inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                            }}
                        >
                            {field.subfields?.map((subfield) => {
                                    return (
                                        <option key={subfield} value={subfield}>{subfield}</option>
                                    )
                            })}
                        </NativeSelect>
                    </FormControl>
                )
    }

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
                {formFields.map((field) => {
                    return (
                        <Grid item xs={12} sm={6} key={field.name}>
                            {field.type === 'textfield'? textField(field) : null}
                            {field.type === 'selectfield'? selectField(field) : null}
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

// switch(field.type) {
//     case 'textfield':
//         return (
//             <Grid item xs={12} sm={6} key={field.name}>
//                 <TextField
//                 name={field.name}
//                 fullWidth
//                 id={field.name}
//                 label={field.label}
//                 autoFocus
//                 value={formik.values[field.name as keyof ILabel]}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched[field.name as keyof ILabel] && Boolean(formik.errors[field.name as keyof ILabel])}
//                 helperText={formik.touched[field.name as keyof ILabel] && formik.errors[field.name as keyof ILabel]} />
//             </Grid>
//         );
//     case 'selectfield':
//         return (
//             <Grid item xs={12} sm={6} key={field.name}>
//                 <FormControl fullWidth>
//                     <InputLabel variant="standard" htmlFor="uncontrolled-native">
//                         Age
//                     </InputLabel>
//                     <NativeSelect
//                         defaultValue={30}
//                         inputProps={{
//                         name: 'age',
//                         id: 'uncontrolled-native',
//                         }}
//                     >
//                         {selectFields.map((field) => {
//                                 return (
//                                     <option value={field}>{field}</option>
//                                 )
//                         })}
//                     </NativeSelect>
//                 </FormControl>
//             </Grid>
//         )
// }