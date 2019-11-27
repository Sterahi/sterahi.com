import React from 'react';

import './Articles.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BASE_URL = 'https://cdn.contentful.com',
      CONTENTFUL_SPACE = '21nhxxvf3po0',
      CONTENTFUL_TOKEN = 'ba71aa941315ef7ed462e4f40c9babe61d37ef6fc49c9db37ccd84c9246f6267'

export default class Articles extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            projects: []
        }
    }

    componentDidMount() {
        this.getProjects()

    }

    getProjects() {
        fetch(`${BASE_URL}/spaces/${CONTENTFUL_SPACE}/entries?access_token=${CONTENTFUL_TOKEN}&content_type=project&include=9`).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.items)
            this.setState({
                projects: data.items
            })
        })



    }

    render() {
        const { projects } = this.state
        let imageURL = `https://images.ctfassets.net/${CONTENTFUL_SPACE}`
        return(
            <div className="articles">
                <div className="cardContainer">
                    {
                        (projects||[]).map((project) => {
                            if (project === undefined) {
                                return '';
                            } else {
                                return(
                                    <div className = 'card' key = {project.sys.id}>
                                        <span>{project.fields.projectName}</span>
                                        <FontAwesomeIcon icon = {faCode} />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
