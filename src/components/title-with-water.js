import React from 'react';

import Water from './water';
import Title from './title';
import Clouds from './clouds';
import ScrollIndicator from './scroll-indicator';
import { Link } from 'react-router-dom';

const TitleWithWater = (props) => (
   <div className='wrap'>
      <div className='titleWithWater'>
         <Title />
         <Link to='/register' className='button'>Register Now!</Link>
         <Link to='/volunteer' className='under-button'>Volunteer/Mentor</Link>
         <ScrollIndicator />
         <Water far part={props.sceneIndex !== 0 ? 'left' : 'none'} />
         <Water background part={props.sceneIndex !== 0 ? 'right' : 'none'}/>
         <Water part={props.sceneIndex !== 0 ? 'left' : 'none'}/>
         <Clouds />
      </div>
   </div>
);

export default TitleWithWater;
