import React from 'react';

export default function Entry(props) {
    return(
        <div className="entry">
            <h1>last.fm album picker app</h1>
            <h2>Paster your last.fm account name here</h2>
            <input onBlur={event => {
                props.handleChange(event.target.value);
                props.history.push('/grid');
            }}/>
        </div>
    );
}