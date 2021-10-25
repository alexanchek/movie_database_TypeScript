import { BookState, DataBookAction } from "../../types/Redux/dataBookTypes"

const initialState: BookState = {
    book: null,
    loading: false,
    error: ''
}

const DataBookReducer = (state = initialState, action: DataBookAction): BookState => {
    switch(action.type) {
        default:
            return state;
    }
}

export default DataBookReducer;