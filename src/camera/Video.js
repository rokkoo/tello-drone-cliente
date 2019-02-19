import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Video extends Component {
    render(){
        return(
            <div style={{ paddingTop: 2 }}>
                <Icon 
                name='video'
                size='large'
                />
            </div>
        )
    }
}