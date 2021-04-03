import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { SubscribeForm } from '../components/subscribe'
import * as ScrollManager from '../utils/scroll'

import '../styles/code.scss'
import './index.scss'
import 'katex/dist/katex.min.css'

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, author } = metaData
  const { title: postTitle, date } = post.frontmatter

  return (
    <Layout location={location} title={title}>
      <Head title={postTitle} description={post.excerpt} />
      <PostTitle title={postTitle} />
      <div className="post-information">
        <PostDate date={date} />
        <p>&nbsp; · &nbsp;{post.fields.readingTime.text}</p>
      </div>
      <PostContainer html={post.html} />
      <SocialShare title={postTitle} author={author} />
      <SubscribeForm />
      <Bio />
      <PostNavigator pageContext={pageContext} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
