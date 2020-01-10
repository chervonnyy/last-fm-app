import React from 'react';

export default function Entry(props) {
    return(
        <div className="entry">
            <h1>last.fm album picker app</h1>
            <input 
                placeholder="type your last.fm username here" 
                onKeyDown={event => {
                    if (event.keyCode === 13) {
                        props.handleSumbit(event.target.value);
                        props.history.push('/');
                    }
                }}
            />
            <button onClick={() => {
                props.handleSumbit('kishochki');
                props.history.push('/');
            }}>Use 'kishochki'</button>
            <button onClick={() => {
                props.handleSumbit('chervonnyy');
                props.history.push('/');
            }}>Use 'chervonnyy'</button>
        </div>
    );
}
