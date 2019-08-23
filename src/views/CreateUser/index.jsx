import React, {Component} from 'react';
import { loadState, saveState } from '../../store/localStoreage'
import './index.css';

class CreateUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };


  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...this.state,
      uid: new Date().getTime()
    };
    try {
      // const serializedState = JSON.stringify(data)
      const a = JSON.parse(localStorage.getItem('state'));
      // a.push(data);
      console.log(a);
      localStorage.setItem('state', JSON.stringify(a))
    } catch(error) {
      console.log(error.message, "Create user failed");
        this.setState({isSubmitting: false});
    }
  };

  render() {
    const {user, email, lastName, number} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
            <div className="row create-user-con">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label for="First Name">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={user}
                    className="form-control"
                    id="firstName"
                    onChange={this.handleChange}
                    required/>
                </div>
                <div className="form-group">
                  <label for="First Name">Email *</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    className="form-control"
                    id="email"
                    onChange={this.handleChange}
                    required/>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <label for="First Name">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    className="form-control"
                    id="LastName"
                    onChange={this.handleChange}
                    required/>
                </div>
                <div className="form-group">
                  <label for="First Name">Mobile Number *</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={number}
                    className="form-control"
                    onChange={this.handleChange}
                    id="mobileNumber"
                    required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label for="profileimage">Profile Image</label>
                    <input type="file" className="form-control-file" id="profileImage"/>
                  </div>
                </div>
              </div>
          </div>
          <div class="add-btn">
          <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    )
  }
}


export default CreateUser;