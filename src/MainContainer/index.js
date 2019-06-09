import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserContainer from '../UserContainer';
import LawyerContainer from '../LawyerContainer';
import WillContainer from '../WillContainer'
import Nav from '../Nav'



class MainContainer extends Component {
  constructor(){
    super()
    this.state = {

    }
  }



  render(){
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row mt-5">
            <div className="col-8 offset-2 mt-5 text-center">
              <div className="display-5">Create your last will and testament</div>
              <div className="mt-3"><Link to="/user">Start</Link></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
// <UserContainer />
// <LawyerContainer />
// <WillContainer />

// <div className="header"><img className="ml-5 mt-4" src="logo.jpg" style={{width: 100}}/></div>
