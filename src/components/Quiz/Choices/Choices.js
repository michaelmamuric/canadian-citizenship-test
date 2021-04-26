import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Stack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useState, useMemo } from 'react';
import { Button } from '@chakra-ui/react';
import arrayShuffle from 'array-shuffle';
import * as actions from '../../../redux-store/actions/index';

const Choices = (props) => {

    // Destructure from props
    const { score, setScore, correctAnswer, setCurrentQuestionIndex, currentQuestion, choiceList } = props;

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
        <RadioGroup onChange={answerSelectedHandler}>
            <Stack>
            {
                memoizedChoices.map((choice, index) => {
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