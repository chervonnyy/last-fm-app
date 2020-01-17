import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Albums from './Albums';
import Recommendations from './Recommendations';

export default function Main(props) {
    return (
        <Switch>
            <Route path='/albums' 
                render = { data => <Albums username={props.username} {...data}/> } />
            <Route path='/recommendations' 
                render = { data => <Recommendations username={props.username} {...data}/> } />
        </Switch>
    );
};