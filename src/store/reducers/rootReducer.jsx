import userReducer from './userReducer'
import mailReducer from './mailReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    user: userReducer,
    mail: mailReducer
});

export default rootReducer;