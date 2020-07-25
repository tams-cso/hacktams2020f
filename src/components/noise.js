import React from 'react';

const Noise = () => (
   <div style={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      background: 'url("/images/noise.png")',
      opacity: 0.25,
      backgroundSize: '25%',
      zIndex: 2
   }} />
);

export default Noise;
