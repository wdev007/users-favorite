import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes />
    </>
  );
}

export default App;
