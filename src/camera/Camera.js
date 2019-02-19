import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Camera extends Component {
    render(){
        return(
            <div>
                <Icon 
                name='camera'
                size='large'
                inverted
                />
            </div>
        )
    }
}