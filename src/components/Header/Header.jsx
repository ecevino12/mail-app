import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import GoogleLogo from '../../assets/google_logo.png'
import User from '../../assets/user.png'

import './Header.css'
import {db} from "../../firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    db
      .collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot
          .docs
          .map(doc => doc.data());
        console.log(data);
        this.setState({users: data});
      });
  }

  render() {
    const {users} = this.state;

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand"><Link to="/"><img src={GoogleLogo} alt="google logo" width="100"/></Link></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/create-user">
                  <a className="btn btn-primary">
                    Create User
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  User <img src={User} alt="google logo" width="32"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {users && users.map(user => {
                    return (
                      <a className="dropdown-item">{user.firstName}</a>
                    )
                  })}
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div class="gmail-header">
          Gmail
        </div>
      </header>
    )
  }
}
export default Header;