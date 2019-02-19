import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import qs from 'qs' // CStringify library

// Fetch drone information
export default class StatusBar extends Component {
    fetchInformation = async (cmd = 'battery?') => {
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
    
        // wait for response
        await axios.post(`http://localhost:3020/`, qs.stringify({
            cmd
        }), config)
    }
    render(){
        return(
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',

            }}
            >
                <Button.Group>
                    <Button onClick={(e) => this.fetchInformation('takeoff')}>Despegar</Button>
                    <Button.Or />
                    <Button positive onClick={(e) => this.fetchInformation('land')}>Atterrizar</Button>
                </Button.Group>
                <div style={{paddingTop: 10, textAlign: 'center'}}>
                    <Button negative onClick={e => this.fetchInformation('emergency')}>Emergencia</Button>
                </div>
            </div>
        )
    }
}