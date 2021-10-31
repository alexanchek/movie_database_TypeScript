import { DataBook } from "./dataBookTypes";

export const GET_BOOKS = "GET_BOOKS";
export const ADD_BOOK = "ADD_BOOK";

export interface BooksState {
    data: DataBook[] | null,
    error: string,
    bookLoading: boolean
}