import * as actions from './actions';
import axios from 'axios';

export const setLoading = (loadingStatus) => {
    return {
        type: actions.SET_LOADING,
        loadingStatus
    }
}

export const setQuizStatus = (status) => {
    return {
        type: actions.SET_QUIZ_STATUS,
        status
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

export const resetQuiz = () => {
    return {
        type: actions.RESET_QUIZ
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

            // Set quiz status to 1 (quiz started)
            dispatch(setQuizStatus(1));
        }
        catch(error) {
            // Set loading to false
            dispatch(setLoading(false));

            // Set error
            dispatch(setError(error.message));
        }
    }
}