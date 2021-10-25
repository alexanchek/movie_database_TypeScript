import { collection, setDoc,  doc, query, where, getDocs} from "firebase/firestore";
import { db } from "../../services/firebase/config";
import {ThunkAction} from 'redux-thunk';
import { DataMovieAction, DataMovie, GET_MOVIES, SET_MOVIE_LOADING } from '../../types/Redux/dataMovieTypes';
import { RootState } from '../index';
import { MoviesFormData } from '../../types/Components/Forms/MoviesFormDataTypes'
import { enableIndexedDbPersistence } from "firebase/firestore"; 

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

export const addmovie =(data: DataMovie): ThunkAction<void, RootState, null, DataMovieAction> => {
    return async dispatch => {
        try {
            const documentRef = await doc(collection(db, "movies_temp"));
            const documentId = documentRef.id;
            console.log(documentId);
            const docToBase = {...data, uuid: documentId};
            await setDoc(documentRef, docToBase);
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const getmovies = (data: MoviesFormData): ThunkAction<void, RootState, null, DataMovieAction> => {
    return async dispatch => {
        const {year, genre, country} = data;
        try {
            
            const finalArray: any = [];
            dispatch(setMovieLoading(true));
            let query1: any = collection(db, 'movies');

            if (year) { query1 = query(query1, where('year', '==', year))}
            if (genre) { query1 = query(query1, where('genre', '==', genre))}
            if (country) {query1 = query(query1, where('country', '==', country))}

            const dataFromSite = await getDocs(query1);

            dataFromSite.forEach(async (doc: { data: () => any; }) => {
                const data = doc.data();
                finalArray.push(data);
            })
            dispatch({
                    type: GET_MOVIES,
                    payload: finalArray
                })
            dispatch(setMovieLoading(false));

        } catch (e: any) {
            console.log(e.message);
        }
    }
 }

export const setMovieLoading = (value: boolean):ThunkAction<void, RootState, null, DataMovieAction> => {
    return async dispatch => {
        dispatch({
            type: SET_MOVIE_LOADING,
            payload: value
          });
    }
}