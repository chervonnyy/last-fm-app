import React, { Component } from 'react';

import Preloader from '../Preloader/Preloader';
import apiCall from '../../assets/scripts/apiCall';

import './RecommendationCloud.sass';

export default class RecommendationCloud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: null,
            isLoaded: false
		};
    }

    async componentDidMount() {
        const response = await apiCall('user.getTopTags', this.props.username);
        const result = await response.json();
        this.setState({ tags: result, isLoaded: false });
    }

    render() {
        const { tags, isLoaded } = this.state;

        return(
            <div className="recommendations">
                {!isLoaded ? <Preloader /> : 
                    <ul>
                        {tags.toptags.tag.map((tag, index) => 
                            (<li key={index}>{tag.name}</li>)
                        )}
                    </ul>
                }
            </div>
        )
    }
};