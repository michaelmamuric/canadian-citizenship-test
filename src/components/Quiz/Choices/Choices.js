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
    const { question, score, setScore, correctAnswer, setCurrentQuestionIndex, currentQuestion, choiceList } = props;

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
        setCurrentQuestionIndex(currentQuestion + 1);
        setAnswer('');
        setAnswerSelected(false);
    }

    return (
        <>
        <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1}}
        >
            {question}
        </motion.div>
        <RadioGroup onChange={answerSelectedHandler}>
            {
                memoizedChoices.map((choice, index) => {
                    return (
                        <motion.div
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={ { duration: 2 } }                          
                        >
                            <Radio 
                                key={index} 
                                value={choice}
                                onClick={() => setAnswer(choice)}
                                isReadOnly={answerSelected}
                            >
                            <motion.div 
                                onClick={() => setAnswer(choice)}
                                style={{display: 'inline-block'}}
                                whileHover={{ scale: 1.05 }}                                  
                            >
                                {choice}
                            </motion.div>
                            &nbsp;
                            {   
                                answerSelected &&
                                ( correctAnswer === choice ? <CheckCircleIcon /> : <SmallCloseIcon />)
                            }
                            </Radio>
                        </motion.div>
                    )
                })
            }
        </RadioGroup>
        <Button onClick={nextButtonHandler} isDisabled={!answerSelected}>Next</Button>
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
        setCurrentQuestionIndex: (index) => dispatch(actions.setQuestionIndex(index)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices);