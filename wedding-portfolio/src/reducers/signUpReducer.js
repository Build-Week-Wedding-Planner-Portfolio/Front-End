import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/index'

const initialState = {
    user: [],
    isRegistering: false,
    error:''
}

export const signUpReducer =(state=initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                ...state,
                isRegistering: true,
                error: null
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                user: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            }
            default:
                return state;
    }
}