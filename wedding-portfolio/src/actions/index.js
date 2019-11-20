import axios from 'axios'

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const LOG_USER_START = "LOG_USER_START";
export const LOG_USER_SUCCESS = "LOG_USER_SUCCESS";
export const LOG_USER_FAILURE = "LOG_USER_FAILURE";

export const register = user => {
    console.log(user)
    return dispatch => {
        dispatch({ type: GET_USER_START});
        return axios
        .post('https://weddingplannerlambda.herokuapp.com/api/auth/register', user)
        .then(res=> {
            // localStorage.setItem('token', res.data.token)
            return dispatch(
                {type: GET_USER_SUCCESS, payload: res.data },
                console.log('hi from res', res)
            );
        })
        .catch(error => {
            dispatch({ type: GET_USER_FAILURE, payload: error});
        })
    }
};

export const login = user => {
    return dispatch => {
        dispatch({ type: LOG_USER_START});
        return axios
        .post('https://weddingplannerlambda.herokuapp.com/api/auth/login', user)
        .then(res=> {
            localStorage.setItem('token', res.data.token)
            console.log('login - see actions', res)
            return dispatch(
                {type: LOG_USER_SUCCESS, payload: res.data },
            );
        })
        .catch(error => {
            console.log(error.message)
            dispatch({ type: LOG_USER_FAILURE, payload: error});
        })
    }
};

