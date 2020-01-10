import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import AlbumsGrid from './AlbumsGrid';
import AlbumPage from './AlbumPage';

export default function Albums(props) {
    return (
        <div>
            <Header pageTitle='Album picker'/>
            <Switch>
                <Route exact path='/albums' 
                    render = { data => <AlbumsGrid username={props.username} {...data}/> }/>
                <Route path='/albums/:album' 
                    render = { data => <AlbumPage {...data}/> }/>
            </Switch>
        </div>
    );
};