export default (method, user) => {
    const base = 'https://ws.audioscrobbler.com/2.0/';
    const apiKey = '7600702bed449a1234d7fe6d22c880a2';
    const query = user ? `method=${method}&user=${user}` : `method=${method}`;

    return fetch(`${base}?${query}&api_key=${apiKey}&format=json`).then(response => response.json())
}