import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername, setHeader } from './store/actions';
 
import Main from './pages/Main';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';

import './App.sass';

const mapStateToProps = state => {
    return {
		username: state.app.username,
		header: state.app.header
    }
}

const mapDispatchToProps = {
	setUsername,
	setHeader
}

class App extends Component {

	getUsername = () => this.props.username;

	render() {

		if (this.props.username) {
			this.props.setHeader(`Welcome ${this.props.username}`);
		}

		const isLogged = !!this.props.username
		const HomePage = () => {
			return (
				<div className='app'>
					<Header subtitle={this.props.header} resetValue={this.props.setUsername} />
					<Main username={this.props.username} />
				</div>
			)
		}

		return isLogged ? <HomePage /> : <LoginPage handleSumbit={this.setUsername} />};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
