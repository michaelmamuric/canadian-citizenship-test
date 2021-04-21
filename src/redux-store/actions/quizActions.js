import * as actions from './actions';

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