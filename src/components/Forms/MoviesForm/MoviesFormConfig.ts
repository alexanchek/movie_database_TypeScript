import * as yup from 'yup';
import { ERROR_ONLY_LETTERS, ERROR_ONLY_NUMBERS } from '../../../services/errors/errorMessages';

export const validationSchema = yup.object({
    year: yup.string().min(4, 'Это год, только 4 цифры :)').max(4, 'Это год, только 4 цифры :)').matches(/^[0-9]+$/iu, ERROR_ONLY_NUMBERS),
    genre: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS),
    country: yup.string().max(15, 'Слишком много символов').matches(/^[а-яА-Я]+$/iu, ERROR_ONLY_LETTERS)
});

export const selectGenreFields = [
    'Фантастика', 'Триллер', 'Комедия', 'Сериал', 'Мультфильм', 'Нечто другое', 'Драма', 'Детектив'
];


export const formFields: IFormFields[] =  [
    {name: 'year', label: 'Введите год', type: 'textfield'},
    {name: 'genre', label: 'Введите жанр', type: 'selectfield', subfieldsName: 'Жанр', subfields: selectGenreFields},
    {name: 'country', label: 'Введите страну', type: 'textfield'}
];

export interface ILabel {
    year: string,
    genre: string,
    country: string
}

export interface IFormFields {
    name: string,
    label: string,
    type: string,
    subfieldsName?: string
    subfields?: any[]
}