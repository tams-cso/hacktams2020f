import React from 'react';
import './water.css';

const Water = (props) => (
   <div className={'water' + (props.background ? ' background' : '') + (props.far ? ' far' : '')}>

   </div>
);

export default Water;
