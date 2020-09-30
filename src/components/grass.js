import React from 'react';

import './grass.css';

const Grass = () => (
   <div className='grass-container'>
      <div className='wrap'>
         <h2 style={{ marginTop: 100, textAlign: 'center' }}>Questions?</h2>
         <p style={{ textAlign: 'center' }}>
            Check out our <a href='# '>Hacker's Guide</a> with FAQ or email <a target="_blank" href='mailto:jon@hacktams.org?subject=I+have+a+question+about+hackTAMS!'>jon@hacktams.org</a>
         </p>
         <div style={{ height: '30vh' }} />
      </div>
      <div className='grass' />
      <div className='grass-duck' />
   </div>
);

export default Grass;
