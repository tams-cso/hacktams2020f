import React from 'react';
import './landing.css';

import Background from './background';
import Grass from './grass';
import Duck from './duck';
import Space from './space';
import calculateSceneIndex from './calculateSceneIndex';
import debounce from './debounce';
import TitleWithWater from './title-with-water';

class Landing extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sceneIndex: 0
    }
  }

  updateSceneIndex = () => {
    console.log(calculateSceneIndex())
    this.setState({ sceneIndex: calculateSceneIndex() });
  }

  updateSceneIndexDebounced = debounce(this.updateSceneIndex, 50);

  componentDidMount = () => {
    window.addEventListener('scroll', this.updateSceneIndexDebounced);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.updateSceneIndexDebounced);
  }

  render = () => (
    <div>
      <Background sceneIndex={this.state.sceneIndex} />
      <TitleWithWater sceneIndex={this.state.sceneIndex} />
      <Space />
      <Grass />
      <Duck sceneIndex={this.state.sceneIndex} />
    </div>
  )
}

export default Landing;
