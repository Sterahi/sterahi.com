import React from "react"

import VizSensor from "react-visibility-sensor"
import PropTypes from "prop-types"

import "./VizAwareImg.scss"

export default class VizAwareImg extends React.Component {
    constructor() {
        super()
        this.state = {
            imgViz: false
        }
    }

    render() {
        return(
            <VizSensor
                partialVisibility
                onChange = {
                    (isVisible) => {
                        this.setState({imgViz: isVisible})
                    }}>
                <div className = "bkgImage" style ={{
                    background: `url(${this.props.src}) center center / cover no-repeat`,
                    opacity: this.state.imgViz ? 1 : .25,
                    marginLeft: this.state.imgViz? 0: -300,
                    transition: "ease all 1.5s"
                }}>
                    <div className= 'innerImage'></div>
                </div>
            </VizSensor>
        )
    }
}
VizAwareImg.propTypes = {
    src: PropTypes.string.isRequired
}
