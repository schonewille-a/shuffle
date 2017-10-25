import React, { Component } from 'react';
import "../css/app.css";
import Video from "./video";
import TopBar from "./topBar";

export default class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        searchQuery: "metallica",
	        title: ""
	    };    
	}

	myCallback = (dataFromChild) => {
		this.setState({ searchQuery: dataFromChild });
	}

	title = (dataFromChild) => {
		this.setState({ title: dataFromChild});
	}

    render() {
	    return (
	      <div>
	        <TopBar parentCallBack={this.myCallback} title={this.state.title}/>
    		<Video query={this.state.searchQuery} titleCallback={this.title} />
	      </div>
	    );
  	}
}