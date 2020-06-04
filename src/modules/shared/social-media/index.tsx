import React from 'react'

import { Twitter, LinkedIn } from '../../../assets/icons'
import { SocialMediaWrapper } from './styles'

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaWrapper>
      <div className="icon">
        <Twitter />
      </div>
      <div className="icon">
        <LinkedIn />
      </div>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
