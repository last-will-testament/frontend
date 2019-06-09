import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class LawyerContainer extends Component {
  constructor(){
    super()
    this.state = {
      lawyer : {
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
      ...this.state.lawyer
    }
    updatedChange[e.target.name] = e.target.value;

    this.setState({
      lawyer: updatedChange
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      ...this.state.lawyer
    }

    this.addLawyerInfo(updatedInfo)
    this.setState({
      lawyer : {
        username : '',
        contactNumber: '',
        contactEmail: ''
        }
    })
  }

  addLawyerInfo = async(updatedInfo) => {
    console.log('updatedInfo', updatedInfo );
    try{
        const response = await fetch('http://localhost:9000/deadoralive/lawyer', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedInfo),
          headers: {
            'Content-Type' : 'application/json'
          }
        });

        // console.log('1', response.ok);
        if(!response.ok){
          throw Error(response.statusText)
        }

        // console.log('what is response', response);
        const parsedLawyer = await response.json();
        // console.log('2', parsedLawyer);
        // this.props.history.push('/');

      } catch(err) {
        console.log('cannot make house');
      }
    }



  render(){
    return (
      <div className="container mt-5">
        <h1 className="mb-5">Lawyer ex</h1>
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                 <input className="form-control" name="username" value={this.state.lawyer.username} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Number:</label>
                 <input className="form-control" name="contactNumber" value={this.state.lawyer.contactNumber} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Contact Email:</label>
                <input className="form-control" name="contactEmail" value={this.state.lawyer.contactEmail} onChange={this.handleChange}/>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LawyerContainer
