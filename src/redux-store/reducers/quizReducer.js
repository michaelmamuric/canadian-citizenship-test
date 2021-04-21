import * as actionTypes from '../actions/actions';

const initialState = {
    isLoading: false,
    isQuizStarted: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.loadingStatus
            }
        }
        case actionTypes.SET_QUIZ_STARTED: {
            return {
                ...state,
                isQuizStarted: action.quizStatus
            }
        }
        default:
            return state
    }
}

export default reducer;