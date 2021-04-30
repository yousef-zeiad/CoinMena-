/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigation';


const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigation colorScheme="light" />
    </>
  );
};

export default App;
