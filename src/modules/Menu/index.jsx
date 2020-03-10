import React from 'react'
import { Settings } from '@material-ui/icons'

import { MenuWrapper, SettingsIcon } from './styles'
import Logo from './components/Logo'

const Menu = () => (
  <MenuWrapper>
    <div className="left">
      <Logo />
    </div>
    <div className="right">
      <SettingsIcon>
        <Settings />
      </SettingsIcon>
    </div>
  </MenuWrapper>
)

export default Menu
