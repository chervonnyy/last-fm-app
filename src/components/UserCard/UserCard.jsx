import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsername } from '../../store/actions';
import { updateFriendList } from '../../store/Friends/actions';

import './UserCard.sass';

const mapStateToProps = state => {
    return {
        // username: state.app.username,
    }
}

const mapDispatchToProps = {
    setUsername,
    updateFriendList
}

function UserCard(props) {
    return (
        <Link to='/'>
            <div className="user-card" onClick={() => {
                props.setUsername(props.name);
                props.updateFriendList([]);
            }}>
                <img src={props.image} with="100%" height="100%" alt={`${props.name}'s profile`}></img>
                <div className="user-card__info">
                    <span className="user-card__name">{props.name}</span>
                    <span className="user-card__realname">{props.realname !== 'None' ? props.realname : ''}</span>
                    <span className="user-card__country">{props.country !== 'None' ? props.country : ''}</span>
                </div>
            </div>
        </Link>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);