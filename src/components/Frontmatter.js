import React, { Component } from 'react'
import style from 'styled-components'

const Titles = style.div`
  width: 900px;
  max-width: 100%;
  margin: 0 auto 2rem;
  padding: 1rem
  border-bottom: 2px solid black;
  
  h1 {
    text-transform: uppercase;
  }

  h2 {
    color: grey;
  }

  div {
    max-width: 75%;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  p {
    font-size: 1.25rem;
    // font-weight: bold;
  }
`

const Em = style.p`
  font-style: italic;
  margin-left: 2rem;
`

class Frontmatter extends Component {
  render() {
    return (
      <Titles>
        <h1>The Opening Door</h1>
        <h2>By <strong>Helen Reilly</strong></h2>
        <div className="tease">
          <p>This is the story of a beautiful and haunted young woman.</p>
          <Em>When she was one year old, she was worth nine hundred thousand dollars.</Em>
          <Em>At twenty-one, she was sole heir to five million.</Em>
          <Em>Before she was twenty-two, she had endured more heartache, greed and violence than her whole estate was worth.</Em>
          <p>It was anyone's guess whether she would ever see twenty-three.</p>
        </div>
      </Titles>
    );
  }
}

export default Frontmatter;