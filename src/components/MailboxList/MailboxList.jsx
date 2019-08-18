import React, {Component} from 'react';
import {db} from "../../firebase";

import './MailboxList.css'

class MailboxList extends Component {
  constructor() {
    super();
    this.state = {
      mail: [],
      recipients: '',
     subject: '',
     message: '',
      isHidden: true
    };
  }

  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...this.state,
      mid: new Date().getTime()
    };
    db
      .collection("mail")
      .doc(data.mid.toString())
      .set(data)
      .then(() => {
        console.log("Success");
        window.location = "/";
      })
      .catch(error => {
        console.log(error.message, "Create user failed");
        this.setState({isSubmitting: false});
      });
  };
  componentWillMount() {
    db
      .collection("mail")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot
          .docs
          .map(doc => doc.data());
        console.log(data);
        this.setState({mail: data});
      });
      
  }
  openCompose = (e) => {
    this.setState({
      isHidden: false
    });
  }
  closeCompose = (e) => {
    this.setState({
      isHidden: true
    });
  }
  render() {
    const {recipients, subject, message, mail} = this.state;
    return (
      <div>
        <div className="col-md-12 col-sm-12">
          <div onClick={this.openCompose}> 
            <a className="btn btn-compose">Compose</a>
          </div>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link">Inbox ({mail.length})</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Send Mail</a>
            </li>

          </ul>
          <hr className="d-sm-none"/>
        </div>
        { !this.state.isHidden &&
        <div className="compose-mail" >
          <form onSubmit={this.handleFormSubmit}>
            <p className="header">
              New Message<a onClick={this.closeCompose}>
              <span>&#10006;</span></a>
            </p>
            <input
              type="text"
              name="recipients"
              value={recipients}
              onChange={this.handleChange}
              className="recipients"
              placeholder="Recipients"/>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={this.handleChange}
              className="subject"
              placeholder="Subject"/>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={this.handleChange}
              id="message"
              className="message"></textarea>
            <p className="footer">
              <button type="submit" className="btn btn-primary">Send</button>
            </p>
          </form>
        </div>
        }
      </div>
    )
  }
}
export default MailboxList;
