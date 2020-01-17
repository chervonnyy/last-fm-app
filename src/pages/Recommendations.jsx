import React from 'react';

import RecommendationCloud from '../components/RecommendationCloud/RecommendationCloud';

export default function Recommnedations(props) {
    return (
        <RecommendationCloud username={props.username} />
    );
};