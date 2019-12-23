import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AlbumsGrid from './AlbumsGrid';
import AlbumPage from './AlbumPage';

export default function Albums(props) {

    // const username = props.username;

    return (
        <div>
            <h1>Albums</h1>
            <Switch>
                <Route exact path='/albums' 
                    render = { data => <AlbumsGrid username={props.username} {...data}/> }/>
                <Route path='/albums/:album' 
                    render = { data => <AlbumPage {...data}/> }/>
            </Switch>
        </div>
    );
};