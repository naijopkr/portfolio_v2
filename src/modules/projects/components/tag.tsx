import React from 'react'
import classnames from 'classnames'

import { TagWrapper } from '../styles'

interface ITag {
  label: string
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  active?: boolean
}

const Tag: React.FC<ITag> = ({ label, onClick, active = false }) => (
  <TagWrapper className={classnames({ active })} onClick={onClick}>
    {label}
  </TagWrapper>
)

export default Tag
