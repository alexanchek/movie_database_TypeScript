import * as yup from 'yup';
import { ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../../services/errors/errorMessages';
import { selectGenreFields } from '../../../utils/ENVs';

export const validationSchema = yup.object({
    year: yup.string().min(4, 'Это год, только 4 цифры :)').max(4, 'Это год, только 4 цифры :)').matches(/^[0-9]+$/iu, ERROR_ONLY_NUMBERS),
    genre: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS),
    country: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS)
});

export const formFields: IFormFields[] =  [
    {name: 'genre', label: 'Введите жанр', type: 'fieldselect', subfieldsName: 'Жанр', subfields: selectGenreFields},
    {name: 'year', label: 'Введите год', type: 'fieldtext'},
    {name: 'country', label: 'Введите страну', type: 'fieldtext'}
];

export interface IFormFields {
    name: string,
    label: string,
    type: 'fieldselect' | 'fieldtext',
    subfieldsName?: string
    subfields?: any[]
}