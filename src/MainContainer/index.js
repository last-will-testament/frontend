import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserContainer from '../UserContainer';
import LawyerContainer from '../LawyerContainer';
import WillContainer from '../WillContainer'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <div className="container mt-5">
        <UserContainer />
        <LawyerContainer />
        <WillContainer />
      </div>
    )
  }
}

export default MainContainer
//
// <LawyerContainer />
// <WillContainer />
