import React, { Component } from 'react';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null,
		  	isLoaded: false,
		  	data: []
		};
	}
	
	componentDidMount() {
		this.getTopAlbums('kishochki');
	}


	getTopAlbums = user => {

		const base = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums';
		const period = '1month';
		const limit = 3;
		const api_key = '7600702bed449a1234d7fe6d22c880a2';

		fetch(`${base}&user=${user}&api_key=${api_key}&format=json`)
		  	.then(res => res.json())
		  	.then(
				(result) => {
			  		this.setState({
						isLoaded: true,
						data: result.topalbums.album
			  		});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	render() {

		console.log(this.state);

		const { error, isLoaded, data } = this.state;

		if (error) {
            return  <div className='app'><h2>Error: {error.message}</h2></div>;
        } else if (!isLoaded) {
            return  <div className='app'><h2>Loading...</h2></div>;
        } else {
            return (
				<div className='app'>
					{data.map(i => <p>{i.name}</p>)}
				</div>
    		)
  		}
	}

}

export default App;
