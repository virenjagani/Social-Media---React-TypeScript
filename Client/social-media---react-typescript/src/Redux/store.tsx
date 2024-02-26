import { combineReducers } from 'redux';
import logger from 'redux-logger'

const middleware = [logger];

const rootReducer = combineReducers({
    auth: authReducer
})