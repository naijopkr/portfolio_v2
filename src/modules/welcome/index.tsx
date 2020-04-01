import { Icon } from '@material-ui/core'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { WelcomeWrapper } from './styles'

const Welcome = () => {
  const { t } = useTranslation('welcome')
  const listItems = useMemo(() => t('welcome_items', { returnObjects: true }), [
    t
  ])

  const renderList = useCallback(
    () =>
      listItems.map(item => {
        const { icon, label } = item
        return (
          <li>
            <Icon>{icon}</Icon>
            {label}
          </li>
        )
      }),
    [listItems]
  )

  return (
    <WelcomeWrapper>
      <div className="title">{t('title')}</div>
      <div className="presentation">
        {t('presentation', { name: 'Ariel Barcellos' })}
      </div>
      <ul className="body-list">{renderList()}</ul>
      <a href="#projects" className="welcome-button">
        {t('go_to_projects')}
      </a>
    </WelcomeWrapper>
  )
}

export default Welcome
