import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class WillContainer extends Component {
  constructor(){
    super()
    this.state = {
      will : {
        username : '',
        contactNumber: '',
        contactEmail: ''
      }
    }
  }


  handleChange = (e) => {
    //e = event
    console.log('this is e', e.target);
    const updatedChange = {
      ...this.state.will
    }
    updatedChange[e.target.name] = e.target.value;

    this.setState({
      will: updatedChange
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      ...this.state.will
    }

    this.addUserInfo(updatedInfo)
    this.setState({
      will : {
        username : '',
        contactNumber: '',
        contactEmail: ''
      }
    })
  }

  addUserInfo = async(updatedInfo) => {
    try{
        const response = await fetch(`http://localhost:9000/deadoralive/will`, {
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

        const parsedWill = await response.json();

        // this.props.history.push('/');

      } catch(err) {
        console.log('cannot make house');
      }
    }



  render(){
    return (
      <div className="container mt-5">
        <h1 className="mb-5">Will ex</h1>
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                 <input className="form-control" name="username" value={this.state.will.username} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Number:</label>
                 <input className="form-control" name="contactNumber" value={this.state.will.contactNumber} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Email:</label>
                <input className="form-control" name="contactEmail" value={this.state.will.contactEmail} onChange={this.handleChange}/>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default WillContainer
