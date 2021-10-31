import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import DataBookReducer from './reducers/dataBookReducer';
import { DataBooksReducer } from './reducers/DataBooksReducer';
import dataMovieReducer from './reducers/dataMovieReducer';
import DataMoviesReducer from './reducers/dataMoviesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    book: DataBookReducer,
    books: DataBooksReducer,
    movie: dataMovieReducer,
    movies: DataMoviesReducer
})

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>;
export default store;