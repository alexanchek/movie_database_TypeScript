import {AuthAction, AuthState, SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, SET_SUCCESS, NEED_VERIFICATION} from '../../types/Redux/authTypes';

const initialState: AuthState = {
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    needVerification: false,
    success: ''
}

const authReducer = (state=initialState, action: AuthAction): AuthState => {
    switch(action.type) {
        case SET_ERROR:
            return {
                ...state, 
                error: action.payload}
        case SET_LOADING:
        return {
            ...state, 
            loading: action.payload
        }
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                authenticated: false,
                loading: false
            }
        case NEED_VERIFICATION:
            return {
                ...state,
                needVerification: true
            }
        case SET_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        default: {
            return state;
        }
    }
}

export default authReducer;