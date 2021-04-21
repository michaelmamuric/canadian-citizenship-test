import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

// Only one reducer for this app, but can be expanded if necessary
const mainReducer = combineReducers({
    quiz: quizReducer
});

export default mainReducer;