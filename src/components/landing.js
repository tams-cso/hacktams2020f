import React from 'react';
import './landing.css';

import Title from './title';
import Water from './water';
import Duck from './duck';
import Space from './space';
import MailingListForm from './mailing-list-form';

const Landing = () => (
   <section className='landing'>
      <div className='wrap'>
         <Title />
         <MailingListForm />
         <Water far />
         <Water background />
         <Duck />
         <Water />
         <Space />
      </div>
   </section>
);

export default Landing;