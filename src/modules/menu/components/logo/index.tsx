import React from 'react'
import { Link } from 'react-router-dom'

import { LogoWrapper } from './styles'

const Logo: React.FC = () => (
  <LogoWrapper>
    <Link to="/" className="logo">
      AB
    </Link>
  </LogoWrapper>
)

export default Logo
