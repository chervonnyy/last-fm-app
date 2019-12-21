import React, { Component } from 'react';
import './App.sass';

import AlbumGrid from './components/AlbumGrid';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
		  	isLoaded: false,
		  	albums: []
		};
	}
	
	componentDidMount() {
		this.getTopAlbums('kishochki');
	}

	getTopAlbums = user => {

		const base = 'http://ws.audioscrobbler.com/2.0/';
		const method = 'user.gettopalbums';
		const limit = 100;
		const api_key = '7600702bed449a1234d7fe6d22c880a2';

		fetch(`${base}?method=${method}&user=${user}&period=6month&limit=${limit}&api_key=${api_key}&format=json`)
		  	.then(res => res.json())
		  	.then(
				(result) => { this.setState({ isLoaded: true, albums: result.topalbums.album })},
				(error) => { this.setState({ isLoaded: true, error })}
			)
	}

	render() {

		const { error, isLoaded, albums } = this.state;

		console.log(this.state);
		
		return(
			<div className='app'>
				{error && <h2>Error: {error.message}</h2>}
				{!isLoaded && <h2>Loading...</h2>}
				<AlbumGrid albums = {albums} size = {3}/>
				<audio
					src="https://www.youtube.com/watch?v=5ZT3gTu4Sjw"
					autoPlay={true}>
				</audio>
			</div>
		)
	}

}

export default App;
