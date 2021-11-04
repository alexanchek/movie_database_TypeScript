import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react';
import { IFormFields } from '../MoviesForm/MoviesFormConfig';

interface IAppSelectField {
    field: IFormFields,
    formik: any
}

const AppSelectField: React.FC<IAppSelectField> = ({field, formik}) => {
    const handleChangeSelect = (field: IFormFields) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        formik.setFieldValue(field.name, e.target.value);
    }


    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {field.label}
            </InputLabel>
            <NativeSelect
                onChange={handleChangeSelect(field)}
                defaultValue={formik.initialValues.genre}
                inputProps={{
                name: 'genre',
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

export default AppSelectField;