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
         <a href='https://live.hacktams.org' className='button' target='_blank' rel="noopener noreferrer">Live Site!</a>
         <Link to='/register' className='button'>Register Now!</Link>
         <Link to='/mentor' className='under-button'>Become a Mentor</Link>
         <ScrollIndicator />
         <Water far part={props.sceneIndex !== 0 ? 'left' : 'none'} />
         <Water background part={props.sceneIndex !== 0 ? 'right' : 'none'}/>
         <Water part={props.sceneIndex !== 0 ? 'left' : 'none'}/>
         <Clouds />
      </div>
   </div>
);

export default TitleWithWater;
