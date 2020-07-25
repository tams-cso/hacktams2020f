import React, { Component } from 'react';
import './mailing-list-form.css';

class MailingListForm extends Component {
   constructor (props) {
      super(props);

      this.state = {
         email: ''
      }
   }

   updateEmail = (e) => {
      this.setState({
         email: e.target.value
      })
   }

   render = () => (
      <div id="mc_embed_signup" className='normal'>
         <form action={/*TODO: get mc code*/""} className="validate" id="mc-embedded-subscribe-form" method="POST" name="mc-embedded-subscribe-form">
            <div id="mc_embed_signup_scroll">
               <input className="required email" id="mce-EMAIL" name="EMAIL" placeholder="sophie.the.duck@gmail.com" type="email" value={this.state.email} onChange={this.updateEmail} />
               <input className="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Get Updates" readOnly />
               <div className="clear" id="mce-responses">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
               </div>

               <div aria-hidden="true" style={{position: 'absolute', left: -5000}}>
                  <input name={/*TODO: get mc code*/""} tabIndex="-1" type="text" value="" readOnly />
               </div>
            </div>
         </form>
      </div>
   )
}

export default MailingListForm;
