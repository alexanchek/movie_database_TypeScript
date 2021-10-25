export const SET_MOVIE_LOADING = "SET_MOVIE_LOADING";
export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";

export interface DataMovie {
    uuid: string;
    movieName: string;
    img: string;
    desc: string;
    country: string;
    year: string;
    genre: string;
}

export interface MovieState {
    movie: DataMovie | null;
    loading: boolean;
    error: string;
}

// Actions
interface AddMovieAction {
    type: typeof ADD_MOVIE;
    payload: DataMovie;
}

interface GetMoviesAction {
    type: typeof GET_MOVIES;
    payload: DataMovie[];
}

interface SetMovieLoadingAction {
    type: typeof SET_MOVIE_LOADING;
    payload: boolean;
}

export type DataMovieAction = AddMovieAction
| GetMoviesAction
| SetMovieLoadingAction;