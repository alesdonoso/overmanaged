import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <a
                  href="https://twitter.com/alesdonoso"
                  target="_blank"
                  className="author-name-content"
                >
                  <span>@{author}</span>
                </a>
                <div className="author-introduction">{introduction}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
      }
    }
  }
`

export default Bio
