import React, {Component} from 'react';

import Header from '../../components/Header/Header'
import Email from '../../components/Email/Email'
import MailboxList from '../../components/MailboxList/MailboxList'

class Mail extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div class="container-fluid mail-box">
          <div class="row">
            <MailboxList/>
            <Email/>
          </div>
        </div>
      </div>
    )
  }
}

export default Mail;