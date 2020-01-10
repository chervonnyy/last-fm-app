import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import AlbumsGrid from '../components/AlbumsGrid';

export default function Recommnedations(props) {
    const subtitle = props.username ? `username is ${props.username}` : 'username is not provided';
    return (
        <div>
            <h3>recos</h3>
        </div>
    );
};