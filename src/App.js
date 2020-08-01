import React, { Component } from 'react';
import './fonts.css';

import Noise from './components/noise';
import Background from './components/background';
import Landing from './components/landing';
import Duck from './components/duck';
import Space from './components/space';
import calculateSceneIndex from './components/calculateSceneIndex';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      sceneIndex: 0
    }
  }

  updateSceneIndex = () => {
    this.setState({ sceneIndex: calculateSceneIndex() });
  }

  componentDidMount = () => {
    document.body.addEventListener('scroll', this.updateSceneIndex);
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('scroll', this.updateSceneIndex);
  }

  render = () => (
    <div>
      <Background sceneIndex={this.state.sceneIndex} />
      <Noise />
      <Landing sceneIndex={this.state.sceneIndex} />
      <Space />
      <Duck sceneIndex={this.state.sceneIndex} />
    </div>
  )
}

export default App;
