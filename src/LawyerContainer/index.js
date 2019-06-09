import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../Nav'

class LawyerContainer extends Component {
  constructor(){
    super()
    this.state = {
      lawyer : {
        lawyerName : '',
        lawyerNumber: '',
        lawyerEmail: ''
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
        lawyerName : '',
        lawyerNumber: '',
        lawyerEmail: ''
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
        this.props.history.push('/user/will/lawyer/review');

      } catch(err) {
        console.log('cannot make house');
      }
    }



  render(){
    return (
    <div>

      <div className="container mt-5">
        <div className="mb-5">
          <h1 className="">Lawyer Information</h1>
          <small>Please enter your Lawyer's information</small>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="lawyerName" >Name:</label>
                 <input className="form-control" id="lawyerName" name="lawyerName" value={this.state.lawyer.lawyerName} onChange={this.handleChange}/>
                 
              </div>
              <div className="form-group">
                <label htmlFor="lawyerNumber">Contact Number:</label>
                 <input className="form-control" id="lawyerNumber" name="lawyerNumber" value={this.state.lawyer.lawyerNumber} onChange={this.handleChange}/>

              </div>
              <div className="form-group">
                <label htmlFor="lawyerEmail">Contact Email:</label>
                <input type="email" className="form-control" id="lawyerEmail" name="lawyerEmail" value={this.state.lawyer.lawyerEmail} onChange={this.handleChange}/>
                <small></small>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LawyerContainer
