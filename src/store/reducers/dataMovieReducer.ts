import { ADD_MOVIE, DataMovieAction,  MovieState} from "../../types/Redux/dataMovieTypes"

const initialState: MovieState = {
    movie: null,
    loading: false,
    error: ''
}

const DataMovieReducer =  (state = initialState, action: DataMovieAction): MovieState => {
    switch(action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}

export default DataMovieReducer;