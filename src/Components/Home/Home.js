import React from 'react';

import { createClient } from 'contentful'

import VizAwareImg from '../VizAwareImg/VizAwareImage'

import './Home.scss';

const CONTENTFUL_SPACE = '21nhxxvf3po0',
      CONTENTFUL_TOKEN = 'ba71aa941315ef7ed462e4f40c9babe61d37ef6fc49c9db37ccd84c9246f6267'

const client = createClient({
    space: CONTENTFUL_SPACE,
    accessToken: CONTENTFUL_TOKEN
})

const marked = require('marked')

export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            page: [],
            visible: []
        }
    }

    componentDidMount() {
        this.getHome()
    }

    getHome(){
        client.getEntries({
            'sys.contentType.sys.id': 'homePage'
        }).then(page => {
            this.setState({
                page: page.items[0].fields,
                imgViz: false
            })
        })
    }

    render () {
        let { page } = this.state

        return (
            <div className = "home">
                <div className = "bandContainer">
                    {
                        (page.bands||[]).map((band, id) => {
                            return(
                                <div className = "band" key = {id}>
                                    <div className = "innerBand">
                                        <h3>{band.fields.title}</h3>
                                        <div className = "bandBody" dangerouslySetInnerHTML = {{__html: marked(band.fields.details)}}></div>
                                        <VizAwareImg src = {band.fields.imageUrl} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
