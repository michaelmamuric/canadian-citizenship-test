import * as actions from './actions';
import axios from 'axios';

export const setLoading = (loadingStatus) => {
    return {
        type: actions.SET_LOADING,
        loadingStatus
    }
}

export const setQuizStarted = (quizStatus) => {
    return {
        type: actions.SET_QUIZ_STARTED,
        quizStatus
    }
}

export const initializeQuestions = (questions) => {
    return {
        type: actions.INIT_QUESTIONS,
        questions
    }
}

export const setQuestionIndex = (index) => {
    return {
        type: actions.SET_QUESTION_INDEX,
        index
    }
}

export const setScore = (score) => {
    return {
        type: actions.SET_SCORE,
        score
    }
}

export const setError = (error) => {
    return {
        type: actions.SET_ERROR,
        error 
    }
}

export const fetchQuestions = (province) => {
    return async(dispatch) => {
        try {
            // Set loading to true
            dispatch(setLoading(true));

            // Send request to backend
            const response = await axios.get(`https://can-citizenship-api.herokuapp.com/questions?province=${province}`);

            // Set loading to false
            dispatch(setLoading(false));

            // Initialize Questions
            dispatch(initializeQuestions(response.data));

            // Set quiz started to true
            dispatch(setQuizStarted(true));
        }
        catch(error) {
            // Set loading to false
            dispatch(setLoading(false));

            console.log('Error', error);
            // Set error
            dispatch(setError(error.message));
        }
    }
}