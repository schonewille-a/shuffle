import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import '../css/topBar.css';


export default class TopBar extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar className="logo" brand='Shuffle+' right>
          <NavItem>
            <Icon>search</Icon>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}