import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
		this.getTopAlbums(username);
	}

	componentDidUpdate() {
		console.log('update');
	}

	getTopAlbums = user => {
		const base = 'http://ws.audioscrobbler.com/2.0/';
		const method = 'user.gettopalbums';
		const limit = 100;
		const period = 'overall';
		const api_key = '7600702bed449a1234d7fe6d22c880a2';

		console.log(`username is ${user}`);


		fetch(`${base}?method=${method}&user=${user}&period=${period}&limit=${limit}&api_key=${api_key}&format=json`)
		  	.then(res => res.json())
		  	.then(result => {
				console.log(result);
				if (result.error) {
					const albums = result.topalbums.album.filter(album => {
						return album.image[3]['#text'];
					});
					this.setState({ isLoaded: true, albums });
				}
			}, error => { this.setState({ isLoaded: true, error })}
			);

	}

	render() {

		const { error, isLoaded, albums } = this.state;

		return (

			<Switch>
				<Route exact path='/' 
					render={ props => <Entry handleChange={this.updateUsername} {...props}/> }/>
				<Route path='/grid' 
					render={ props => <AlbumGrid albums={albums} size={3} {...props}/> }/>
			</Switch>
		);
		
		// return(
		// 	<div className='app'>
		// 		<Entry 
		// 			handleChange={this.updateUsername}
		// 		/>
		// 		{error && <h2>Error: {error.message}</h2>}
		// 		{!isLoaded && <h2>Loading...</h2>}
		// 		<AlbumGrid albums = {albums} size = {3}/>
		// 		<audio
		// 			src="https://www.youtube.com/watch?v=5ZT3gTu4Sjw"
		// 			autoPlay={true}>
		// 		</audio>
		// 	</div>
		// )
	}

}

export default App;
