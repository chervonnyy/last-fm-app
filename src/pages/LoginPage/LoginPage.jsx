import React from 'react';

import './LoginPage.sass';

export default function LoginPage(props) {
    return(
        <div className="login-page">
            <div className="login-page__content">
                <h1 className="login-page__heading">last.fm album picker app</h1>
                <input
                    className="login-page__input"
                    placeholder="type your last.fm username here" 
                    onKeyDown={event => event.keyCode === 13 && props.handleSumbit(event.target.value)}
                />
                <div className="login-page__example-buttons">
                    <div className="login-page__button" onClick={() => props.handleSumbit('kishochki')}>Use kishochki</div>
                    <div className="login-page__button" onClick={() => props.handleSumbit('chervonnyy')}>Use chervonnyy</div>
                </div>
            </div>
        </div>
    );
}
