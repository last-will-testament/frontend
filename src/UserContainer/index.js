import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserContainer extends Component {
  constructor(){
    super()
    this.state = {
      user : {
        username : '',
        contactNumber: '',
        contactEmail: ''
      }
    }
  }


  handleChange = (e) => {
    //e = event
    // console.log('this is e', e.target);
    const updatedChange = {
      ...this.state.user
    }
    updatedChange[e.target.name] = e.target.value;

    this.setState({
      user: updatedChange
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      ...this.state.user
    }

    this.addUserInfo(updatedInfo)
    this.setState({
      user : {
        username : '',
        contactNumber: '',
        contactEmail: ''
      }
    })
  }

  addUserInfo = async(updatedInfo) => {
    try{
        const response = await fetch(`http://localhost:9000/deadoralive/user`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedInfo),
          headers: {
            'Content-Type' : 'application/json'
          }
        });


        if(!response.ok){
          throw Error(response.statusText)
        }

        const parsedUser = await response.json();

        // this.props.history.push('/');

      } catch(err) {
        console.log('cannot make house');
      }
    }



  render(){
    return (
      <div className="container mt-5">
        <h1 className="mb-5">User ex</h1>
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                 <input className="form-control" name="username" value={this.state.user.username} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Number:</label>
                 <input className="form-control" name="contactNumber" value={this.state.user.contactNumber} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Email:</label>
                <input className="form-control" name="contactEmail" value={this.state.user.contactEmail} onChange={this.handleChange}/>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserContainer
