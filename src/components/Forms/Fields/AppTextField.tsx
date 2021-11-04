import * as React from 'react';
import { TextField } from '@mui/material';
import { ILabel } from '../../../types/Components/Forms/LabelInputTypes';

interface IAppTextField {
    field: {name: string, label: string},
    formik: any
} 

const AppTextField: React.FC<IAppTextField> = ({field, formik}) => {
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

export default AppTextField;