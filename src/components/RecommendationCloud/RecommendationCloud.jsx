import React, { Component } from 'react';
import apiCall from '../../assets/apiCall';

export default class RecommendationCloud extends Component {
    constructor(props) {
        super(props);

        this.state = {
			tags: null
		};
    }

    async componentDidMount() {
        const response = await apiCall('user.getTopTags', this.props.username);
        const result = await response.json();
        this.setState({ tags: result });
    }

    render() {
        return(
            <div>
                <h3>recos</h3>
                <ul>
                    {this.state.tags && this.state.tags.toptags.tag.map((tag, index) => 
                        (<li key={index}>{tag.name}</li>)
                    )}
                </ul>
            </div>
        )
    }
};