import { DataMovie } from "./dataMovieTypes";

export interface MoviesState {
    data: DataMovie[] | null,
    length: number | null,
    error: string,
    movieLoading: boolean
}