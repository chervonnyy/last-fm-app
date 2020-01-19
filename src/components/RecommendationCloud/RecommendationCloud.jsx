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

    componentDidMount() {
        const response = async () => await apiCall('User.getTopTags', this.props.username);
        response().then(response => {
            this.setState({ tags: response, isLoaded: true });
        });
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