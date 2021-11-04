import { selectGenreFields } from "../../../utils/ENVs";
import { IFormFields } from "../MoviesForm/MoviesFormConfig";

export const formFields: IFormFields[] =  [
    {name: 'Автор', label: 'Введите страну', type: 'textfield'},
    {name: 'genre', label: 'Введите жанр', type: 'selectfield', subfieldsName: 'Жанр', subfields: selectGenreFields},
    {name: 'year', label: 'Введите год', type: 'textfield'},
];