import React, { Component } from 'react';
import './App.sass';

import Main from './pages/Main';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';

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

		const isLogged = !!this.state.username;
		const HomePage = () => {
			return(
				<div className='app'>
					<Header title='Album picker' subtitle={`Hello ${this.state.username}!`} resetValue={this.updateUsername} />
					<Main username={this.state.username} />
				</div>
			)
		}

		return isLogged ? <HomePage /> : <LoginPage handleSumbit={this.updateUsername} />;
	}
}

export default App;
