import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AlbumsGrid from '../components/AlbumsGrid';
import AlbumPage from '../components/AlbumPage';

export default function Albums(props) {
    console.log(props);
    return (
        <div>
            <Switch>
                <Route exact path='/albums' 
                    render = { data => <AlbumsGrid username={props.username} {...data}/> }/>
                <Route path='/albums/:album' 
                    render = { data => <AlbumPage {...data}/> }/>
            </Switch>
        </div>
    );
};