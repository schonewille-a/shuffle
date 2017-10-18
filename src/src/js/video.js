import React, { Component } from 'react';
import '../css/video.css';

export default class Video extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="vid">
          <div id="player"></div>
        </div>
      </div>
    );
  }
}