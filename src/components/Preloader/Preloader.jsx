import React from 'react';
import Logo from '../../assets/images/sc_logo.png'
import './Preloader.sass';

export default function Preloader() {
    return <div className="preloader"><img src={Logo} alt='last.fm logo'/></div>;
}