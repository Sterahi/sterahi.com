import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import { createClient } from "contentful"

import marked from "marked"

import "./Article.scss"
import { faCode, faGlobe, faTerminal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Spinner from "react-spinkit"

const CONTENTFUL_SPACE = "21nhxxvf3po0"
const CONTENTFUL_TOKEN = "ba71aa941315ef7ed462e4f40c9babe61d37ef6fc49c9db37ccd84c9246f6267"

const client = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN,
})


export default class Article extends React.Component {
    constructor() {
        super()
        this.state = {
            project: [],
            loading: false,
        }
    }

    componentDidMount() {
        if(this.props.location.project === undefined) {
            this.getArticle()
        } else {
            this.setState({
                project: this.props.location.project
            })
        }
    }

    getArticle() {
        this.setState({ loading: true })
        client.getEntries({
            "sys.contentType.sys.id": "project",
        }).then((projects) => {
            projects.items.forEach((project) => {
                if (project.fields.slug === this.props.match.params.slug) {
                    this.setState({
                        project: project.fields,
                        loading: false
                    })
                }
            })
        })
    }

    render() {
        const { project } = this.state,
            { details } = project
        let codeAvaliable,
            link,
            languages = [],
            company,
            image

        if (project.gitlLink !== undefined) {
            codeAvaliable = (
                <div>
                    <a href={project.gitlLink} className="button" target="_blank" rel="noopener noreferrer" title={`View the source code for ${project.projectName}!`}>
                        <span className="svgContainer"><FontAwesomeIcon icon={faCode} /></span>
                        <span>Check out the source code!</span>
                    </a>
                </div>
            )
        }
        if (project.link !== undefined) {
            link = (
                <div>
                    <a href={project.link} className="button" target="_blank" rel="noopener noreferrer" title={`View ${project.projectName} live! It may take some time to load, please be patient!`}>
                        <span className="svgContainer"><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Check out the live version!</span>
                    </a>
                </div>
            )
        }
        if (project.languages !== undefined) {
            languages = project.languages
        }
        if (project.companyName !== undefined) {
            company = `Built for: ${project.companyName}`
        }
        if(project.image !== undefined) {
            image = project.image.fields.file.url
        }
        console.log(image)
        return (
            <div className="article">
                {this.state.loading
                    && (
                        <div className="loader">
                            <Spinner />
                        </div>
                    )}
                <h2>{project.projectName}</h2>
                <div className="articleLinks">
                    <strong>Role: {project.role}</strong>
                    { company }
                    <div className="languageContainer">
                        Languages:
                        {" "}
                        {
                            languages.map((language, id) => (
                                <span className="language" key={id}>{language}</span>
                            ))
                        }
                    </div>
                    { codeAvaliable }
                    { link }
                    <div>
                        <Link to="/projects" className="button leave" title="Go back to the project homepage">
                            <span className="svgContainer"><FontAwesomeIcon icon={faTerminal} /></span>
                            <span>Back to the projects!</span>
                        </Link>
                    </div>
                </div>
                <div className="articleBody" dangerouslySetInnerHTML={{ __html: marked(details || "") }} />
            </div>
        )
    }
}

Article.propTypes = {
    project: PropTypes.object.isRequired,
    location: PropTypes.string,
    match: PropTypes.string.isRequired
}
