import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import { PostDate } from '../post-date'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <small>
        <p style={{ margin: 0 }}>
          {node.frontmatter.date}&nbsp; · &nbsp; {node.fields.readingTime.text}
        </p>
      </small>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
