import { collection, updateDoc, setDoc, deleteDoc, doc, getDoc, query, where, getDocs} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../../services/firebase/config";
import {ThunkAction} from 'redux-thunk';
import { DataMovieAction, DataMovie, GET_MOVIES, SET_MOVIE_LOADING } from '../../types/Redux/dataMovieTypes';
import { RootState } from '../index';
import { MoviesFormData } from '../../types/Components/Forms/MoviesFormDataTypes'
// import firebase from '../../services/firebase/config';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const addmovie =(data: DataMovie): ThunkAction<void, RootState, null, DataMovieAction> => {
    return async dispatch => {
        try {
            const documentRef = await doc(collection(db, "contacts"));
            const documentId = documentRef.id;
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
            
            // if (year) {query = query.where('year', '==', year);}
            // if (genre) { query = query.where('genre', '==', genre);}
            // if (country) { query = query.where('country', '==', country);}

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
            // where request to firebase
            // const dataFromSite = await ref.collection('movies').where('genre', '==', '1').get();
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
