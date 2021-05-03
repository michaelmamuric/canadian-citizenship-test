import { Radio, RadioGroup } from '@chakra-ui/radio';
import { connect } from 'react-redux';
import { useState, useMemo } from 'react';
import { Button } from '@chakra-ui/react';
import arrayShuffle from 'array-shuffle';
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import * as actions from '../../../redux-store/actions/index';

const Choices = (props) => {

    // Destructure from props
    const { question, score, setScore, correctAnswer, setCurrentQuestionIndex, currentQuestion, choiceList, setQuizStatus } = props;

    // States
    const [answer, setAnswer] = useState('');
    const [answerSelected, setAnswerSelected] = useState(false);

    // Create a memoized version of the choices to avoid reshuffling of choices
    // when an answer is picked
    const memoizedChoices = useMemo(() => arrayShuffle(choiceList), [choiceList]);

    // Handler when a choice is selected
    const answerSelectedHandler = () => { 
        setAnswerSelected(true);

        if(answer === correctAnswer) {
            setScore(score + 1);
        }
    }

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
        <RadioGroup onChange={answerSelectedHandler}>
            <ul style={{listStyleType: 'none'}}>
            {
                memoizedChoices.map((choice, index) => {
                    return (
                        <motion.li
                            key={index}
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={ { duration: 2 } }
                            onClick={() => setAnswer(choice)}                          
                        >
                            <Radio 
                                value={choice}
                                onClick={() => setAnswer(choice)}
                                isChecked={answerSelected}
                                isReadOnly={answerSelected}
                            >
                            <motion.span whileHover={{ scale: 1.05}}>
                                {choice}
                            </motion.span>
                            &nbsp;
                            {   
                                answerSelected &&
                                ( correctAnswer === choice ? <CheckCircleIcon /> : <SmallCloseIcon />)
                            }
                            </Radio>
                        </motion.li>
                    )
                })
            }
        </ul>
        </RadioGroup>
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
        score: state.quiz.score
    }
}

// Map Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        setScore: (score) => dispatch(actions.setScore(score)),
        setCurrentQuestionIndex: (index) => dispatch(actions.setQuestionIndex(index)),
        setQuizStatus: (status) => dispatch(actions.setQuizStatus(status)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices);