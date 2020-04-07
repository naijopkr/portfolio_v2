import React from 'react'

import { TagWrapper } from '../styles'

interface ITag {
  label: string
}

const Tag: React.FC<ITag> = ({ label }) => <TagWrapper>{label}</TagWrapper>

export default Tag
