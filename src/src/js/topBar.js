import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import '../css/topBar.css';
import SearchBar from './searchBar'
import logo from '../img/logo.png'


export default class TopBar extends Component {

  myCallback = (dataFromChild) => {
    this.props.parentCallBack(dataFromChild);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar right brand={<img src={logo} className="brand-logo-img" alt="Shuffle"/>}>
          <h3 className="nowPlaying">Now playing: {this.props.title}</h3>
          <SearchBar callBack={this.myCallback}/>
        </Navbar>
      </div>
    );
  }
}