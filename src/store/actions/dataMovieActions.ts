import {ThunkAction} from 'redux-thunk';
import { DataMovieAction, DataMovie, GET_MOVIES, SET_MOVIE_LOADING } from '../../types/Redux/dataMovieTypes';
import { RootState } from '../index';
import { MoviesFormData } from '../../types/Components/Forms/MoviesFormDataTypes'
import firebase from '../../services/firebase/config';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const addmovie =(data: DataMovie): ThunkAction<void, RootState, null, DataMovieAction> => {
    return async dispatch => {
        try {
            const document = firebase.firestore().collection("movies").doc();
            const documentId = document.id;
            await document.set({
                ...data,
                uuid: documentId});
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
            let query: any = firebase.firestore().collection('movies');
            
            if (year) {query = query.where('year', '==', year);}
            if (genre) { query = query.where('genre', '==', genre);}
            if (country) { query = query.where('country', '==', country);}

            const dataFromSite = await query.get();

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
