import React from 'react';

export default function Spacer(props) {
    return (
        <div className={`spacer spacer--${props.size}`} />
    );
};