import * as actions from './actions';

export const setAnswer = (answer) => {
    return {
        type: actions.SET_ANSWER,
        answer
    }
}

export const setAnswerSelected = (answerSelected) => {
    return {
        type: actions.SET_ANSWER_SELECTED,
        answerSelected
    }
}

export const resetAnswers = () => {
    return {
        type: actions.RESET_ANSWERS
    }
}