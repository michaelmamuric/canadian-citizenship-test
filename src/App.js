import { connect } from 'react-redux';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import Provinces from './components/Provinces/Provinces';
import Quiz from './components/Quiz/Quiz';

const App = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        {
          props.isQuizStarted && !props.isLoading ? <Quiz /> : <Provinces />
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
