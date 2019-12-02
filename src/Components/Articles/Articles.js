import React from 'react';
import { Link } from 'react-router-dom'

import { createClient } from 'contentful'

import './Articles.scss';
import VizAwareCard from '../VizAwareCard/VizAwareCard'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CONTENTFUL_SPACE = '21nhxxvf3po0',
      CONTENTFUL_TOKEN = 'ba71aa941315ef7ed462e4f40c9babe61d37ef6fc49c9db37ccd84c9246f6267'

const client = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN
})
export default class Articles extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.getProjects()
    }

    getProjects() {
        client.getEntries({
            'sys.contentType.sys.id': 'project'
        }).then(projects => {
            this.setState({
                projects: projects.items
            })
        })
    }

    render() {
        let { projects } = this.state
        return(
            <div className="articles">
                <div className="cardContainer">
                    <div className = "pageHead">
                        <h3> Projects </h3>
                        <small>If a project has the <code><FontAwesomeIcon icon = {faCode} /></code> icon the source code is available!</small>
                    </div>
                    {
                        (projects||[]).map((project) => {
                            if (project === undefined) {
                                return '';
                            } else {
                                return(
                                    <VizAwareCard project = {project.fields} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

// <div className = 'card' key = {project.sys.id} style = {{background: `url(${bkgImage}) center center / cover no-repeat`}}>
//     <div className = "cardInner">
//         <span>{project.fields.projectName}</span>
//         <Link to = {`/project/${project.fields.slug}`} className = "button">See Details!</Link>
//         {codeAvaliable}
//     </div>
// </div>
