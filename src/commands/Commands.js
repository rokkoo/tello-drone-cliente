import React from 'react'
import Command from './Command'
import './app.css'

import { SocketContext } from '../fetch'

export default function Commands() {
    const distancia = 100

    return(
        <div className='commands'>
        <Command
            text={`Ir hacia adelante`}
            iconName='battery half'
        />
        <Command
            text={`Adelante ${distancia}cm`}
            command={`forward ${distancia}`}
            backgroundColor='#ff4d4d'
            iconName='arrow up'
        />
        <Command
            text={`Ir hacia adelante`}
            iconName='battery half'
        />
        <Command
            text={`Izquierda ${distancia}cm`}
            command={`left ${distancia}`}
            backgroundColor='#ff4d4d'
            iconName='arrow left'
        />
        <div className="centerCommand">
            <Command
                text={'Despegar'}
                command={`takeoff`}
                backgroundColor='#ffaf40'
                iconName='angle double up'
            />
            <Command
                text={'Aterrizar'}
                backgroundColor='#ffaf40'
                command={`land`}
                iconName='angle double down'
            />
        </div>
        <Command
            text={`Derecha ${distancia}cm`}
            backgroundColor='#ff4d4d'
            command={`right ${distancia}`}
            iconName='arrow right'
        />
        <Command
            text={'Ir hacia adelante'}
            iconName='battery half'
        />
        <Command
            text={`Atras ${distancia}cm`}
            command={`back ${distancia}`}
            backgroundColor='#ff4d4d'
            iconName='arrow down'
        />
        <Command
            text={'Ir hacia adelante'}
            iconName='battery half'
        />
        <div className='joke'>
            <h1>Jokes</h1>
        </div>
        <Command
            text={'Flip hacia la izquierda'}
            command='flip l'
        />
        <div className='flipCenter'>
            <Command
                text={'Flip hacia adelante'}
                command='flip f'
            />
            <Command
                text={'Flip hacia atras'}
                command='flip b'
            />
        </div>
        <Command
            text={'Flip hacia la izquierda'}
            command='flip r'
        />
    </div>
    )
}