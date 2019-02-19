import React, { Component } from 'react'

class TimeFly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 3, 
            time: 47
         };
    }

    changueText = (newTime) => {
        this.setState({ 
            time: newTime
         })
    }

    render() {
        // TODO: recibir de dron
        // setInterval(() => {
        //     let { time } = this.state
        //     time++
        //     console.log(time)
        //     this.changueText(time)
        // }, 5000);
        return (
            <div className='time'>
                <div style={{ minWidth: 50, textAlign: 'end' }}>{ this.state.hour }h</div>
                <div style={{ minWidth: 50, textAlign: 'end' }}>{ this.state.minute }m</div>
                <div style={{ minWidth: 50, textAlign: 'end' }}>{ this.state.time }s</div>
            </div>
        );
    }
}

export default TimeFly;