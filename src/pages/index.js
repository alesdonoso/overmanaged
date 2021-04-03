import { graphql } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import { Bio } from '../components/bio'
import { Contents } from '../components/contents'
import { Head } from '../components/head'
import { HOME_TITLE } from '../constants'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useRenderedCount } from '../hooks/useRenderedCount'
import { useScrollEvent } from '../hooks/useScrollEvent'
import { Layout } from '../layout'
import * as Dom from '../utils/dom'
import * as EventManager from '../utils/event-manager'

const BASE_LINE = 80

function getDistance(currentPos) {
  return Dom.getDocumentHeight() - currentPos
}

export default ({ data, location }) => {
  const { siteMetadata } = data.site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges
  const [count, countRef, increaseCount] = useRenderedCount()

  useIntersectionObserver()
  useScrollEvent(() => {
    const currentPos = window.scrollY + window.innerHeight
    const isTriggerPos = () => getDistance(currentPos) < BASE_LINE
    const doesNeedMore = () =>
      posts.length > countRef.current * countOfInitialPost

    return EventManager.toFit(increaseCount, {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  })

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
      <Bio />
      <Contents
        posts={posts}
        countOfInitialPost={countOfInitialPost}
        count={count}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 160, truncate: true)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            draft
          }
        }
      }
    }
  }
`
