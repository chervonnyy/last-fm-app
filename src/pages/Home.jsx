import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import AlbumsGrid from '../components/AlbumsGrid';

export default function Home(props) {
    const subtitle = props.username ? `username is ${props.username}` : 'username is not provided';
    return (
        <div>
            <Header title='Album picker' subtitle={subtitle}/>
            <Switch>
                <Route path='/home' 
                    render = { data => <AlbumsGrid username={props.username} {...data}/> }/>
                <Route exact path='/albums' 
                    render = { data => <AlbumsGrid username={props.username} {...data}/> }/>
            </Switch>
        </div>
    );
};