import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from './Home';
import Albums from './Albums';
import Recommendations from './Recommendations';

export default function Main(props) {
    const subtitle = props.username ? `username is ${props.username}` : 'username is not provided';
    return (
        <div className='app'>
            <Header title='Album picker' subtitle={subtitle} />
            <Switch>
                <Route exact path='/' 
                    render = { data => <Home username={props.username} {...data}/> } />
                <Route exact path='/albums' 
                    render = { data => <Albums username={props.username} {...data}/> } />
                <Route path='/recommendations' 
                    render = { data => <Recommendations username={props.username} {...data}/> } />
            </Switch>
        </div>
    );
};