import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import inProgressReducer from './inProgressReducer';

const mainReducer = combineReducers({
    quiz: quizReducer,
    inProgress: inProgressReducer
});

export default mainReducer;