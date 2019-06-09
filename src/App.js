import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import MainContainer from './MainContainer';
import UserContainer from './UserContainer';
import LawyerContainer from './LawyerContainer';
import WillContainer from './WillContainer';
import ReviewContainer from './ReviewContainer';
// import Bg from '../public/bg1.jpg';

// const Img={
//     width:"100%",
//     height:"1200px",
//   background:`url(${Bg})`,
//   backgroundSize:'cover'
// }


const My404 = () => {
  return (
    <div>
      ...error...
    </div>
  )
}

const App = () => {
  return (
    // <div style={Img}>

    <main>
      <Switch>
        <Route exact path="/" component={ MainContainer } />
        <Route exact path="/user" component={ UserContainer } />
        <Route exact path="/user/will" component={ WillContainer } />
        <Route exact path="/user/will/lawyer" component={ LawyerContainer } />
        <Route exact path="/user/will/lawyer/review" component={ ReviewContainer } />
      </Switch>
    </main>
    // </div>
  );
}

export default App;
