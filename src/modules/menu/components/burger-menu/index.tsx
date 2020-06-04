import React, { useState, useCallback, useEffect } from 'react'
import { Menu } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import { BurgerWrapper } from './styles'
import Backdrop from '../../../shared/backdrop'
import { IMenuItem } from '../../interfaces'

interface IBurgerMenu {
  menuItems: IMenuItem[]
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ menuItems }) => {
  const [active, setActive] = useState(false)

  const location = useLocation()
  useEffect(() => {
    setActive(false)
  }, [location])

  const toggleActive = useCallback(
    (newState: boolean) => setActive(newState),
    []
  )

  const renderMenu = useCallback(() => {
    if (!active) {
      return null
    }

    const items = menuItems.map(item => (
      <div className="menu-dropdown-item" key={item.name}>
        <Link to={item.path}>{item.name}</Link>
      </div>
    ))

    return <div className="menu-dropdown">{items}</div>
  }, [active, menuItems])

  return (
    <BurgerWrapper>
      <Backdrop show={active} onCancel={() => toggleActive(false)} />
      <Menu className="menu-icon" onClick={() => toggleActive(!active)} />
      {renderMenu()}
    </BurgerWrapper>
  )
}

export default BurgerMenu
