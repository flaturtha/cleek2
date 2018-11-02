import React, { Component } from 'react'
import style from 'styled-components'

const EmP = style.p`
  font-size: 0.75rem;
  color: lightgrey;
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`

class Endmatter extends Component {
  render() {
    return <EmP>ENDMATTER</EmP>;
  }
}

export default Endmatter;