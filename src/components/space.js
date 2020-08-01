import React from 'react';

import './space.css';
import Earth from './earth';

const Space = (props) => (
   <section id='space'>
      <div className='wrap'>
         <h2 style={{ marginTop: '20vh', color: '#fff' }}>North Texas's Premier High School Hackathon</h2>
         <Earth />
      </div>
   </section>
);

export default Space;
