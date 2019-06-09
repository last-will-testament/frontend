import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import UserContainer from '../UserContainer';
// import LawyerContainer from '../LawyerContainer';
// import WillContainer from '../WillContainer'

class ReviewContainer extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <div className="container">
        <div className="">
        <div>create your dead or alive document</div>
        <Link to="/">Finish</Link>
        </div>
      </div>
    )
  }
}

export default ReviewContainer
