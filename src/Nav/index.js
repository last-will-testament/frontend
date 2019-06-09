import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor(){
    super()
    this.state = {

    }
  }



  render(){
    return (
      <div>
        <div className="logohead"><img className="ml-5 mt-4" src="logo.jpg" style={{width: 100}}/></div>
      </div>
    )
  }
}

export default Nav
