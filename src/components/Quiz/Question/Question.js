import { connect } from 'react-redux';
import { useMemo } from 'react';
import { Button } from '@chakra-ui/react';
import arrayShuffle from 'array-shuffle';
import { motion } from 'framer-motion';
import Choices from '../Choices/Choices';
import * as actions from '../../../redux-store/actions/index';

const Question = (props) => {

    // Destructure from props
    const { question, correctAnswer, setCurrentQuestionIndex, currentQuestion, choiceList, setQuizStatus, setAnswer, setAnswerSelected, answerSelected } = props;

    // Create a memoized version of the choices to avoid reshuffling of choices
    // when an answer is picked
    const memoizedChoices = useMemo(() => arrayShuffle(choiceList), [choiceList]);

    // Handler when the Next button is clicked
    const nextButtonHandler = () => {
        // Quiz is still in progress
        if(currentQuestion < 19) {
            setCurrentQuestionIndex(currentQuestion + 1);
            setAnswer('');
            setAnswerSelected(false);
        }
        // All questions have been asked
        else {
            setQuizStatus(3);
        }
    }

    return (
        <>
            <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1}}
            >
                {question}
            </motion.h1>
            {
                /* If there are only two choices, it could be a True or False type of question
                If such is the case, don't shuffle the choiceList */
            }
            <Choices 
                choiceList={choiceList.length > 2 ? memoizedChoices : choiceList} 
                correctAnswer={correctAnswer} 
            />
            <Button onClick={nextButtonHandler} isDisabled={!answerSelected}>
                { currentQuestion < 19 ? 'Next' : 'Finish' }
            </Button>
        </>
    )
}

// Map Redux State
const mapStateToProps = (state) => {
    return {
        currentQuestion: state.quiz.currentQuestion,
        score: state.quiz.score,
        answer: state.inProgress.answer,
        answerSelected: state.inProgress.answerSelected
    }
}

// Map Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        setScore: (score) => dispatch(actions.setScore(score)),
        setCurrentQuestionIndex: (index) => dispatch(actions.setQuestionIndex(index)),
        setQuizStatus: (status) => dispatch(actions.setQuizStatus(status)),
        setAnswer: (answer) => dispatch(actions.setAnswer(answer)),
        setAnswerSelected: (answerSelected) => dispatch(actions.setAnswerSelected(answerSelected))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);