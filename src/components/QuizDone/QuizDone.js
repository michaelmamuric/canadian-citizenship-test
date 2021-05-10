// Template only, to be expanded

import { Button } from '@chakra-ui/button';
import { connect } from 'react-redux';
import * as actions from '../../redux-store/actions/index';

const QuizDone = (props) => {
    
    const quizResetHandler = () => {
        props.resetQuiz();
        props.resetAnswers();
    }

    return (
        <div>
            Quiz is done
            <Button onClick={quizResetHandler}>
                Play Again
            </Button>
        </div>
    )
}


// Map Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        resetQuiz: () => dispatch(actions.resetQuiz()),
        resetAnswers: () => dispatch(actions.resetAnswers())
    }
} 

export default connect(null, mapDispatchToProps)(QuizDone);