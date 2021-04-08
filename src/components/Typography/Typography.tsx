import React, { FunctionComponent } from 'react'

export const Typography: FunctionComponent<Props> = ({ tag: Tag, children }) => {
  return <Tag>{children}</Tag>
}

type Props = {
  tag: TagTypes
}

type TagTypes = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
