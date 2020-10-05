import React, { Component } from 'react';

import content from './slider.json';
import './slider.css';

class Slider extends Component {
   constructor (props) {
      super(props);

      this.state = {
         active: 0,
         activeInterval: 0,
         activeIntervalTimeout: 0
      };
   }

   componentDidMount () {
      this.setActiveInterval();
   }

   componentWillUnmount () {
      clearInterval(this.state.activeInterval);
      clearTimeout(this.state.activeIntervalTimeout);
   }

   setActiveInterval () {
      this.setState({
         activeInterval: setInterval(() => {
            this.setState({
               active: (this.state.active + 1) % content.length
            })
         }, 5000)
      }, () => {console.log(this.state.activeInterval)});
   }

   setActive (newActive) {
      clearInterval(this.state.activeInterval);
      clearTimeout(this.state.activeIntervalTimeout);

      this.setState({
         active: newActive,
         activeIntervalTimeout: setTimeout(this.setActiveInterval.bind(this), 15000)
      })
   }

   render = () => (
      <div className='slider'>
         {
            content.map((slide, index) => (
               <h3 key={index} onClick={this.setActive.bind(this, index)}>
                  { slide.title }
                  <div className='active-slide' style={{ width: index === this.state.active ? '100px' : 0 }} />
               </h3>
            ))
         }
         <p dangerouslySetInnerHTML={{__html: content[this.state.active].text}} />
      </div>
   )
}

export default Slider;
