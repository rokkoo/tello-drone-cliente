import React, { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import './app.css'

import { SocketContext } from '../fetch'

export default function  Command({ text, iconName, backgroundColor = '#cd84f1', command }) {
    if(iconName) {
        return(
            <SocketContext.Consumer>
            {context => (
                <div
                style = {{
                    backgroundColor
                }}
                className="commandContainer"
                onClick={context.sendCommand.bind(this, command)}
                >
                    <Icon 
                        name={iconName}
                        size='large'
                    />
                    <p>{text}</p>
                </div>
            )}
        </SocketContext.Consumer>
        )
    }else {
        return(
            <SocketContext.Consumer>
            {context => (
                <div
                style = {{
                    backgroundColor
                }}
                className="commandContainer"
                onClick={context.sendCommand.bind(this, command)}
                >
                    <p>{text}</p>
                </div>
            )}
        </SocketContext.Consumer>
        )
    }
}