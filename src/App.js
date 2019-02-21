import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import StatusBar from './StatusBar'
import { Commands } from './commands'
import { Camera, Video } from './camera'
import { TimeFly, Battery } from './conecctions'
import { BlockGroup } from './information'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="capture">
          <Camera />
          <Video />
        </div>
        <div className="connection">
          <Battery />
          <TimeFly />
        </div>
        <div className="information">
          <BlockGroup />
        </div>
        <div className="stream">
          <Commands />
        </div>
      </div>
    );
  }
}

export default App;
