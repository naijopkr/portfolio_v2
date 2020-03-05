import React from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation('global')

  return <div>{t('welcome')}</div>
}

export default App
