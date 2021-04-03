import React, { useMemo } from 'react'

import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'

export const Contents = ({ posts, countOfInitialPost, count }) => {
  const refinedPosts = useMemo(() => posts.slice(0, count * countOfInitialPost))

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </ThumbnailContainer>
  )
}
