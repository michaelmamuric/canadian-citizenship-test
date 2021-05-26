import { connect } from 'react-redux';
import { ChakraProvider, theme, SimpleGrid, Box, Container } from '@chakra-ui/react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Quiz from './components/Quiz/Quiz';
import QuizDone from './components/QuizDone/QuizDone';

const App = (props) => {
  // Component to be rendered
  let component;

  switch(props.status) {
    case 0: component = <LandingPage />; break;
    case 1: component = <Quiz />; break;
    default: component = <QuizDone />;
  }

  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid columns={{sm: 1}} spacing={2}>
        <Box>
          <Header />
        </Box>
        <Box marginLeft="5%" marginRight="5%" paddingTop={2}>
          {component}
        </Box>
      </SimpleGrid>
    </ChakraProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.quiz.status
  }
}

export default connect(mapStateToProps,null)(App);
