import { render, screen } from '@testing-library/react'

import { TagTypes, Typography } from './Typography'

const mockText = 'test text content'

const tagTypes = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as TagTypes[]

describe('<Typography />', () => {
  tagTypes.forEach((tag) => {
    it(`renders <${tag}> as expected`, () => {
      render(<Typography tag={tag}>{mockText}</Typography>)

      expect(screen.getByText(mockText)).toBeInTheDocument()
      expect(screen.getByText(mockText).nodeName).toBe(tag.toUpperCase())
    })
  })
})
