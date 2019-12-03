import React from 'react'
import { Link } from 'react-router-dom'

import VizSensor from 'react-visibility-sensor'

import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './VizAwareCard.scss'

export default class VizAwareCard extends React.Component {
    state = {
        cardViz: false,
        once: false
    }

    onChangeVisibility(isVisible) {
        this.setState({visibile: isVisible})
    }

    render() {
        let  { project } = this.props,
            codeAvaliable

        if(project.gitlLink !== undefined) {
            codeAvaliable = <div className="iconWrapper"><FontAwesomeIcon icon = {faCode} /></div>
        } else {
            codeAvaliable = <div className="iconWrapper"></div>
        }

        return (
            <VizSensor
                partialVisibility
                onChange = {
                    (isVisible) => {
                        this.setState({
                            cardViz: isVisible
                        })
                }
            }>
                <div className = 'card'
                    style = {{
                        background: `url(${project.image.fields.file.url}) center center / cover no-repeat`,
                        opacity: this.state.cardViz ? 1: .25,
                        transition: 'ease all 1.5s'
                }}>
                    <div className = "cardInner">
                        <span>{project.projectName}</span>
                        <Link to = {`/project/${project.slug}`} className = "button">See Details!</Link>
                        {codeAvaliable}
                    </div>
                </div>
            </VizSensor>
        )
    }
}
