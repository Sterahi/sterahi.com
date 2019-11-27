import React from 'react';

import './Home.scss';

export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            page: 1
        }
    }

    componentWillMount() {
        this.getProjects()
    }

    getProjects() {

    }

    render () {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}
