import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Albums from './Albums';
import Recommendations from './Recommendations';
import Friends from './Friends';

export default function Main(props) {
    return (
        <section>
            <Switch>
                <Route path='/albums' 
                    render = { data => <Albums username={props.username} {...data}/> } />
                <Route path='/recommendations' 
                    render = { data => <Recommendations username={props.username} {...data}/> } />
                <Route path='/friends' component={Friends} />
            </Switch>
        </section>
    );
};