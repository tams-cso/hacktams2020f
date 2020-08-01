import React from 'react';
import './landing.css';

import Title from './title';
import Water from './water';
import Clouds from './clouds';
import MailingListForm from './mailing-list-form';

const Landing = () => (
   <section className='landing'>
      <div className='wrap'>
         <Title />
         <MailingListForm />
         <Water far />
         <Water background />
         <Water />
         <Clouds />
      </div>
   </section>
);

export default Landing;