import { MoviesState } from "../../types/Redux/dataMoviesTypes";
import { DataMovieAction, GET_MOVIES, SET_MOVIE_LOADING } from "../../types/Redux/dataMovieTypes";

const initialMoviesState: MoviesState = {
    data: null,
    error: '',
    movieLoading: false
}

const DataMoviesReducer =  (state = initialMoviesState, action: DataMovieAction): MoviesState => {
    switch(action.type) {
        case GET_MOVIES:
            return {
                ...state,
                data: action.payload
            }
        case SET_MOVIE_LOADING:
            return {
                ...state,
                movieLoading: action.payload
            }
        default:
            return state;
    }
}

export default DataMoviesReducer;