import { connect } from 'react-redux';
import Choices from './Choices/Choices';

const Quiz = (props) => {
    // Destructure from props for easier referencing
    const { questions, currentQuestion, score } = props;

    return (
        <>
            <div>
                { questions[currentQuestion].question }
            </div>
            <Choices 
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