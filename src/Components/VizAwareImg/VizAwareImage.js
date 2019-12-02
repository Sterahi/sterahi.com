import React from 'react'

import VizSensor from 'react-visibility-sensor'

import './VizAwareImg.scss'

export default class VizAwareImg extends React.Component {
    state = {
        imgViz: false
    }

    render() {
        return(
            <VizSensor
                partialVisibility
                onChange = {(isVisible) => {
                    this.setState({imgViz: isVisible})
                }}>
                    <div className = "bkgImage" style ={{
                        background: `url(${this.props.src}) center center / cover no-repeat`,
                        opacity: this.state.imgViz ? 1 : .25,
                        right: this.state.imgViz? 0: -300,
                        transition: 'ease all 1s'
                    }}>
                        <div className= 'innerImage'></div>
                    </div>
            </VizSensor>
        )
    }
}
