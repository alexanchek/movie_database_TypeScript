import { BooksState } from '../../types/Redux/dataBooksTypes'
import { DataBookAction, GET_BOOKS } from '../../types/Redux/dataBookTypes'

const InitialBooksState: BooksState = {
    data: null,
    error: '',
    bookLoading: false
}

export const DataBooksReducer = (state= InitialBooksState, action: DataBookAction): BooksState => {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

