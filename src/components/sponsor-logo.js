import React from 'react';

const defaultSponsorAlts = [
   'a brave sponsor',
   'a generous company',
   'a brilliant group of engineers',
   'a business deserving of our thanks'
]

const getAlt = () => defaultSponsorAlts[Math.floor(Math.random * defaultSponsorAlts.length)]

const SponsorLogo = (props) => (
   <a href={props.url || '#'} target="_blank" rel="noopener noreferrer" className={'sponsor ' + props.size}>
      <img src={props.logo || '/images/spaceduck.png'} alt={props.alt || getAlt()} />
   </a>
)

export default SponsorLogo;
