import React from 'react';
import { Link } from 'react-router-dom';

import './Header.sass';

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="header__title">{props.title}</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
            <ul className="header__navigation">
                <li className="header__navigation-link">
                    <Link to={'/home'}>Home</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to={'/albums'}>Albums</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to={'/recommendations'}>Recommendations</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to={'/'}>Change username</Link>
                </li>
            </ul>
        </header>
    )
};