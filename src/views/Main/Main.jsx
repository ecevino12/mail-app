import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './Main.css';
import Mail from '../Mail'
import CreateUser from '../CreateUser'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Mail}/>
          <Route path="/create-user" component={CreateUser}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
