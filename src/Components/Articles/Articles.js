import React from "react"

import { createClient } from "contentful"

import "./Articles.scss"
import VizAwareCard from "../VizAwareCard/VizAwareCard"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Spinner from "react-spinkit"

const CONTENTFUL_SPACE = "21nhxxvf3po0",
    CONTENTFUL_TOKEN = "ba71aa941315ef7ed462e4f40c9babe61d37ef6fc49c9db37ccd84c9246f6267"

const client = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN
})
export default class Articles extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.getProjects()
    }

    getProjects() {
        this.setState({loading: true})
        client.getEntries({
            "sys.contentType.sys.id": "project"
        }).then(projects => {
            this.setState({
                projects: projects.items,
                loading: false
            })
        })
    }

    render() {
        let { projects } = this.state
        return(
            <div className="articles">
                {this.state.loading &&
                    <div className = "loader">
                        <Spinner />
                    </div>
                }
                <div className="cardContainer">
                    <div className = "pageHead">
                        <h3> Projects </h3>
                        <small>If a project has the <code><FontAwesomeIcon icon = {faCode} /></code> icon the source code is available!</small>
                    </div>
                    {
                        (projects||[]).map((project, id) => {
                            if (project === undefined) {
                                return ""
                            } else {
                                return(
                                    <VizAwareCard project = {project.fields} key = { id } />
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
