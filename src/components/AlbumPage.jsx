import React, { Component } from 'react';

class AlbumPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumData: null,
        };
        
    }
    componentDidMount() {
        const { artist, album } = this.props.location.state;
        const apiKey = '7600702bed449a1234d7fe6d22c880a2';

        fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`)
            .then(res => res.json())
            .then(data => this.setState({ albumData: data }))
            .catch(error => console.log(error));
    }
    
    render() {
        const { artist, album } = this.props.location.state;
        console.log(this.state.albumData);

        return (
            <div className='album-page'>
                <h2>{artist} — {album}</h2>
                {this.state.albumData &&
                    <div className='album-info'>
                        <div class='album-info__cover'>
                            <img src={this.state.albumData.album.image[4]['#text']} alt={album} />
                        </div>
                        <div class='album-info__summary'>
                            <p>{this.state.albumData.album.wiki.summary.split('<a href')[0]}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

  export default AlbumPage;
