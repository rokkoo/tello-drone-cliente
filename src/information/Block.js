import React, { Component } from 'react'
import './App.css'

export default class Block extends Component {
  render() {
    const {data, endText, underText} = this.props
    return (
    <div className="blockContainer">
        <div className="dataInformation">
            <div className="blockData">{data}</div>
            <div className="blockText">{endText}</div>
        </div>
        <div>{underText}</div>
    </div>
    )
  }
}
