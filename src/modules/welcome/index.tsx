import { Icon } from '@material-ui/core'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { WelcomeWrapper } from './styles'
import SocialMedias from '../shared/social-media'

interface IListItem {
  icon: string
  label: string
  section: string
  path?: string
}

type TRenderList = (list: IListItem[]) => JSX.Element[]
const renderList: TRenderList = list =>
  list.map(item => {
    const { icon, label, section, path } = item

    const desc = path ? (
      <span>
        <span className="section">
          <Link to={path}>{section}</Link>:{' '}
        </span>
        {label}
      </span>
    ) : (
      <span>
        <span className="section">{section}: </span>
        {label}
      </span>
    )

    return (
      <li key={label}>
        <Icon>{icon}</Icon>
        {desc}
      </li>
    )
  })

const Welcome: React.FC = () => {
  const { t } = useTranslation('welcome')
  const welcomeItems: IListItem[] = useMemo(
    () => t('welcome_items', { returnObjects: true }),
    [t]
  )

  const soonList: IListItem[] = useMemo(
    () => t('coming_soon.soon_items', { returnObjects: true }),
    [t]
  )

  return (
    <WelcomeWrapper>
      <div className="title">{t('title', { name: 'Ariel Barcellos' })}</div>
      <div className="presentation">
        {t('presentation', { name: 'Ariel Barcellos' })}
      </div>
      <ul className="body-list">{renderList(welcomeItems)}</ul>
      <div className="social-media">
        <SocialMedias />
      </div>
      <div className="subtitle">{t('coming_soon.title')}</div>
      <div className="presentation">{t('coming_soon.desc')}</div>
      <ul className="body-list">{renderList(soonList)}</ul>
      <div className="about">
        <a
          href="https://github.com/naijopkr/portfolio_v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('about')}
        </a>
      </div>
    </WelcomeWrapper>
  )
}

export default Welcome
