import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import StatusBar from './StatusBar'
import { Camera, Video } from './camera'
import { TimeFly, Battery } from './conecctions'
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
          {/* <Camera /> */}
        </div>
        <div className="stream">
          <StatusBar />
        </div>
      </div>
    );
  }
}

export default App;
