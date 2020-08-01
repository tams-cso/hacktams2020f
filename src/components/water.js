import React from 'react';
import './water.css';

const Water = (props) => (
   <div className={
      'water' 
      + (props.background ? ' background' : '') 
      + (props.far ? ' far' : '') 
      + (props.part === 'left' ? ' part-left' : '') 
      + (props.part === 'right' ? ' part-right' : '')}>
   </div>
);

export default Water;
