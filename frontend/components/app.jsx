import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './home/home_container';

const App = () => (
  <div>
    <Route path="/" component={HomeContainer} />
  </div>
);

export default App;
