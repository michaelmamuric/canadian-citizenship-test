import { connect } from 'react-redux';
import { Progress } from '@chakra-ui/react';
import Question from './Question/Question';
import classes from './Quiz.module.css';

const Quiz = (props) => {
    // Destructure from props for easier referencing
    const { questions, currentQuestion, score, numOfQuestions, questionNumber } = props;

    return (
        <>
            <Progress 
                value={(questionNumber / numOfQuestions) *100} 
                colorScheme="red"
                size="lg"
            />
            <h1 className={classes.QuestionNumber}>
                Question {questionNumber} of {numOfQuestions}
            </h1>
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
        questionNumber: state.quiz.currentQuestion + 1, // index + 1
        questions: state.quiz.questions,
        score: state.quiz.score,
        numOfQuestions: state.quiz.questions.length     // length of questions array
    }
}

export default connect(mapStateToProps, null)(Quiz);