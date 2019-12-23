import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';


import Albums from './components/Albums';
import Entry from './components/Entry';

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
		return (
			<div className='app'>
				<Switch>
					<Route exact path='/' 
						render={ props => <Entry handleSumbit={this.updateUsername} {...props}/> }/>
					<Route path='/albums' 
						render={ props => <Albums username={this.state.username} {...props}/> }/>
				</Switch>
			</div>
		);
	}
}

export default App;
