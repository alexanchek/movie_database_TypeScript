import {ThunkAction} from 'redux-thunk';
import {SignUpData, AuthAction, User, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, SignInData} from '../../types/Redux/authTypes';
import {RootState} from '../index';
import firebase from '../../services/firebase/config';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


export const signup = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
            try {
                const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
                if(res.user) {
                    const userData: User = {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        id: res.user.uid,
                        createdAt: (new Date()).toString()
                    };
                    await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
                    dispatch({type: SET_USER, payload: userData});
                }
            } catch(err: any) {
                console.log(err);
                onError();
                dispatch({
                    type: SET_ERROR,
                    payload: err.message
                })
            }
        } 
    }

    export const getTheUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
        return async dispatch => {
            try {
                const user = await firebase.firestore().collection('users').doc(id).get();
                if (user.exists) {
                    const userData = user.data() as User;
                    dispatch({
                        type:SET_USER,
                        payload: userData
                    });
                }
            } catch(error: any) {
                console.log(error);
            }
        }
    }

    export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
        return async dispatch => {
          try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
          } catch (err: any) {
            console.log(err);
            onError();
            dispatch(setError(err.message));
          }
        }
      }

      export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
        return async dispatch => {
          try {
            // dispatch(setLoading(true));
            await firebase.auth().signOut();
            dispatch({
              type: SIGN_OUT
            });
          } catch (err) {
            console.log(err);
            // dispatch(setLoading(false));
          }
        }
      }

      export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
        return dispatch => {
          dispatch({
            type: SET_ERROR,
            payload: msg
          });
        }
      }

     export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
       return async dispatch => {
          dispatch({
            type: SET_LOADING,
            payload: value
          });
       }
     }
