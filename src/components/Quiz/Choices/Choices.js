import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Stack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import * as actions from '../../../redux-store/actions/index';

const Choices = (props) => {

    // Destructure from props
    const { score, setScore, correctAnswer, setCurrentQuestionIndex, currentQuestion } = props;

    // States
    const [answer, setAnswer] = useState('');
    const [answerSelected, setAnswerSelected] = useState(false);

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
        <RadioGroup onChange={answerSelectedHandler}>
            <Stack>
            {
                props.choiceList.map((choice, index) => {
                    return (
                        <Radio 
                            key={index} 
                            value={choice}
                            onClick={() => setAnswer(choice)}
                            isDisabled={answerSelected}
                            isFocusable={answerSelected}
                        >
                            <span onClick={() => setAnswer(choice)}>
                                {choice}
                            </span>
                        </Radio>
                    )
                })
            }
            </Stack>
        </RadioGroup>
        <Button onClick={nextButtonHandler}>Next</Button>
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