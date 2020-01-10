import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.sass';

import Main from './pages/Main';
import Entry from './pages/Entry';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: ''
		};
	}

	updateUsername = username => {
		this.setState({ username });
	}

	render() {
		console.log(this.state);
		return (
			<Switch>
				<Route exact path="/" 
					render={props => <Main username={this.state.username} {...props}/>}>
						{(!this.state.username) && <Redirect push to='/entry' />}
				</Route>
				<Route path='/entry' 
					render={props => <Entry handleSumbit={this.updateUsername} {...props}/>}>
				</Route>
			</Switch>
		);
	}
}

export default App;
