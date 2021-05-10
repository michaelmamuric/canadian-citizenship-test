import { connect } from 'react-redux';
import { Progress } from '@chakra-ui/react';
import Question from './Question/Question';

const Quiz = (props) => {
    // Destructure from props for easier referencing
    const { questions, currentQuestion, score } = props;

    return (
        <>
            <Progress value={((currentQuestion + 1)/20)*100} />
            <Question
                question={questions[currentQuestion].question}
                choiceList={questions[currentQuestion].choices} 
                correctAnswer={questions[currentQuestion].correctAnswer} 
            />
            <div>Score: {score}</div>    
        </>
    )
}

// Map Redux State
const mapStateToProps = (state) => {
    return {
        currentQuestion: state.quiz.currentQuestion,
        questions: state.quiz.questions,
        score: state.quiz.score
    }
}

export default connect(mapStateToProps, null)(Quiz);