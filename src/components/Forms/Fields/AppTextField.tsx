import * as React from 'react';
import { TextField } from '@mui/material';
import { ILabel } from '../../../types/Components/Forms/LabelInputTypes';

interface IAppTextField {
    field: {name: string, label: string, multi?: boolean},
    onBlur: boolean
    formik: any,
    required: boolean
} 

/**
 * AppTextField can be required, multiline (if the prop is here). 
 * 
 * It requires: field (with name & label fields), onBlur boolean to check on blur 
 * and formik as an checking data object. 
 * 
 * 
*/

const AppTextField: React.FC<IAppTextField> = ({field, required, onBlur, formik}) => {
    return (
            <TextField
            name={field.name}
            fullWidth
            required={required}
            multiline={field.multi ? true : false}
            rows={field.multi ? 7 : 1}
            id={field.name}
            label={field.label}
            autoFocus
            value={formik.values[field.name as keyof ILabel]}
            onChange={formik.handleChange}
            onBlur={onBlur ? formik.handleBlur : null}
            error={formik.touched[field.name as keyof ILabel] && Boolean(formik.errors[field.name as keyof ILabel])}
            helperText={formik.touched[field.name as keyof ILabel] && formik.errors[field.name as keyof ILabel]} />
    );
}

export default AppTextField;