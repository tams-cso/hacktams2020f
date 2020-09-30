import React from 'react';

import './space.css';
import Earth from './earth';
import Slider from './slider';
import Sponsors from './sponsors';

const Space = (props) => (
   <section id='space'>
      <div className='wrap'>
         <h2 style={{ marginTop: '20vh', color: '#fff' }}>North Texas's Premier High School Hackathon</h2>
         <Slider />
         <Earth />
         <h2 style={{ marginTop: '20vh', color: '#fff', textAlign: 'center' }}>Sponsored by</h2>
         <Sponsors />
      </div>
   </section>
);

export default Space;
