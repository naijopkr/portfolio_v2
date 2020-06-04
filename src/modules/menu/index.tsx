import React, { useCallback, useState } from 'react'
import { Settings as CogIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { MenuWrapper, SettingsIcon } from './styles'
import BurgerMenu from './components/burger-menu'
import Logo from './components/logo'
import Config from './components/config'
import Backdrop from '../shared/backdrop'
import { IMenuItem } from './interfaces'

const Menu: React.FC = () => {
  const [showConfig, setShowConfig] = useState(false)
  const { t } = useTranslation('menu')

  const toggleShowConfig = useCallback(() => {
    setShowConfig(!showConfig)
  }, [showConfig])

  const handleClose = useCallback(() => setShowConfig(false), [])

  const renderMenuItems = useCallback(() => {
    const menuItems: IMenuItem[] = t('menu_items', { returnObjects: true })

    if (window.innerWidth < 480) {
      return <BurgerMenu menuItems={menuItems} />
    }

    return menuItems.map(({ name, path }) => {
      return (
        <Link to={path} className="menu-item" key={name}>
          {name}
        </Link>
      )
    })
  }, [t])

  return (
    <MenuWrapper>
      <div className="left">
        <Logo />
        <div className="menu-beta">BETA</div>
      </div>
      <div className="right">
        {renderMenuItems()}
        <Backdrop show={showConfig} onCancel={toggleShowConfig} />
        <SettingsIcon>
          <CogIcon onClick={toggleShowConfig} />
          <Config show={showConfig} onSelect={handleClose} />
        </SettingsIcon>
      </div>
    </MenuWrapper>
  )
}

export default Menu
