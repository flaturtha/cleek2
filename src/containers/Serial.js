import React, { Component } from 'react'
// import style from 'styled-components'

import Frontmatter from '../components/Frontmatter'
import Core from '../components/Core'
import Endmatter from '../components/Endmatter'

export default class Book extends Component {
  render () {
    return (
      <div>
        <Frontmatter />
        <Core />
        <Endmatter />
      </div>
    )
  }
}