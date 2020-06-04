import React from 'react'
import { GitHub } from '@material-ui/icons'

import { Twitter, LinkedIn, Dev } from '../../../assets/icons'
import { SocialMediaWrapper } from './styles'

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaWrapper>
      <div className="icon">
        <a
          href="https://twitter.com/arielbarcellos"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
      </div>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/arielbarcellos/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedIn />
        </a>
      </div>
      <div className="icon">
        <a
          href="https://github.com/naijopkr"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub className="github-icon" />
        </a>
      </div>
      <div className="icon">
        <a
          href="https://dev.to/arielbarcellos"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Dev />
        </a>
      </div>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
