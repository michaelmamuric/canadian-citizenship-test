import { Radio, RadioGroup } from '@chakra-ui/radio';
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import * as actions from '../../../redux-store/actions/index';
import { connect } from 'react-redux';

const Choices = (props) => {

    // Destructure from props for easier referencing
    const { answerSelected, answer, correctAnswer, setAnswer, setAnswerSelected, setScore, choiceList, score } = props;

    // Handler when a choice is selected
    const answerSelectedHandler = () => { 
        setAnswerSelected(true);

        if(answer === correctAnswer) {
            setScore(score + 1);
        }
    }

    return (
        <RadioGroup onChange={answerSelectedHandler}>
            <ul style={{listStyleType: 'none'}}>
            {
                choiceList.map((choice, index) => {
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
                                isChecked={answerSelected}
                                isReadOnly={answerSelected}
                            >
                            <motion.span whileHover={{ scale: 1.05}}>
                                {choice}
                            </motion.span>
                            </Radio>
                            {   
                                answerSelected &&
                                ( correctAnswer === choice ? <CheckCircleIcon /> : <SmallCloseIcon />)
                            }
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