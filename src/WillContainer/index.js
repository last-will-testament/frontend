import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class WillContainer extends Component {
  constructor(){
    super()
    this.state = {
      will : {
        kinName : '',
        kinNumber: '',
        kinEmail: '',
        Description:''
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
        kinName : '',
        kinNumber: '',
        kinEmail: '',
        Description:''
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

        this.props.history.push('/user/will/lawyer');

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
                <label htmlFor="kinName">Name:</label>
                 <input className="form-control" name="kinName" value={this.state.will.kinName} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="kinNumber">Kin contact number:</label>
                 <input className="form-control" name="kinNumber" value={this.state.will.kinNumber} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="kinEmail">Contact Email:</label>
                <input className="form-control" name="kinEmail" value={this.state.will.kinEmail} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" name="description" value={this.state.will.description} onChange={this.handleChange}>
                </textarea>
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
