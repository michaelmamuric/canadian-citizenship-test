import * as actionTypes from '../actions/actions';

const initialState = {
    isLoading: false,
    status: 0, // 0 - quiz not started, 1 - quiz in progress, 2 - quiz done
    error: null,
    currentQuestion: 0,
    score: 0,
    questions: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.loadingStatus
            }
        }
        case actionTypes.SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case actionTypes.SET_QUIZ_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case actionTypes.INIT_QUESTIONS: {
            return {
                ...state,
                questions: state.questions.concat(action.questions)
            }
        }
        case actionTypes.SET_QUESTION_INDEX: {
            return {
                ...state,
                currentQuestion: action.index
            }
        }
        case actionTypes.SET_SCORE: {
            return {
                ...state,
                score: action.score
            }
        }
        case actionTypes.RESET_QUIZ: {
            return {
                isLoading: false,
                status: 0,
                error: null,
                currentQuestion: 0,
                score: 0,
                questions: []
            }
        }
        default:
            return state;
    }
}

export default reducer;