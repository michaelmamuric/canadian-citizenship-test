import * as actionTypes from '../actions/actions';

const initialState = {
    answer: '',
    answerSelected: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ANSWER: {
            return {
                ...state,
                answer: action.answer
            }
        }
        case actionTypes.SET_ANSWER_SELECTED: {
            return {
                ...state,
                answerSelected: action.answerSelected
            }
        }
        case actionTypes.RESET_ANSWERS: {
            return {
                answer: '',
                answerSelected: false
            }
        }
        default:
            return state;
    }
}

export default reducer;