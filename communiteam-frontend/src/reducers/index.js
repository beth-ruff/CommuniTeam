//combine reducers here
import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import eventsReducer from './eventsReducer';

const rootReducers = combineReducers({
    categoriesReducer,
    eventsReducer
})