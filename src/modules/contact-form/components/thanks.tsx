import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface IThanks {
  name?: string
}

const Thanks: React.FC<IThanks> = ({ name }) => {
  const { t } = useTranslation('contactForm')

  return (
    <div className="form-thanks">
      <div>{t('thanks', { name: name || 'John Doe' })}</div>
      <div>{t('reply')}</div>
      <Link to="/">{t('back')}</Link>
    </div>
  )
}

export default Thanks
