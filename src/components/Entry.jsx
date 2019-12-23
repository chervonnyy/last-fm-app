import React from 'react';

export default function Entry(props) {
    return(
        <div className="entry">
            <h1>last.fm album picker app</h1>
            <h2>Paste your last.fm account name here</h2>
            <input onKeyDown={event => {
                if (event.keyCode === 13) {
                    props.handleSumbit(event.target.value);
                    props.history.push('/albums');
                }
            }}/>
        </div>
    );
}
