import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsername } from './store/actions';
 
import Main from './pages/Main';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';

import './App.sass';

const mapStateToProps = state => {
    return {
        username: state.app.username
    }
}

const mapDispatchToProps = {
    setUsername
}


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const isLogged = !!this.props.username
		const HomePage = () => {
			return (
				<div className='app'>
					<Header subtitle={`Hello ${this.props.username}!`} resetValue={this.props.setUsername} />
					<Main username={this.props.username} />
				</div>
			)
		}

		return isLogged ? <HomePage /> : <LoginPage handleSumbit={this.setUsername} />};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
