import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Video from './js/video';
import TopBar from './js/topBar';

ReactDOM.render(
	<TopBar/>,
	document.getElementById('topBar')
);

ReactDOM.render(
	<Video/>,
	document.getElementById('video')
);