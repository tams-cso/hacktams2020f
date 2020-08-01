import React from 'react';
import './duck.css';

const Duck = (props) => (
   <div className='duck-outer'>
         <div className={'duck' + (props.sceneIndex ? ' inspace' : '')} style={{
            top: props.sceneIndex === 0 ? 0 : '70vh',
            backgroundSize: props.sceneIndex === 0 ? '90%' : '20%',
         }}>
      </div>
   </div>
)

export default Duck;
