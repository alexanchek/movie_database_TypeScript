import { DataMovie } from "./dataMovieTypes";

export interface MoviesState {
    data: DataMovie[] | null,
    error: string,
    movieLoading: boolean
}