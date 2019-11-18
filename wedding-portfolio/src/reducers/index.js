import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer'
import { signUpReducer } from './signUpReducer'
import { cardReducer } from "./cardReducer";

export default combineReducers({
    loginReducer,
    signUpReducer,
    cardReducer

})