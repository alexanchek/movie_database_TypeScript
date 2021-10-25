export const SET_BOOK_LOADING = "SET_BOOK_LOADING";
export const GET_BOOKS = "GET_BOOKS";
export const ADD_BOOK = "ADD_BOOK";

export interface DataBook {
    uuid: string;
    bookName: string;
    img: string;
    desc: string;
    author: string;
    createdAt: string;
    genre: string;
}

export interface BookState {
    book: DataBook | null;
    loading: boolean;
    error: string;
}

// Actions
interface AddBookAction {
    type: typeof ADD_BOOK;
    payload: DataBook;
}

interface GetBooksAction {
    type: typeof GET_BOOKS;
    payload: DataBook[];
}

export type DataBookAction = AddBookAction 
| GetBooksAction;