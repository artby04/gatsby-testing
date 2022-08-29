import React from "react"
import { graphql } from "gatsby"

const Testing = props => {
  return (
    <div>
      <h2>Testing</h2>
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
export default Testing
