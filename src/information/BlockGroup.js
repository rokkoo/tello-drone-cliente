import React, { Component } from "react";

import Block from './Block'

const blockData = {
    'data': 18,
    'endText': `m/s`,
    'underText': 'speed'
  }
  
export default class BlockGroup extends Component {
    render() {
      return (
        <div>
          <Block
            data={blockData.data}
            endText={blockData.endText}
            underText={blockData.underText}
           />
          <Block
            data={blockData.data}
            underText={blockData.underText}
           />
          <Block
            data={blockData.data}
            endText={blockData.endText}
            underText={blockData.underText}
           />
        </div>
      )
    }
}
