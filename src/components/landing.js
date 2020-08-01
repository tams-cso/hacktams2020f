import React from 'react';
import './landing.css';

import Title from './title';
import Water from './water';
import Clouds from './clouds';
import MailingListForm from './mailing-list-form';

const Landing = (props) => (
   <section className='landing'>
      <div className='wrap'>
         <Title />
         <MailingListForm />
         <Water far part={props.sceneIndex !== 0 ? 'left' : 'none'} />
         <Water background part={props.sceneIndex !== 0 ? 'right' : 'none'}/>
         <Water part={props.sceneIndex !== 0 ? 'left' : 'none'}/>
         <Clouds />
      </div>
   </section>
);

export default Landing;
