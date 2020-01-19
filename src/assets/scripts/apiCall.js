export default (method, user) => {
    const base = 'https://ws.audioscrobbler.com/2.0/';
    const apiKey = '7600702bed449a1234d7fe6d22c880a2';
    const query = user ? `method=${method}&user=${user}` : `method=${method}`;

    return fetch(`${base}?${query}&api_key=${apiKey}&format=json`).then(response => response.json())
        //   .then(result => {
        //     if (result.error) {
        //         // this.setState({ error: result.message });
        //         console.error(`error ${result.error}`);
        //     } else {
        //         console.log(result);
        //         // const albums = result.topalbums.album.filter(album => {
        //         //     return album.image[0]['#text'];
        //         // });
                
        //         // const albumsCollection = albums.reduce((acc, album) => {
        //         //     const items = acc.filter(item => !Array.isArray(item));
        //         //     const collections = acc.filter(item => Array.isArray(item));
        //         //     return (items.length === 5) ? [...collections, items] : [...acc, album];
        //         // }, []).filter(item => Array.isArray(item));
        //         // this.setState({ albums: albumsCollection });
        //         await
        //     }
        // })
        // // .catch(error => { this.setState({ error: error.message })});
        // .catch(error => console.error(`error ${error}`));
}