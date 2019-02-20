import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


import StatusBar from './StatusBar'
import { Camera, Video } from './camera'
import { TimeFly, Battery } from './conecctions'
import { BlockGroup } from './information'

class App extends Component {
  render() {
    return (
      <div className="App"
      style={{  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}
      >
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
          <StatusBar />
        </div>
      </div>
    );
  }
}

export default App;
