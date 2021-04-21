import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import Provinces from './components/Provinces/Provinces';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        Welcome! Please select your province to begin.
        <Provinces />
      </Container>
    </ChakraProvider>
  );
}

export default App;
