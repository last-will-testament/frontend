import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import UserContainer from '../UserContainer';
// import LawyerContainer from '../LawyerContainer';
// import Nav from '../Nav'

class ReviewContainer extends Component {
  constructor(){
    super()
    this.state = {
    }

  }

  render(){
    return (
    <div>
      <div className="logohead"></div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-8 offset-2 text-center mt-5">
              <div>Thank you for submitting</div>
              <div className="mt-3"><Link to="/">Finish</Link></div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default ReviewContainer
