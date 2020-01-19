import React from 'react';
import { Link } from 'react-router-dom';

import svg from '../../assets/images/lastfm-icon.svg';
import './Header.sass';


export default function Header(props) {
    const logo = <img src={svg} alt='last.fm logo' width='50px' height='50px' />
    return (
        <header className="header">
            <h1 className="header__title">Last.fm album picker</h1>
            <h2 className="header__subtitle">{props.subtitle}</h2>
            <ul className="header__navigation">
                <li className="header__navigation-link">
                    <Link to='/albums'>Albums</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to='/recommendations'>Recommendations</Link>
                </li>
                <li className="header__navigation-link">
                    <Link to='/friends'>Friends</Link>
                </li>
                <li className="header__navigation-link" onClick={() => props.resetValue('')}>
                    Change username
                </li>
            </ul>
        </header>
    )
};