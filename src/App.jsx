import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';

import AlbumGrid from './components/AlbumGrid';
import Entry from './components/Entry';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
		  	isLoaded: false,
			albums: [],
			username: null  
		};
	}

	updateUsername = username => {
		this.setState({ username });
	}


	render() {
		return (
			<Switch>
				<Route exact path='/' 
					render={ props => <Entry handleChange={this.updateUsername} {...props}/> }/>
				<Route path='/grid' 
					render={ props => <AlbumGrid username={this.state.username} {...props}/> }/>
			</Switch>
		);
	}

}

export default App;
