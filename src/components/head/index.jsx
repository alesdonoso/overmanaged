import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export function Head({
  description,
  lang,
  meta,
  image: metaImage,
  keywords,
  title,
  pathname,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const image =
          metaImage && metaImage.src
            ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
            : null
        const canonical = pathname
          ? `${data.site.siteMetadata.siteUrl}${pathname}`
          : null
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={
              canonical
                ? [
                    {
                      rel: 'canonical',
                      href: canonical,
                    },
                  ]
                : []
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(
                metaImage
                  ? [
                      {
                        property: 'og:image',
                        content: image,
                      },
                      {
                        property: 'og:image:width',
                        content: metaImage.width,
                      },
                      {
                        property: 'og:image:height',
                        content: metaImage.height,
                      },
                      {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                      },
                    ]
                  : [
                      {
                        name: 'twitter:card',
                        content: 'summary',
                      },
                    ]
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: [],
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
