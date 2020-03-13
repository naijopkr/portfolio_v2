import React, { useCallback, useState } from 'react'
import { Settings as CogIcon } from '@material-ui/icons'

import { MenuWrapper, SettingsIcon } from './styles'
import Logo from './components/logo'
import Config from './components/config'
import Backdrop from '../shared/backdrop'

const Menu = () => {
  const [showConfig, setShowConfig] = useState(false)
  const toggleShowConfig = useCallback(() => {
    setShowConfig(!showConfig)
  }, [showConfig])

  return (
    <MenuWrapper>
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <Backdrop show={showConfig} onCancel={toggleShowConfig} />
        <SettingsIcon>
          <CogIcon onClick={toggleShowConfig} />
          <Config show={showConfig} onCancel={toggleShowConfig} />
        </SettingsIcon>
      </div>
    </MenuWrapper>
  )
}

export default Menu
