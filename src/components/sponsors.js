import React from 'react';

import './sponsors.css';
import sponsors from './sponsors.json';
import SponsorLogo from './sponsor-logo';

const Sponsors = (props) => (
   <div className='sponsors'>
      {
         sponsors.big.map(sponsor => <SponsorLogo size='big' logo={sponsor.logo} alt={sponsor.alt} url={sponsor.url} />)
      }
      <div style={{ width: '100vw' }} />
      {
         sponsors.medium.map(sponsor => <SponsorLogo size='medium' logo={sponsor.logo} alt={sponsor.alt} url={sponsor.url} />)
      }
      <div style={{ width: '100vw' }} />
      {
         sponsors.small.map(sponsor => <SponsorLogo size='small' logo={sponsor.logo} alt={sponsor.alt} url={sponsor.url} />)
      }
   </div>
)

export default Sponsors;
