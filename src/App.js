import { connect } from 'react-redux';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import LandingPage from './components/LandingPage/LandingPage';
import Quiz from './components/Quiz/Quiz';

const App = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        {
          !props.isQuizStarted ? <LandingPage /> : <Quiz />
        }
      </Container>
    </ChakraProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isQuizStarted: state.quiz.isQuizStarted
  }
}

export default connect(mapStateToProps,null)(App);
