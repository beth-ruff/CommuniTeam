//combine reducers here
import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
    categoriesReducer,
    eventsReducer
})

export default rootReducer;