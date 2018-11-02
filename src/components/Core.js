import React from 'react'
import styled from 'styled-components'
import { withRouteData } from 'react-static'


const Installments = styled.ul`
  list-style-type: none;
  padding: 1rem 2rem;
`

const Installment = styled.li`
  max-width: 100%;
  margin-bottom: 3rem;
  border-bottom: 1px solid #242424;
  p:first-of-type:first-line {
    font-weight: bold;
  }
`
export default withRouteData(({ posts }) => (
  <div>
    <h3>testing</h3>
    <br />
    <Installments>
      {posts.map(post => (
        <Installment key={post.id}>
          <h3>post.title</h3>
          <p>post.body</p>
        </Installment>
      ))}
    </Installments>
  </div>
))


