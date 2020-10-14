import React from 'react';

import './grass.css';

const Grass = () => (
   <div className='grass-container'>
      <div className='wrap'>
         <h2 style={{ marginTop: 100, textAlign: 'center' }}>Questions?</h2>
         <p style={{ textAlign: 'center', fontFamily: "'Grandstander'" }}>
            Check out our FAQ above or email <a target="_blank" rel="noopener noreferrer" href='mailto:jon@hacktams.org?subject=I have a question about hackTAMS!'>jon@hacktams.org</a>
         </p>
         <div style={{ height: '30vh' }} />
      </div>
      <div className='grass' />
      <div className='grass-duck' />
   </div>
);

export default Grass;
