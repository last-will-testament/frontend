import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './MainContainer';


const My404 = () => {
  return (
    <div>
      ...error...
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ MainContainer } />
      </Switch>
    </main>
  );
}

export default App;
