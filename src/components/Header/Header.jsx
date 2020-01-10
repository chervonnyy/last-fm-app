import React from 'react';
import { Link } from 'react-router-dom';

import './Header.sass';

export default function Albums(props) {
    return (
        <header className="header">
            <h1 className="header__page-title">{props.pageTitle}</h1>
            <ul className="header__navigation">
                <li className="header__navigation-link">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to={'/albums'}>Albums</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to={'/recommendations'}>Recommendations</Link>
                </li>
            </ul>
        </header>
    )
};