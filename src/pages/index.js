import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../templates/gallery'

class IndexPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Hi people</h1>
    
        <h2>Here's my gallery:</h2>
        <Gallery />
        
        <h2>Here are my subpages:</h2>
        <ul>
          <li><Link to="/subpage/">A subpage</Link></li>
        </ul>
        
        <h2>Here are my posts:</h2>
        <ul>
          <li><Link to="/blogpost/">A post</Link></li>
        </ul>
      </div>
    )    
  }
}

export default IndexPage

export const indexQuery = graphql`
query indexQuery {
  pages: allContentfulPage {
    edges {
      node {
        id
        title
      }
    }
  }
  posts: allContentfulBlogPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
`