import { collection, setDoc,  doc, query, where, getDocs} from "firebase/firestore";
import { RootState } from "..";
import {ThunkAction} from 'redux-thunk';
import { DataBook, DataBookAction, SET_BOOK_LOADING } from "../../types/Redux/dataBookTypes";
import { db } from "../../services/firebase/config";
import { BooksFormData } from '../../types/Components/Forms/BooksFormDataTypes'
import { GET_BOOKS } from "../../types/Redux/dataBooksTypes";
import { sortData } from "../../utils/sortData";

export const addBook =(data: DataBook): ThunkAction<void, RootState, null, DataBookAction> => {
    return async dispatch => {
        try {

            const documentRef = await doc(collection(db, "books"));
            const documentId = documentRef.id;
            const docToBase = {...data, uuid: documentId};
            await setDoc(documentRef, docToBase);
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const getbooks = (data: BooksFormData): ThunkAction<void, RootState, null, DataBookAction> => {
    return async dispatch => {
        const {author, year, genre } = data;

        try {
            let finalArray: any = [];
            dispatch(setBookLoading(true));

            let query1: any = collection(db, 'books');

            if (year) { query1 = query(query1, where('year', '==', year))}
            if (genre) { query1 = query(query1, where('genre', '==', genre))}
            if (author) {query1 = query(query1, where('author', '==', author))}

            const dataFromSite = await getDocs(query1);

            dataFromSite.forEach(async (doc: { data: () => any; }) => {
                const data = doc.data();
                finalArray.push(data);
            })

            // sort books by a book name
            finalArray = sortData(finalArray, 'bookName');

            dispatch({
                    type: GET_BOOKS,
                    payload: finalArray
                })
                
            dispatch(setBookLoading(false));
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const setBookLoading = (value: boolean): ThunkAction<void, RootState, null, DataBookAction> => {
    return async dispatch => {
        dispatch({
            type: SET_BOOK_LOADING,
            payload: value
        })
    }
}
