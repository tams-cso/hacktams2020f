import React from 'react';
import './duck.css';

const Duck = (props) => (
   <div className='duck-outer'>
      <div className='duck' style={{
         top: props.sceneIndex === 0 ? 0 : '40vw'
      }}>

      </div>
   </div>
)

export default Duck;
