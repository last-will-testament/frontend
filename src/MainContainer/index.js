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
      <div className="container">
        <div className="">
          <img src="bg1.jpg" style={{width: 100}}/>
        <div>create your dead or alive document</div>
        <Link to="/user">Start</Link>

        </div>
      </div>
    )
  }
}

export default MainContainer
// <UserContainer />
// <LawyerContainer />
// <WillContainer />
