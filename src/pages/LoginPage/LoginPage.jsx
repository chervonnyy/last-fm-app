import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../../store/actions';
import './LoginPage.sass';

const mapStateToProps = state => {
    return {
        username: state.app.username
    }
}

const mapDispatchToProps = {
    setUsername
}


const LoginPage = props => {
    return(
        <div className="login-page">
            <div className="login-page__content">
                <h1 className="login-page__heading">last.fm album picker app</h1>
                <input
                    className="login-page__input"
                    placeholder="type your last.fm username here" 
                    // value={props.username}
                    onKeyDown={event => {
                        if (event.keyCode === 13) {
                            props.setUsername(event.target.value);
                        }
                    }}
                />
                <div className="login-page__example-buttons">
                    <div className="login-page__button" onClick={() => props.setUsername('kishochki')}>Use kishochki</div>
                    <div className="login-page__button" onClick={() => props.setUsername('chervonnyy')}>Use chervonnyy</div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
