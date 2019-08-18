import React, {Component} from 'react';
import {db} from "../../firebase";

import './Email.css'

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: []
    };
  }
  componentWillMount() {
    db.collection("mail")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot
          .docs
          .map(doc => doc.data());
        console.log(data);
        this.setState({mail: data});
      });
  }
  render() {
    const {mail} = this.state;

    return (

      <div className="col-sm-10 mail-box">
         {mail && mail.map(m => {
                    return (                    
                  <table className="mail-list">
                    <col width="130"/>
                    <col width="550"/>
                    <tr>
                      <td><b>{m.recipients}</b></td>
                      <td><b>{m.subject}</b> - {m.message}</td>
                    </tr>
                  </table>
                  )
                })}
                
      </div>
    )
  }
}

export default Email;