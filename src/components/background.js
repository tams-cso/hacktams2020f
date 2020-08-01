import React from 'react';

import backgrounds from './backgrounds.json';

const Background = (props) => (
   <div>
      {
         backgrounds.map((background, index) => 
            <div className='background' style={{
               background, 
               opacity: props.sceneIndex === index ? 1 : 0,
               width: '100%',
               height: '100vh',
               position: 'fixed',
               zIndex: -9999,
               transition: 'opacity 3s'
            }} key={index} />
         )
      }
   </div>
)

export default Background;
