import { Radio, RadioGroup } from '@chakra-ui/radio';
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import * as actions from '../../../redux-store/actions/index';
import { connect } from 'react-redux';
import classes from '../Quiz.module.css';

const Choices = (props) => {

    // Destructure from props for easier referencing
    const { answerSelected, answer, correctAnswer, setAnswer, setAnswerSelected, setScore, choiceList, score } = props;

    // Handler when a choice is selected
    const answerSelectedHandler = (answer) => {
        setAnswer(answer);
        setAnswerSelected(true);

        if(answer === correctAnswer) {
            setScore(score + 1);
        }
    }

    return (
        <RadioGroup onChange={answerSelectedHandler} value={answer}>
            <ul className={classes.List}>
            {
                choiceList.map((choice, index) => {
                    return (
                        <motion.li
                            key={index}
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            transition={ { duration: 2 } }                         
                        >
                            <Radio 
                                colorScheme="red"
                                value={choice}
                                isChecked={choice === answer}
                                isReadOnly={answerSelected}
                                size="lg"
                            >
                            <span className={classes.Choice}>
                                {choice}
                            </span>
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
    )
}

// Map Redux State
const mapStateToProps = (state) => {
    return {
        score: state.quiz.score,
        answer: state.inProgress.answer,
        answerSelected: state.inProgress.answerSelected
    }
}

// Map Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        setAnswer: (answer) => dispatch(actions.setAnswer(answer)),
        setAnswerSelected: (answerSelected) => dispatch(actions.setAnswerSelected(answerSelected)),
        setScore: (score) => dispatch(actions.setScore(score))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices);