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
            .then(data => this.setState({ albumData: data.album }))
            .catch(error => console.error(error));
    }
    
    render() {
        const { artist, album } = this.props.location.state;
        const apiKey = '7600702bed449a1234d7fe6d22c880a2';
        const albumData = this.state.albumData;

        console.log(albumData);
        let style = { color: 'red' }
    
        if (albumData) {
            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`)
                .then(res => res.json())
                .then(data => {
                    const image = data.artist.image[4];
                    style = {
                        backgroundImage: `url(${image})`,
                    }
                })
                .catch(error => console.error(error));
        }

        return (
            <div className='album-page'>
                <h2>{artist} — {album}</h2>
                {albumData &&
                    <div className='album-info'>
                        <div className="album-info__main" stlye={{...style}}>
                            <div className='album-info__cover'>
                                <img src={albumData.image[4]['#text']} alt={album} />
                            </div>
                            <ul className='album-info__tracklist'>
                                {albumData.tracks.track.map((track, index) => <li key={index}>{track.name}</li>)}
                            </ul>
                        </div>
                        <div className='album-info__summary'>
                            {albumData.wiki && <p>{albumData.wiki.summary.split('<a href')[0]}</p>}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

  export default AlbumPage;
