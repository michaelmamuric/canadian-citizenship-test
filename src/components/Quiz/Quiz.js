import { RadioGroup, Radio } from '@chakra-ui/radio';
import { Stack, Button } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { useState } from 'react';

const Quiz = (props) => {
    // Destructure from props for easier referencing
    const { questions } = props;

    // States
    const [answerSelected, setAnswerSelected] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('');

    // Handler when a choice is selected
    const answerSelectedHandler = () => {
        setAnswerSelected(true);
        
        if(answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    }

    // Handler when the Next button is clicked
    const nextButtonHandler = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerSelected(false);
        setAnswer('');
    }

    return (
        <>
            <div>
                { questions[currentQuestionIndex].question }
            </div>
                <RadioGroup onChange={answerSelectedHandler}>
                    <Stack>
                    {
                        questions[currentQuestionIndex].choices.map((choice, index) => {
                            return (
                                <Radio 
                                    key={index} 
                                    value={choice}
                                    onClick={() => setAnswer(choice)}
                                    isDisabled={answerSelected}
                                    isFocusable={answerSelected}
                                >
                                    <span onClick={() => setAnswer(choice)}>{choice}</span>
                                </Radio>
                            )
                        })
                    }
                    </Stack>
                </RadioGroup>
                <Button onClick={nextButtonHandler} isDisabled={!answerSelected}>Next</Button>
                <div>Score: {score}</div>
        </>
    )
}

// Map Redux State
const mapStateToProps = (state) => {
    return {
        currentQuestion: state.quiz.currentQuestion,
        questions: state.quiz.questions
    }
}

export default connect(mapStateToProps, null)(Quiz);